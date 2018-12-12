#!/usr/bin/env python3
from utils import hashText, encodeText, decodeText, diffText, stripVars
from datetime import datetime
import sqlite3
conn = sqlite3.connect('sqlite.db')
c = conn.cursor()

def diffCheck(hash1, hash2):
    c.execute('SELECT * FROM hashdata WHERE hash=?', (hash1,))
    r = c.fetchone()

    c.execute('SELECT * FROM hashdata WHERE hash=?', (hash2,))
    s = c.fetchone()

    data1 = decodeText(r[1])
    data2 = decodeText(s[1])

    res = diffText(data1, data2)
    print(res)
    return res

# Checks for existing file and validates hash. If not found, add new entry.
def validateFile(site, hash, data, name):
    timestamp = datetime.now()

    # Check if hash and data already exist
    c.execute('SELECT * FROM hashdata WHERE hash=? AND data=?', (hash,data))
    r = c.fetchone()
    
    # If not, add a new entry
    if not r:
        c.execute('INSERT INTO hashdata (hash,data) VALUES(?,?)', (hash, data))
        conn.commit()
    
    # Add a new check record
    c.execute('INSERT INTO hashes (site,hash,name,timestamp) VALUES(?,?,?,?)', (site,hash,name,timestamp))
    conn.commit()

    # See if the same site and hash match a previous entry
    c.execute('SELECT * FROM hashes WHERE site=? AND hash=? AND timestamp < ?', (site, hash, timestamp))
    r = c.fetchone()
    
    # If previous entry found, no change detected
    if(r):
        print("Previous entry exists")
        return True
    # If no previous entry, a potential change has been detected
    else:
        print("Previous entry does not exist")
        print("CHANGE DETECTED!")
        return False
    
def main():
    f = open("eProtect-api2.js", "r").read()
    validateFile("hackathon.wopr.cc", hashText(f), encodeText(f), "eProtect-api2.js")

if __name__ == "__main__":
    main()