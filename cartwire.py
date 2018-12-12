#!/usr/bin/env python3

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import re
import pandas as pd
from tabulate import tabulate
import os
import time
import wget
import base64
import hashlib
import uuid

#local imports for tracking functions
from filecheck import validateFile


#TEST URLS
url = "https://hackathon.wopr.cc/index.php/didi-sport-watch.html"
urlcheckout = "https://hackathon.wopr.cc/index.php/checkout/"
urlpayment = "https://hackathon.wopr.cc/index.php/checkout/#payment"

# create a new Firefox session
#driver = webdriver.Firefox()
profile = webdriver.FirefoxProfile()
profile.set_preference("browser.cache.disk.enable", False)
profile.set_preference("browser.cache.memory.enable", False)
profile.set_preference("browser.cache.offline.enable", False)
profile.set_preference("network.http.use-cache", False)
driver = webdriver.Firefox(profile)

#create Chrome session
#chrome_options = Options()  
#chrome_options.add_argument("--headless")  
#chrome_options.binary_location = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'  
#driver = webdriver.Chrome(executable_path=os.path.abspath("chromedriver"), chrome_options=chrome_options)
#driver = webdriver.Chrome("chromedriver")

driver.get(url)
print ("Waiting for page to completely load...")
time.sleep(12)

#After opening the url above, Selenium clicks the specified link
#python_button = driver.find_element_by_id( buttonone ) #FHSU
#python_button.click() #click fhsu link

#Selenium hands the page source to Beautiful Soup
soup_level1=BeautifulSoup(driver.page_source, 'html.parser')

datalist = [] #empty list
x = 0 #counter

#Selenium searches for tocart form and adds one then tries to check out
#http://toolsqa.com/selenium-webdriver/findelement-and-findelements-command/
productpage = soup_level1.get_text()

#print link

#find an add to cart button
print ("Preparing to add item to cart...")
python_button = driver.find_element_by_id("product-addtocart-button")
python_button.click()
print ("Product added. Looking for cart.")
time.sleep(5)

#click the cart button to view the cart
#python_button = driver.find_element_by_partial_link_text('checkout')
#python_button = driver.find_element_by_xpath("//a[contains(@class, 'checkout')]")
#python_button = driver.find_element_by_css_selector("minicart-wrapper")
#python_button.click()

print ("Moving to Checkout")

#click the checkout button...
driver.get(urlcheckout)
time.sleep(10)

print ("Completing shipping details.")
#fill in shipping details
#driver.find_element_by_xpath("//*[@id='customer-email']").SendKeys("testadfadjre@mailinator.com")
driver.find_element_by_id("customer-email").send_keys("testadfadfadfad@mailinator.com")


#Click Next
print ("Skipping to payment page.")
#or lets just skip it and go right to the payment page.
driver.get(urlpayment)
time.sleep(10)

#Select Visa...
print ("Selecting credit card payment type, and waiting for complete page load.")
driver.find_element_by_id("braintree").click()
time.sleep(10)

#NOW we're on the payment page! Scrape for all javascript here
print ("Payment page loaded. Scraping for javascript elements.")

#Selenium hands of the source of the specific job page to Beautiful Soup
soup_level2=BeautifulSoup(driver.page_source, 'html.parser')

href_tags= soup_level2.find_all(href=True) #Array containing href tags
script_tags= soup_level2.find_all('script')# Array containing all scripts

#Mess with the scripts...
#print script_tags

for tag in script_tags:
   filename = ""
   if tag.get('src') is None:
      print ("Processing embedded script")
      filename = str(uuid.uuid4()) + '.js'
      file = open(filename,"w")
      file.write(str(tag))
      file.close()
   else:
      url = tag['src'].split("?")[0]
      print ("Pulling script reference: {}".format(url))
      filename = wget.download(url)
   print ("  {} filename saved.".format(filename))
   file = open(filename,'rb')
   file_content = file.read()
   file_content_encode = base64.b64encode(file_content)
   print ("  base64 encoded for database storage")
   print ("  Calculating SHA256 hash of original file")
   hasher = hashlib.sha256()
   hasher.update(file_content)
   print ("  SHA256 hash: {}".format(hasher.hexdigest()))
   file.close()
   
   #Time for integrity monitoring
   print ("  Checking against integrity database.")
   base_url = url.split("://")[1].split("/")[0]
   if tag.get('src') is None:
      validateFile(base_url,hasher.hexdigest(),file_content_encode,filename)
   else:
      validateFile(base_url,hasher.hexdigest(),file_content_encode,url)


driver.quit()
exit()
