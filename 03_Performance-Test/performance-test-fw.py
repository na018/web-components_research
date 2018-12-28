from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
import os
import time

url = "http://127.0.0.1:8000/"

# create a new Chrome session
chromedriver = "/usr/local/bin/chromedriver"
driver = webdriver.Chrome(chromedriver)
driver.implicitly_wait(30)
driver.get(url)

for i in range(100):
    driver.get(url)
    time.sleep(2)
    
result_performance = driver.execute_script("return localStorage.getItem('Performance')")
result_body = driver.execute_script("return localStorage.getItem('bodyRendering')")
driver.quit()



#get current working directory
path = os.getcwd()


#open, write, and close the file
f = open(path + "/00-global-styling/BodyRendering.json","w") #FHSU
f.write(result_body)
f.close()

print('finito')

# -----------------------#
# -----------------------#
# -----------------------#
url = "http://127.0.0.1:8001/"

# create a new Chrome session
driver = webdriver.Chrome(chromedriver)
driver.implicitly_wait(30)
driver.get(url)

for i in range(100):
    driver.get(url)
    time.sleep(2)
    
result_performance = driver.execute_script("return localStorage.getItem('Performance')")
result_body = driver.execute_script("return localStorage.getItem('bodyRendering')")
driver.quit()



#get current working directory
path = os.getcwd()


#open, write, and close the file
f = open(path + "/01-js-component/BodyRendering.json","w") #FHSU
f.write(result_body)
f.close()

print('finito')

# -----------------------#
# -----------------------#
# -----------------------#
url = "http://127.0.0.1:8002/"

# create a new Chrome session
driver = webdriver.Chrome(chromedriver)
driver.implicitly_wait(30)
driver.get(url)

for i in range(100):
    driver.get(url)
    time.sleep(2)
    
result_performance = driver.execute_script("return localStorage.getItem('Performance')")
result_body = driver.execute_script("return localStorage.getItem('bodyRendering')")
driver.quit()



#get current working directory
path = os.getcwd()

#open, write, and close the file
f = open(path + "/02-webcomponent/Performance.json","w") #FHSU
f.write(result_performance)
f.close()

#open, write, and close the file
f = open(path + "/02-webcomponent/BodyRendering.json","w") #FHSU
f.write(result_body)
f.close()

print('finito')

# create a new Chrome session
chromedriver = "/usr/local/bin/chromedriver"
url = "http://127.0.0.1:8003/"

# create a new Chrome session
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
f = open(path + "/03-angular/plain/BodyRendering.json","w") #FHSU
f.write(result_body)
f.close()

print('finito')

# -----------------------#
# -----------------------#
# -----------------------#
url = "http://127.0.0.1:8004/"

# create a new Chrome session
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
f = open(path + "/04-polymer/plain/BodyRendering.json","w") #FHSU
f.write(result_body)
f.close()

print('finito')

# -----------------------#
# -----------------------#
# -----------------------#
url = "http://127.0.0.1:8005/"

# create a new Chrome session
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
f = open(path + "/05-vue/plain/BodyRendering.json","w") #FHSU
f.write(result_body)
f.close()

print('finito')