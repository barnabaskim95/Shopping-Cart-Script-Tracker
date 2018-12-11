from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup
import re
import pandas as pd
from tabulate import tabulate
import os


#launch url
url = "https://hackathon.wopr.cc/index.php/didi-sport-watch.html"
buttonone = "action more button"

# create a new Firefox session
driver = webdriver.Firefox()
driver.implicitly_wait(30)
driver.get(url)

#After opening the url above, Selenium clicks the specified link
#python_button = driver.find_element_by_id( buttonone ) #FHSU
#python_button.click() #click fhsu link

#Selenium hands the page source to Beautiful Soup
soup_level1=BeautifulSoup(driver.page_source, 'html.parser')

datalist = [] #empty list
x = 0 #counter

#Selenium searches for tocart form and adds one then tries to check out
#http://toolsqa.com/selenium-webdriver/findelement-and-findelements-command/
link = soup_level1.get_text()
print link
#find an add to cart button
python_button = driver.find_element_by_id("product-addtocart-button")
python_button.click()

print("added??")

#click the cart button to view the cart
python_button = driver.find_element_by_class_name("action showcart")
python_button.click()

print("checkout")

#click the checkout button...


#Selenium hands of the source of the specific job page to Beautiful Soup
soup_level2=BeautifulSoup(driver.page_source, 'lxml')

#Beautiful Soup grabs the HTML table on the page
table = soup_level2.find_all('table')[0]
    
#Giving the HTML table to pandas to put in a dataframe object
df = pd.read_html(str(table),header=0)
    
#Store the dataframe in a list
datalist.append(df[0])
    
#end the Selenium browser session
driver.quit()

#combine all pandas dataframes in the list into one big dataframe
result = pd.concat([pd.DataFrame(datalist[i]) for i in range(len(datalist))],ignore_index=True)

#convert the pandas dataframe to JSON
json_records = result.to_json(orient='records')

#pretty print to CLI with tabulate
#converts to an ascii table
print(tabulate(result, headers=["Employee Name","Job Title","Overtime Pay","Total Gross Pay"],tablefmt='psql'))

#get current working directory
path = os.getcwd()

#open, write, and close the file
f = open(path + "\\fhsu_payroll_data.json","w") #FHSU
f.write(json_records)
f.close()
