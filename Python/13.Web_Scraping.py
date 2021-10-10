import requests
from bs4 import BeautifulSoup
import pandas as pd
# web page forecast.weather.gov ..

page= requests.get('https://forecast.weather.gov/MapClick.php?lat=40.7146&lon=-74.0071#.XrqnlMDhVPY')
soup= BeautifulSoup(page.content,'html.parser')
#print(soup) #showing the web page soure..
#print(soup.find_all('a')) # it gonna find all a tag and words or match with the (a)..

week=soup.find(id='seven-day-forecast-body')
#print(week.find_all('li')) #its give all li tags thing under the id=seven-day-forecast-body i.e week.
items=week.find_all(class_='tombstone-container')
#print(items[0])

#collecting data of one first tombstone-container class in web page.
print(items[0].find(class_='period-name').get_text())
print(items[0].find(class_='short-desc').get_text())
print(items[0].find(class_='temp').get_text())
print()

for item in items: #looping all the tombstone-catiner class from web page. and collecting the data...
    print(item.find(class_='period-name').get_text())
    print(item.find(class_='short-desc').get_text())
    print(item.find(class_='temp').get_text())
print()

#list comp technique..to collect data
period_names=[item.find(class_='period-name').get_text() for item in items]
short_desc=[item.find(class_='short-desc').get_text() for item in items]
temp=[item.find(class_='temp').get_text() for item in items]
print(period_names)
print(short_desc)
print(temp)


#Making Sets of all data....
weatherDetails=pd.DataFrame({  # in  this pd.DataFrame is from import Pandas as pd.
    'period':period_names,
    'short_desc':short_desc,
    'temp':temp,
})

print(weatherDetails)

#weatherDetails.to_csv('result.csv') ..to_csv pandas method to Create the csv file and store the data on it..