# hackathon
Worldpay Hackathon (Dec 2018 ed.)

This is a program that detects changes to a web page at payment checkout for a sample site. This mimics the page changes that attacks from groups such as Magecart ran. These changes are stored into a file, and an email alert is automatically sent to an email of your choice. 

To run this program:

1. Clone the repository to a new folder. Note: Python 3.* must be installed in the project directory.

2. In the command line, in the project directory, run: cp sqlite.db.1 sqlite.db

3. Run py cartwire.py   
      On first run, there might be a bunch of missing packages- this is expected. Complete the following steps:
      1. Install Firefox
      2. Install missing python modules with: pip3 install module_name<br/>
    Example modules include: selenium, bs4, tabulate, pandas
      3. Install geckodriver from here: https://github.com/mozilla/geckodriver/releases
      
      For Windows: 
        On Windows, your PATH system variables must be updated to include Selenium and geckodriver. 
        1. Navigate to Control Panel\System and Security\System 
        2. Click on 'Advanced system settings'
        3. Click 'Environment variables'
        4. In 'System Variables', select the 'Path' variable. Click 'edit'
        5. In the pop-up, click 'edit text'
        6. Move the cursor to the end of the highlighted 'variable value', past the semicolon. 
        7. Place the system location for the directories containing the following:
            a. Python 
            b. Selenium
            c. Geckodriver
4. Rerun py cartwire.py

Enjoy!
