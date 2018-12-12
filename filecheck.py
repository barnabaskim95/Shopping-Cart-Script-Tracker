#!/usr/bin/env python3
from utils import hashText, diffText, stripVars
from datetime import datetime
import sqlite3
conn = sqlite3.connect('sqlite.db')
c = conn.cursor()

# Query database for file
def queryFile(site, fileName):
    c.execute('SELECT * FROM hashes WHERE site=? AND fileName=?', (site,fileName))
    r = c.fetchone()
    if(r):
        return r
    else:
        return False

# Add new file to database
def addFile(site, fileName, fileHash, fileData):
    r = c.execute('INSERT INTO hashes (site,filename,hash,data, created, updated) VALUES(?,?,?,?,?,?)', (site,fileName,fileHash, fileData,datetime.now(),datetime.now()))
    conn.commit()
    if(r):
        return True
    else:
        return False

# Checks for existing file and validates hash. If not found, add new entry.
def validateFile(site, fileName, keys):
    res = stripVars(fileName, keys)
    fhash = hashText(res)
    r = queryFile(site, fileName)
    if(r):
        lastHash = r[3]
        lastData = r[4]
        print("Last:    " + lastHash)
        print("Current: " + fhash)
        if(fhash == lastHash):
            print("Pass! " + fileName + " hash value is the same!")
            r = c.execute('INSERT INTO results (site,filename,result,old_hash,new_hash,timestamp) VALUES(?,?,?,?,?,?)', (site, fileName, 'pass', lastHash, fhash, datetime.now()))
            conn.commit()
            return True
        else:
            diff = diffText(lastData, res)
            print("Fail! " + fileName + " hash value has changed!")
            print(diff)
            r = c.execute('INSERT INTO results (site,filename,result,old_hash,new_hash,diff,timestamp) VALUES(?,?,?,?,?,?,?)', (site, fileName, 'fail', lastHash, fhash, diff, datetime.now()))
            conn.commit()
            return False
    else:
        print("Add new file hash")
        r = addFile(site, fileName, fhash, res)
        if(r):
            c.execute('INSERT INTO results (site,filename,result,old_hash,new_hash,timestamp) VALUES(?,?,?,?,?,?)', (site, fileName, 'new', fhash, fhash, datetime.now()))
            conn.commit()
            print("Done")
        else:
            print("Error")

def main():
    validateFile("hackathon.wopr.cc", "eProtect-api2.js", [])

if __name__ == "__main__":
    main()