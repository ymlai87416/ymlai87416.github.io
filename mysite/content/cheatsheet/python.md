---
title: "Python"
date: "2022-04-04"
author: "Tom"

toc:
  enable: true
  auto: true
---

## Python

## Basic structure

### Simple declaration

```python
x = 5
y = "John"
p1 = MyClass()
print(p1.x)
```

### Declare array

```python
cars = ["Ford", "Volvo", "BMW"]
x = len(cars)
```

### Declare structure

```python
class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)
```

### Lambda

```python
x = lambda a, b : a * b
```

### Enum

```python
from enum import Enum
class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3
```

## Control structure

A code segment which show the following
	* Loop
	* If check null
	* Try catch
	* Import Library
	* Define a function
	* Declare a class

```python
from sample_module import sample_func
import traceback 

def main():
    try:
        cars = ["Volvo", "BMW", "Ford", "Mazda", None]
        for i in range(len(cars)):
            car = cars[i]
            if car is None: 
                print("Hello Hell!")
            else
                print("Hello " + car + "!")
    except NameError:
        print("Variable x is not defined")
    except Exception as e:
        print("Something else went wrong", e.__class__)
        traceback.print_exception(*sys.exc_info()) 

if __name__ == '__main__':
  print 'Number of arguments:', len(sys.argv), 'arguments.'
  print 'Argument List:', str(sys.argv)
  main()  # 或是任何你想執行的函式
```


## String

### Basic operation

```python
a = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
print(a[1])
print(a[2:5])

if "free" in txt:
  print("Yes, 'free' is present.")

a.upper()
a.strip()

# escape character is \
```

### Replace

```python
a = "Hello, World!"
a.replace("H", "J")
a.split(",")
```

### Concat and compare

```python
 = "Hello"
b = "World"
c = a + b
```

### Regular expression

```python
import re
txt = "The rain in Spain"
x = re.search("\s", txt)
print("The first white-space character is located in position:", x.start())  //None if not found
```


## Data structure

### Array - Basic operation, access of element

```python
thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
print(len(thislist))
print(thislist[2:5])
thislist[1:3] = ["watermelon"]
thislist.append("orange")
thislist.insert(1, "orange")
thislist.remove("banana")
thislist.pop()
thislist.clear()
thislist.extend(tropical)
```

### Traverse, sort

```python
thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)
newlist = [x for x in fruits if "a" in x]
thislist.sort()
```

### Set

```python
thisset = {"apple", "banana", "cherry"}
thisset = set(("apple", "banana", "cherry"))
thisset.add("orange")
thisset.update(tropical) # or set1.union(set2)
thisset.remove("banana")
thisset.discard("banana") # no error
thisset.clear()
x.intersection_update(y)  # z = x.intersection(y) return new set
z = x.symmetric_difference(y)
```

### Dictionary
```python
dict = {}
# find key in dict
'a' in dict
```
## Date

### New date

```python
import datetime
x = datetime.datetime.now()
x = datetime.datetime(2020, 5, 17)
print(x)
print(x.date()) #only return date part
```

### Add days

```python
end_date = date_1 + datetime.timedelta(days=10)

import pandas as pd
startdate = "10/10/2011"
enddate = pd.to_datetime(startdate) + pd.DateOffset(days=5)
```

### Compare date, diff date

```python
# date in yyyy/mm/dd format 
d1 = datetime.datetime(2018, 5, 3) 
d2 = datetime.datetime(2018, 6, 1) 
print("d1 is less than d2 : ", d1 < d2) 
```

### Format date

```python
print(x.strftime("%B"))
print(x.strftime("%b %d %Y %H:%M:%S"))  # %b is month in text %m is number %H
datetime.datetime.strptime('Mon Feb 15 2010', '%a %b %d %Y').strftime('%d/%m/%Y')
```
	
## File

### Console read write

```python
# input 
input1 = input() 

# output 
print(input1) 
```

### Read write line with UTF-8

```python
# a = append and w = write
f = open("demofile.txt", "r", encoding='UTF-8')

# read
print(f.readline())
content = f.read()

# write
f.write("Woops! I have deleted the content!")

f.close()
```

### File system operation

```python
import os
if os.path.exists("demofile.txt"):
  os.remove("demofile.txt")
else:
  print("The file does not exist")

os.rmdir("myfolder")

fileAndDir = listdir(mypath)
```

## Database 

### Connection string list

```python

```

### Open connection

```python
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="yourusername",
  password="yourpassword"
)

mycursor = mydb.cursor()
```

### Execute update/insert

```python
mycursor = mydb.cursor()

sql = "INSERT INTO customers (name, address) VALUES (%s, %s)"
val = ("John", "Highway 21")
mycursor.execute(sql, val)

mydb.commit()

print(mycursor.rowcount, "record inserted.")
```

### Execute select

```python
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM customers")

myresult = mycursor.fetchall()

```

### Traverse the dataset

```python
for x in myresult:
  print(x)
```

## Popular format

### CSV

#### Read

```python
import csv

# 開啟 CSV 檔案
with open('iris.csv', newline='') as csvfile:

    # 讀取 CSV 檔案內容
    rows = csv.reader(csvfile)

    # 以迴圈輸出每一列
    for row in rows:
        print(row)
```

#### Write

```python
import csv

# 開啟輸出的 CSV 檔案
with open('output.csv', 'w', newline='') as csvfile:
    # 建立 CSV 檔寫入器
    writer = csv.writer(csvfile)

    # 寫入一列資料
    writer.writerow(['姓名', '身高', '體重'])

    # 寫入另外幾列資料
    writer.writerow(['令狐沖', 175, 60])
    writer.writerow(['岳靈珊', 165, 57])

with open('output.csv', 'w', newline='') as csvfile:
    # 定義欄位
    fieldnames = ['姓名', '身高', '體重']

    # 將 dictionary 寫入 CSV 檔
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)

    # 寫入第一列的欄位名稱
    writer.writeheader()

    # 寫入資料
    writer.writerow({'姓名': '令狐沖', '身高': 175, '體重': 60})
    writer.writerow({'姓名': '岳靈珊', '身高': 165, '體重': 57})
```

### DOM / XML

```xml
<collection shelf="New Arrivals">
<movie title="Enemy Behind">
   <type>War, Thriller</type>
   <format>DVD</format>
   <year>2003</year>
   <rating>PG</rating>
   <stars>10</stars>
   <description>Talk about a US-Japan war</description>
</movie>
...
</collection>
```

#### Read

```python
from xml.dom.minidom import parse
import xml.dom.minidom
 
# 使用minidom解析器打开 XML 文档
DOMTree = xml.dom.minidom.parse("movies.xml")
collection = DOMTree.documentElement
if collection.hasAttribute("shelf"):
   print "Root element : %s" % collection.getAttribute("shelf")
```


#### Select element

```python
# 在集合中获取所有电影
movies = collection.getElementsByTagName("movie")
```

#### Traverse

```python
# 打印每部电影的详细信息
for movie in movies:
   print "*****Movie*****"
   if movie.hasAttribute("title"):
      print "Title: %s" % movie.getAttribute("title")
 
   type = movie.getElementsByTagName('type')[0]
   print "Type: %s" % type.childNodes[0].data
   format = movie.getElementsByTagName('format')[0]
   print "Format: %s" % format.childNodes[0].data
   rating = movie.getElementsByTagName('rating')[0]
   print "Rating: %s" % rating.childNodes[0].data
   description = movie.getElementsByTagName('description')[0]
   print "Description: %s" % description.childNodes[0].data
```

#### Write

```python
import xml.etree.ElementTree as ET

# create the file structure
data = ET.Element('data')
items = ET.SubElement(data, 'items')
item1 = ET.SubElement(items, 'item')
item2 = ET.SubElement(items, 'item')
item1.set('name','item1')
item2.set('name','item2')
item1.text = 'item1abc'
item2.text = 'item2abc'

# create a new XML file with the results
mydata = ET.tostring(data)
myfile = open("items2.xml", "w")
myfile.write(mydata)
```

### JSON

#### Read / Write

```python

import json

data = [ { 'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5 } ]
data2 = json.dumps(data)  # beware of dump(), which write to file.

jsonData = '{"a":1,"b":2,"c":3,"d":4,"e":5}'
text = json.loads(jsonData)
print(text)   # {u'a': 1, u'c': 3, u'b': 2, u'e': 5, u'd': 4}

me = Object()
me.name = "Onur"
me.age = 35
me.dog = Object()
me.dog.name = "Apollo"

print(me.toJSON())

# output
#{
#    "age": 35,
#    "dog": {
#        "name": "Apollo"
#    },
#    "name": "Onur"
#}

```

### Yaml

```python
# install pyyaml
from yaml import load, dump
try:
    from yaml import CLoader as Loader, CDumper as Dumper
except ImportError:
    from yaml import Loader, Dumper
secret_path = os.path.join(os.path.dirname(os.path.realpath(__file__)), "..", "test.yaml")
stream = open(secret_path, "r")
data = yaml.safe_load(stream)
data = load(stream, Loader=Loader)
output = dump(data, Dumper=Dumper)
```

### Web/API call


#### Fetch http

```python
import urllib.request
with urllib.request.urlopen('http://www.example.com/') as f:
    html = f.read().decode('utf-8')
```

#### Call api

pip install requests

```python
import requests

r = requests.get("https://opendata.epa.gov.tw/ws/Data/AQI/?$format=json", verify=False)
list_of_dicts = r.json()
print(type(r))
print(type(list_of_dicts))
for i in list_of_dicts:
    print(i["County"], i["SiteName"], i["PM2.5"])


# defining the api-endpoint  
API_ENDPOINT = "http://pastebin.com/api/api_post.php"
# your API key here 
API_KEY = "XXXXXXXXXXXXXXXXX"
# your source code here 
source_code = ''
data = {'api_dev_key':API_KEY, 
        'api_option':'paste', 
        'api_paste_code':source_code, 
        'api_paste_format':'python'} 
  
# sending post request and saving response as response object 
r = requests.post(url = API_ENDPOINT, data = data) 
pastebin_url = r.text 
print("The pastebin URL is:%s"%pastebin_url) 
```

## Advance structure / Popular structure


```python
# tuple
mytuple = ("apple", "banana", "cherry")

# set
mySet = set()
myset = {"apple", "banana", "cherry"}
# insert one / many
mySet.add(4) 
mySet.update(anotherSet)
## delete
mySet.remove(2)
## check exist
element in mySet
# set operation
unionSet = set1.union(set2)
intersectSet = set1.intersection(set2)
diffSet = set1.difference(set2)

# dictionary
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
# add key value pair / update existing value
myDict['key'] = newValue
# delete key
del myDict['key']
# check key exists
'key' in myDict
# merge 2 dictionary
dict1.update(dict2)
merged_dict = {**dict1, **dict2}
```

### Numpy

```python
import numpy as np
arr = np.array([1, 2, 3, 4, 5])
np.concatenate((arr1, arr2))
np.sort(arr)
x = np.where(arr == 4) # return (array([3]))

x = [True, False, True, False, False]
newarr = arr[x]   # return [1, 3]
```

### Pandas

```python
import pandas as pd # 引用套件並縮寫為 pd  
df = pd.read_csv('shop_list.csv')  
print(df)  
cars = ["BMW", "BENZ", "Toyota", "Nissan", "Lexus"]
select = pd.Series(cars)  

# insert by columns
groups = ["Movies", "Sports", "Coding", "Fishing", "Dancing", "cooking"]  
num = [46, 8, 12, 12, 6, 58]

dict = {"groups": groups,  
        "num": num
       }

select_df = pd.DataFrame(dict)

# insert by row
df = pd.DataFrame(columns = ['group', 'num'])
df = df.append({'group' : 'Movies', 'num' : 46}, ignore_index = True)

out_df = select_df[select_df.loc[:,"num"] > 10] # 選出人數超過 10 的群組  

# iterate and update value
for index, row in data_loc.iterrows():
    data_loc.set_value(index,'real_distict',findDistrict(Point(row['lng'], row['lat'])))

# Set index
dataframe.set_index('Date', inplace=True)

# Pandas date operation
#generate date range

#date diff
date_df['diff_days'] = date_df['Date'].diff().dt.days
#
```

### Reproduce SQL function

|Opertion         |SQL example                                                                                                                                                   |How to do in pandas                                                                                                                                                                   |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|select           |select * from airports                                                                                                                                        |airports                                                                                                                                                                              |
|select           |select * from airports limit 3                                                                                                                                |airports.head(3)                                                                                                                                                                      |
|select           |select id from airports where ident='KLAX'                                                                                                                    |airports[airports.ident='KLAX'].id                                                                                                                                                    |
|select           |select distinct type from airport                                                                                                                             |airports.type.unique()                                                                                                                                                                |
|where            |select * from airports where iso_region='US-CA' and type='seaplane_base'                                                                                      |airports[(airports.iso_region=='US-CA) & airports.type == 'seaplane_base']                                                                                                            |
|where            |select ident, name, municipality from airports where iso_region='US-CA' and type='seaplane_base'                                                              |airports[(airports.iso_region=='US-CA) & airports.type == 'seaplane_base')][['ident', 'name', 'municipality']|                                                                        |
|order by         |select * from airport_freq where airport_ident='KLAX' order by type                                                                                           |airport_freq[airport_freq.airport_ident == 'KLAX'].sort_values('type')                                                                                                                |
|order by         |select * from airport_freq where airport_ident = 'KLAX' order by type desc                                                                                    |airport_freq[airport_freq.airport_ident == 'KLAX'].sort_values('type', ascending=False)                                                                                               |
|in               |select * from airports where type in ('heliport', 'balloonport')                                                                                              |airports[airports.type.isin(['heliport', 'balloonport'])]                                                                                                                             |
|not in           |select * from airports where type not in ('heliport', 'balloonport')                                                                                          |airports[~airports.type.isin(['heliport', 'balloonport'])]                                                                                                                            |
|group+count      |select iso_country, type, count(\*) from airports group by iso_country, type order by iso_country, type                                                       |airports.groupby(['iso_country', 'type']).size()                                                                                                                                      |
|group+count+order|select iso_country, type, count(\*) from airports group by iso_country, type order by iso_country, count(\*) desc                                             |airports.groupby(['iso_country', 'type']).size().to_frame('size').reset_index().sort_values(['iso_country', 'size'], ascending=[True, False])                                         |
|having           |select type, count(\*) from airports where iso_country = 'US' group by type having count(\*) > 1000 order by count(*) desc                                    |irports[airports.iso_country == 'US'].groupby('type').filter(lambda g: len(g) > 1000).groupby('type').size().sort_values(ascending=False)                                             |
|topN             |select iso_country from by_country order by size desc limit 10                                                                                                |by_country.nlargest(10, columns='airport_count')                                                                                                                                      |
|topN+offset      |select iso_country from by_country order by size desc limit 10 offset 10                                                                                      |by_country.nlargest(20, columns='airport_count').tail(10)                                                                                                                             |
|aggregate        |select max(length_ft), min(length_ft), avg(length_ft), median(length_ft) from runways                                                                         |runways.agg({'length_ft': ['min', 'max', 'mean', 'median']})                                                                                                                          |
|join             |select airport_ident, type, description, frequency_mhz from airport_freq join airports on airport_freq.airport_ref = airports.id where airports.ident = 'KLAX'|airport_freq.merge(airports[airports.ident == 'KLAX'][['id']], left_on='airport_ref', right_on='id', how='inner')[['airport_ident', 'type', 'description', 'frequency_mhz']]          |
|union            |select name, municipality from airports where ident = 'KLAX' union all select name, municipality from airports where ident = 'KLGB'                           |pd.concat([airports[airports.ident == 'KLAX'][['name', 'municipality']], airports[airports.ident == 'KLGB'][['name', 'municipality']]])                                               |
|insert           |create table... insert...                                                                                                                                     |df1 = pd.DataFrame({'id': [1, 2], 'name': ['Harry Potter', 'Ron Weasley']}) df2 = pd.DataFrame({'id': [3], 'name': ['Hermione Granger']}) pd.concat([df1, df2]).reset_index(drop=True)|
|update           |update airports set home_link = 'http://www.lawa.org/welcomelax.aspx'where ident == 'KLAX'                                                                    |airports.loc[airports['ident'] == 'KLAX', 'home_link'] = 'http://www.lawa.org/welcomelax.aspx'                                                                                        |
|delete           |delete from lax_freq where type = 'MISC'                                                                                                                      |lax_freq = lax_freq[lax_freq.type != 'MISC']                                                                                                                                          |

Summary from here [Link](https://medium.com/jbennetcodes/how-to-rewrite-your-sql-queries-in-pandas-and-more-149d341fc53e)


## Matplotlib

- Draw line

- Overlay

- 

## Conda

```bash
# create env
conda create --name myenv python=3.9
conda env create -f environment.yml

# sample
conda env list
conda activate myenv

# delete env
conda remove --name myenv --all
```

```yaml
name: env-name
channels:
  - conda-forge
  - defaults
dependencies:
  - python=3.7
  - codecov
```

## venv


## Flask

Useful cheatsheet from Pretty Printed

[Cheatsheet](/pdf/flask_cheatsheet.pdf)