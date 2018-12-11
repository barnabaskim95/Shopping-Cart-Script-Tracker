#!/usr/bin/env python3
import hashlib
import difflib
import jsbeautifier
import re
import sqlite3
conn = sqlite3.connect('sqlite.db')
c = conn.cursor()

# Hashes a file with SHA256
def hashFile(fileName):
    hshr = hashlib.sha256()
    with open(fileName, 'rb') as flnm:
        buff = flnm.read(65535)
        while len(buff) > 0:
            hshr.update(buff)
            buff = flnm.read(65535)        
    return hshr.hexdigest()

# Hashes text with SHA256
def hashText(text):
    hshr = hashlib.sha256()
    hshr.update(text.encode('utf-8'))
    return hshr.hexdigest()

# Performs a unified diff on two files
def diffFile(file1, file2):
    res1 = jsbeautifier.beautify_file(file1).split('\n')
    res2 = jsbeautifier.beautify_file(file2).split('\n')
    diff = difflib.unified_diff(res1,res2)
    return '\n'.join(diff)

# Performs a unified diff on text
def diffText(text1, text2):
    res1 = jsbeautifier.beautify(text1).split('\n')
    res2 = jsbeautifier.beautify(text2).split('\n')
    diff = difflib.unified_diff(res1,res2)
    return '\n'.join(diff)

# Removes values for dynamic variables (can be used before diff)
def stripVars(fileName, keys):
    res = jsbeautifier.beautify_file(fileName)
    for akey in keys:
        res = re.sub(r'%s\:\s\".*\"' % akey, '%s: ""'% akey, res)
    return res

# Query database for file
def queryFile(site, fileName):
    c.execute('SELECT * FROM hashes WHERE site=? AND fileName=?', ('hackathon.wopr.cc',fileName))
    r = c.fetchone()
    if(r):
        return r
    else:
        return False

# Add new file to database
def addFile(site, fileName, fileHash, fileData):
    r = c.execute('INSERT INTO hashes (site,filename,hash,data) VALUES(?,?,?,?)', (site,fileName,fileHash, fileData))
    conn.commit()
    if(r):
        return True
    else:
        return False

# Checks for existing file and validates hash. If not found, add new entry.
def validateFile(fileName, keys):
    res = stripVars(fileName, keys)
    fhash = hashText(res)
    r = queryFile('hackathon.wopr.cc', fileName)
    if(r):
        lastHash = r[3]
        lastData = r[4]
        print("Last:    " + lastHash)
        print("Current: " + fhash)
        if(fhash == lastHash):
            print("Pass! " + fileName + " hash value is the same!")
            return True
        else:
            diff = diffText(lastData, res)
            print("Fail! " + fileName + " hash value has changed!")
            print(diff)
            return False
    else:
        print("Add new file hash")
        r = addFile('hackathon.wopr.cc', fileName, fhash, res)
        if(r):
            print("Done")
        else:
            print("Error")

def main():
    validateFile("eProtect-api2.js", ['keyId'])

if __name__ == "__main__":
    main()