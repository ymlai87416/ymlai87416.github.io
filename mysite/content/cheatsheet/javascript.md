---
title: "Javascript"
date: "2022-04-04"
author: "Tom"

toc:
  enable: true
  auto: true
---

## Javascript

## Basic structure

### Simple declaration

```javascript
var x = 5;
const PI = 3.141592653589793;
let x = 2;
```

### Declare array

```javascript
var cars = []
var cars = ["Saab", "Volvo", "BMW"];
var arr_length = cars.length;
```

### Declare structure

```javascript
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myCar1 = new Car("Ford", 2014);
```

### Enum

No such thing

## Control structure

```javascript
const component = require('component') //runtime
import component2 from "component2"; //compile time ES6

try {
    var cars = ["Volvo", "BMW", "Ford", "Mazda", null];
    for(var i=0; i<cars.length; ++i){
        let car = cars[i];
        if(car === null)
            console.log("Hello Hell!");    
        else
            console.log("Hello " + car + "!");    
    }
}
catch(err) {
  //document.getElementById("demo").innerHTML = err.message;
  console.error(err.message);
}

```

## String

### Basic operation

```javascript
var greeting = "Hello";
var len = txt.Length
var upper = greeting.toUpperCase()
var trim = banner.trim();
var isOK = test.startsWith("<")
var pos = "test: enabled".indexOf(": ");
var substr1 = "Hello world!".substr(1, 4);       //'ello'
var substr2 = "Hello world!".substring(1, 4);    // 'ell'
var masked = last4Digits.padStart(fullNumber.length, '*');
var intVal = "1".valueOf();
```


### Replace

```javascript
var x ="Visit Microsoft!".replace("Microsoft", "W3Schools");
```

### Concat and compare

```javascript
var name = firstName.concat(lastName);
var x = "2" > "12";  //true
var y = 2 < "12" //true
```

## Array

### Basic operation, access of element

```javascript
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];
cars.push("Tesla")
cars.concat(["Xiapeng, Biadi"]])

var text = "hi: "
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(value => {return txt = txt+ value + "<br/>";} );

var numberSq = numbers.map(value => {return value * 2;} );
var filtered = numbers.filter((value, index, array) => {return value > 18;} );
var a = fruits.indexOf("Apple");
```

### Traverse, sort

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();        // Sorts the elements of fruits
```

## Date

### New date
```javascript
var d = new Date();
var d = new Date(2018, 11, 24, 10);
d.setHours(0, 0, 0, 0);  //to get only date
```

### Add days
```javascript
var date = new Date();
console.log(date.addDays(5));
```

### Compare date, diff date
```javascript
if (date1>date2) return ("Date1 > Date2");
else if (date1<date2) return ("Date2 > Date1");
else return ("Date1 = Date2"); 
```

### Format date
```javascript
d.toString();           //Wed Mar 25 2015 08:00:00 GMT+0800 (台北標準時間)
d.toDateString();	    //Sat Dec 05 2020
d.toISOString();        //"2015-03-25" 

var dateFormat = require('dateformat');
var now = new Date();
dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
```
	
## File

### Console read write
```javascript
console.log("Hello World!");   
```

### Read write line with UTF-8


```javascript
<!-- The `multiple` attribute lets users select multiple files. -->
<input type="file" id="file-selector" multiple>
<script>
  const fileSelector = document.getElementById('file-selector');
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
  });
</script>

//File reader
const reader = new FileReader();
reader.addEventListener('load', (event) => {
    img.src = event.target.result;
});
reader.readAsDataURL(file);

//fetch api
fetch('file.txt')
  .then(response => response.text())
  .then(text => console.log(text))
```

## Database - MySQL

### Connection string list

    Install package instead of a common interface.

### Open connection
```javascript
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
```

### Execute update/insert
```javascript
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
```

### Execute select
```javascript
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
/*
[
  { id: 1, name: 'John', address: 'Highway 71'},
  { id: 2, name: 'Peter', address: 'Lowstreet 4'},
  { id: 3, name: 'Amy', address: 'Apple st 652'},
    ...
]
*/
```

### Traverse the dataset

    Traverse as json object

## Popular format

### CSV

Use a library call Papa parser
https://www.papaparse.com/

#### Read
```javascript
var data = Papa.parse(csv); //csv as string

// Parse local CSV file
Papa.parse(file, {
	complete: function(results) {
		console.log("Finished:", results.data);
	}
});
```

#### Write
```javascript
var csv = Papa.unparse(data);
```

### DOM / XML

#### Read / Write
```javascript
text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";

parser = new DOMParser();
xmlDoc = parser.parseFromString(text,"text/xml");

var a = xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
```

#### Write

    Skip for the time being

#### Traverse
```javascript
const names = xml.getElementsByTagName("name");
for (var i = 0; i < names.length; i++) {
    var name = names[i].firstChild.nodeValue;
    var div = document.createElement("div");
    var textNode = document.createTextNode(name);
    div.appendChild(textNode);
    document.getElementById("wrapper").appendChild(div);
}
```

#### Select element
```javascript
//XPath
var nodes = xml.evaluate("/bookstore/book[price>35]/title", xml, null, XPathResult.ANY_TYPE, null);
var result = nodes.iterateNext();
while (result) {
    txt += result.childNodes[0].nodeValue + "<br>";
    result = nodes.iterateNext();
} 
```

### JSON

#### Read / Write

```javascript
var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
```

#### Write

```javascript
var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);
```

### Yaml

```javascript
//install package js-yaml
const yaml = require('js-yaml');
const fs   = require('fs');

try {
  const doc = yaml.load(fs.readFileSync('/home/ixti/example.yml', 'utf8'));
  console.log(doc);
} catch (e) {
  console.log(e);
}
//write 
dump(object, {
  'styles': {
    '!!null': 'canonical' // dump null as ~
  },
  'sortKeys': true        // sort object keys
});
```

### Web/API call

Axios: https://github.com/axios/axios

#### Fetch http

```javascript
//no cookie
//further info:https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

#### Call api

```javascript
//https://github.com/axios/axios
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
```

## Advance structure / Popular structure

```javascript
//map
var mapObj = {"one":1,"two":2,"three":3}

//record
var record = {firstName:"Tom",lastName:"Smith"}

//json table
var persons = {};
persons["2901465"] = {id: 2901465, name:"Tom"};
persons["3305579"] = {id: 3305579, name:"Su"};
persons["6492003"] = {id: 6492003, name:"Pete"};
try {
  localStorage["personTable"] = JSON.stringify( persons);
} catch (e) {
  alert("Error when writing to Local Storage\n" + e);
}

```

## App script

```js
//Call put and post
var url = "https://www.ymlai87416.com/testapi";
var options = {
    "method": "post",
    "headers": {
      "Content-Type": "application/json"
    },
    "payload": JSON.stringify({
        "action": "silly",
        "content": "This is within a json obj."
    })
};

var response = UrlFetchApp.fetch(url, options);
console.log(response);
```