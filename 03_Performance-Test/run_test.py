from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import re
import pandas as pd
import os
import time

chromedriver = "/usr/local/bin/chromedriver"


def check_performance(port=8000, sleep=2, page_calls=100, ptest=False, 
					  foldername='00-global-styling', path='performance_test_result/00_progress-bar'):
					  
	url = 'http://127.0.0.1:' + str(port)
	driver = webdriver.Chrome(chromedriver)
	driver.implicitly_wait(30)
	driver.get(url)
	
	for i in range(page_calls):
		driver.get(url)
		time.sleep(sleep)
		
	result = driver.execute_script("return localStorage.getItem('bodyRendering')")
	
	if ptest:
		result_performance = driver.execute_script("return localStorage.getItem('bodyRendering')")
		
	driver.quit()
	
	local_path = path
	
	#get current working directory
	path = os.getcwd() + '/' + path + '/' + foldername
	
	f = open(path + "/BodyRendering.json","w")
	f.write(result)
	f.close()
	print('🥳  🎉 🍾 Yay, successfully created "'+ local_path + '/' + foldername + '/BodyRendering.json"' )
	
		

#foldernames = ['00-global-styling', '01-js-component', '02-webcomponent', '03-angular', '04-polymer', '05-vue']
#foldernames = ['03-angular', '04-polymer', '05-vue']
foldernames = ['05-vue']

[check_performance(page_calls=100, foldername=foldernames[i] + '/plain', port=8005+i) for i in range(1)]
	

	
