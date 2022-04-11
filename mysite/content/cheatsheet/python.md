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


## Array

### Basic operation, access of element

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
data2 = json.dumps(data)

jsonData = '{"a":1,"b":2,"c":3,"d":4,"e":5}';
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
myset = {"apple", "banana", "cherry"}

# dictionary
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}

if "year" in thisdict.keys():
  pass
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

groups = ["Movies", "Sports", "Coding", "Fishing", "Dancing", "cooking"]  
num = [46, 8, 12, 12, 6, 58]

dict = {"groups": groups,  
        "num": num
       }

select_df = pd.DataFrame(dict)

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

### Flask

Useful cheatsheet from Pretty Printed

[Cheatsheet](/pdf/flask_cheatsheet.pdf)