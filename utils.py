#!/usr/bin/env python3
import hashlib
import difflib
import jsbeautifier
import re

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