from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
import os
import time

# http://127.0.0.1:8081
#launch url
url = "http://127.0.0.1:8000/"

# create a new Chrome session
chromedriver = "/usr/local/bin/chromedriver"
driver = webdriver.Chrome(chromedriver)
driver.implicitly_wait(30)
driver.get(url)

for i in range(100):
    driver.get(url)
    time.sleep(5)
    
result_performance = driver.execute_script("return localStorage.getItem('Performance')")
result_body = driver.execute_script("return localStorage.getItem('bodyRendering')")
driver.quit()



#get current working directory
path = os.getcwd()

#open, write, and close the file
f = open(path + "/01-js-component/Performance.json","w") #FHSU
f.write(result_performance)
f.close()

#open, write, and close the file
f = open(path + "/01-js-component/BodyRendering.json","w") #FHSU
f.write(result_body)
f.close()

print('finito')