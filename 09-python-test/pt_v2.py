from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
import os
import time


# -----------------------#
# -----------------------#
# -----------------------#
url = "http://127.0.0.1:8005/"

# create a new Chrome session
chromedriver = "/usr/local/bin/chromedriver"
driver = webdriver.Chrome(chromedriver)
driver.implicitly_wait(30)
driver.get(url)

for i in range(100):
    driver.get(url)
    time.sleep(2)
    
result_body = driver.execute_script("return localStorage.getItem('bodyRendering')")
driver.quit()



#get current working directory
path = os.getcwd()


#open, write, and close the file
f = open(path + "/05-vue/BodyRendering.json","w") #FHSU
f.write(result_body)
f.close()

print('finito')