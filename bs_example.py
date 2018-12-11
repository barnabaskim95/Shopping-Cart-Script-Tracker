from bs4 import BeautifulSoup
from urllib.request import urlopen
import requests

URL="https://hackathon.wopr.cc/index.php/checkout/#payment"
r= requests.get(URL)
html_content=r.text
soup=BeautifulSoup(html_content,"html.parser")

href_tags= soup.find_all(href=True) #Array containing href tags
script_tags= soup.find_all('script')# Array containing all scripts

