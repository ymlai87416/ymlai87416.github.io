---
title: "Dart"
date: "2022-04-04"
author: "Tom"

toc:
  enable: true
  auto: true
---

## Dart

## Basic structure

### Simple declaration
```dart
int x = 5;
int? x;
x ??= 5  //??= only assign when it is null
final PI = 3.141592653589793;
```

### Declare array

```dart
final aListOfInts = <int>[];
final aListOfStrings = ['one', 'two', 'three'];
Dim matrix = New Integer(3, 2) {{1, 2, 3}, {2, 3, 4}, {3, 4, 5}, {4, 5, 6}}
```

### Declare structure

### Enum
```dart
enum Status { 
   none, 
   running, 
   stopped, 
   paused 
}
```

## Control structure

```dart
import 'project/car.dart';

void main() { 
    List<Car> cars = [Car(name="Volvo"), Car(name="BMW"), Car(name="Ford"), Car(name="Mazda"), null,]
   Car c= new Car(); 
    for(var i = 0; i<cars.length; ++i)
    
        try {
            c.disp(); 
        } on OutOfGasException {
            print('Out of gas')
        } on Exception catch (e) {
            print('Unknown exception: $e');
        } catch (e) {
            print('Something really unknown: $e');
        }
    }
}  

class Car {  
   // field 
   String engine = "E1001";  
   String name;
   Car({required this.name});

   // function 
   void disp() { 
      print(engine); 
   } 

   Future<RoadCondition> fetchRoadCondition(int type) async {
   }
}
```

## String

### Basic operation

```dart
String Str1 = "geeks"; 
print(Str1.toUpperCase()); 
```

### Replace
```dart
String gfg = "Welcome GeeksForGeeks";
String result = gfg.replaceAll("GeeksForGeeks", "Geek!");
```

### Concat and compare
```dart
var c1 = a + b; // + operator
var c2 = '$a$b'; // string interpolation
var c3 = 'a' 'b'; // string literals separated only by whitespace are concatenated automatically
print(rubi == ore); // true, contain the same characters
```


### Regular expression
```dart
RegExp hexColor = RegExp(r'^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$');
hexColor.hasMatch('#3b5');     // true
hexColor.hasMatch('#FF7723');  // true
hexColor.hasMatch('#000000z'); // false

final myString = '25F8..25FF    ; Common # Sm   [8] UPPER LEFT TRIANGLE';

// find a variable length hex value at the beginning of the line
final regexp = RegExp(r'^[0-9a-fA-F]+'); 

// find the first match though you could also do `allMatches`
final match = regexp.firstMatch(myString);

// group(0) is the full matched text
// if your regex had groups (using parentheses) then you could get the 
// text from them by using group(1), group(2), etc.
final matchedText = match?.group(0);  // 25F8
```

## Array

### Basic operation, access of element

```dart
List<String> cars = ["Volvo", "BMW", "Ford", "Mazda"];
print(cars[0]);
```

### Traverse, sort

```dart
for (final i in cars) {
  print(i);
}

cars.sort((a, b) => a.length.compareTo(b.length));
```

## Date

### New date
```dart
final now = DateTime.now();
final berlinWallFell = DateTime.utc(1989, 11, 9);
final moonLanding = DateTime.parse('1969-07-20 20:18:04Z'); // 8:18pm
final today = DateTime(now.year, now.month, now.day); //remove time part
```

### Add days
```dart
 date1.subtract(Duration(days: 7, hours: 3, minutes: 43, seconds: 56)); 
 date1.add(Duration(days: 1, hours: 23)));
```

### Compare date, diff date

```dart
print(givenDate.isAfter(dt1));  // false
print(givenDate.isBefore(dt1));  // true
print(givenDate.compareTo(dt1));  // -1

int daysBetween(DateTime from, DateTime to) {
    from = DateTime(from.year, from.month, from.day);
    to = DateTime(to.year, to.month, to.day);
    return (to.difference(from).inHours / 24).round();
}

```

### Format date
```dart
import 'package:intl/intl.dart';

final DateTime now = DateTime.now();
final DateFormat formatter = DateFormat('yyyy-MM-dd');
final String formatted = formatter.format(now);
print(formatted); // something like 2013-04-20
```

## File

### Console read write

```dart
import 'dart:convert';
import 'dart:io';

void main() {
  print('1 + 1 = ...');
  var line = stdin.readLineSync(encoding: utf8);
  print(line?.trim() == '2' ? 'Yup!' : 'Nope :(');
}
```

### Read write line with UTF-8

```dart
Future<String> get _localPath async {
  final directory = await getApplicationDocumentsDirectory();
  return directory.path;
}

Future<File> get _localFile async {
  final path = await _localPath;
  return File('$path/counter.txt');
}

Future<File> writeCounter(int counter) async {
  final file = await _localFile;

  // Write the file
  return file.writeAsString('$counter');
}

Future<int> readCounter() async {
  try {
    final file = await _localFile;

    // Read the file
    final contents = await file.readAsString();

    return int.parse(contents);
  } catch (e) {
    // If encountering an error, return 0
    return 0;
  }
}
```

### File system operation

```dart
import 'dart:io';

void createFileRecursively(String filename) {
  // Create a new directory, recursively creating non-existent directories.
  new Directory.fromPath(new Path(filename).directoryPath)
      .createSync(recursive: true);
  new File(filename).createSync();
}

createFileRecursively('foo/bar/baz/bleh.html');
```

## Database

### Connection string list - NOSQL
```dart
final database = MemoryDatabase();
```
### Open connection
```dart
final collection = database.collection('pizzas');
```

### Execute update/insert
```dart
// Our document
final document = collection.newDocument();

// Insert a pizza
await document.insert({
'name': 'Pizza Margherita',
'rating': 3.5,
    'ingredients': ['dough', 'tomatoes'],
'similar': [
    database.collection('recipes').document('pizza_funghi'),
],
});
//updater individuals
await product.patch(
  {
    'price': 12.50,
  },
);

await document.delete();

await database.runInTransaction((transaction) async {
  final document = database.collection('products').document('coffeeMugId');
  final snapshot = await transaction.get(document);
  final price = snapshot.data['price'] as double;
  await transaction.patch(document, {
    'price': price + 1.50,
  });
), timeout: Duration(seconds:3);

```
### Execute select

```dart
// Define what we are searching
final query = Query(
  filter: MapFilter({
    'category': OrFilter([
      ValueFilter('computer'),
      ValueFilter('tablet'),
    ]),
    'price': RangeFilter(min:0, max:1000),
  }),
  skip: 0, // Start from the first result item
  take: 10, // Return 10 result items
);

// Send query to the database
final result = await database.collection('product').search(
  query: query,
  reach: Reach.server,
);

// For each snapshots
for (var snapshot in result.snapshots) {
  // Get price
  final price = snapshot.data['price'] as double;
  print('price: $price');
}
```

### Connection string list - SQL

```dart
import 'package:database/sql.dart';
import 'package:database_adapter_postgre/database_adapter_postgre.dart';

// In this example, we use PostgreSQL adapter
final database = Postgre(
    host:         'localhost',
    user:         'database user',
    password:     'database password',
    databaseName: 'example',
).database();


```
### Open connection
```dart
// Get SQL client.
final sqlClient = database.sqlClient;
```

### Execute update/insert

```dart
await sqlClient.execute(
  'INSERT INTO Product (name, price) VALUES (?, ?)',
  ['Pizza Hawaii', 8.50],
);
await sqlClient.execute('DELETE FROM Product WHERE price < ?', [5.0]);

await sqlClient.runInTransaction((transaction) async {
  final values = await transaction.query('...').toMaps();
  // ...

  await transaction.execute('...');
  await transaction.execute('...');
  // ...
), timeout: Duration(seconds:3));

```

### Execute select
```dart
final pizzas = await sqlClient.query(
    'SELECT * FROM product WHERE type = ?, price < ?',
    ['pizza', 10],
).toMaps();

for (var pizza in pizzas) {
    print(pizza['name']);
}
```

## Popular format

### CSV

#### Read

```dart
import 'package:csv/csv.dart';
final input = new File('a/csv/file.txt').openRead();
final fields = await input.transform(utf8.decoder).transform(new CsvToListConverter()).toList();
```
#### Write
```dart
final res = const ListToCsvConverter().convert([[',b', 3.1, 42], ['n\n']]);
assert(res == '",b",3.1,42\r\n"n\n"');
```

### DOM / XML

#### Read / Write
```dart
import 'package:xml/xml.dart';
final bookshelfXml = '''<?xml version="1.0"?>
    <bookshelf>
      <book>
        <title lang="english">Growing a Language</title>
        <price>29.99</price>
      </book>
      <book>
        <title lang="english">Learning XML</title>
        <price>39.95</price>
      </book>
      <price>132.00</price>
    </bookshelf>''';
final document = XmlDocument.parse(bookshelfXml);
final total = document.findAllElements('book')
    .map((node) => double.parse(node.findElements('price').single.text))
    .reduce((a, b) => a + b);
print(total);

final builder = XmlBuilder();
builder.processing('xml', 'version="1.0"');
builder.element('bookshelf', nest: () {
  builder.element('book', nest: () {
    builder.element('title', nest: () {
      builder.attribute('lang', 'en');
      builder.text('Growing a Language');
    });
    builder.element('price', nest: 29.99);
  });
  builder.element('book', nest: () {
    builder.element('title', nest: () {
      builder.attribute('lang', 'en');
      builder.text('Learning XML');
    });
    builder.element('price', nest: 39.95);
  });
  builder.element('price', nest: 132.00);
});
final bookshelfXml = builder.buildDocument();

```

#### Select element and Traverse
```dart
final titles = document.findAllElements('title');
titles
    .map((node) => node.text)
    .forEach(print);
```

### JSON

#### Read / Write
```dart
import 'dart:convert';
final parsed = jsonDecode(responseBody).cast<Map<String, dynamic>>();

factory Photo.fromJson(Map<String, dynamic> json) {
    return Photo(
        albumId: json['albumId'] as int,
        id: json['id'] as int,
        title: json['title'] as String,
        url: json['url'] as String,
        thumbnailUrl: json['thumbnailUrl'] as String,
    );
}

Map<String, dynamic> toJson() => {
        'name': name,
        'email': email,
      };

String json = jsonEncode(user);
Map<String, dynamic> userMap = jsonDecode(jsonString);
var user = User.fromJson(userMap);
```

### Yaml

```dart
import 'package:yaml/yaml.dart';

var doc = loadYaml("YAML: YAML Ain't Markup Language");
print(doc['YAML']);
// json is a valid yaml so you can dump it as json.!?
```

### Web/API call

#### Fetch http and call api
```dart
import 'package:http/http.dart' as http;

Future<List<Photo>> fetchPhotos(http.Client client) async {
  final response = await client
      .get(Uri.parse('https://jsonplaceholder.typicode.com/photos'));

  // Use the compute function to run parsePhotos in a separate isolate.
  return compute(parsePhotos, response.body);
}
```

## Advance structure / Popular structure

### Map

```dart
Map<int, double> aMapOfIntToDouble = <int, double>{};
map.forEach((k, v) => print("Key : $k, Value : $v"));
for (var k in numMap.keys) {
    print("Key : $k, value : ${numMap[k]}");
}
for (MapEntry e in numMap.entries) {
    print("Key ${e.key}, Value ${e.value}");
}
```

### Set

```dart
Set<int> aSetOfInts = <int>{};
for (var e in mySet) {
  //code
}
```

### List

```dart
List<int> aListOfInts = <int>[];
final aListOfBaseType = <BaseType>[SubType(), SubType()];

for(var i=0;i<myList.length;i++){
    print(myList[i]);
}

myList.forEach((element) => 
    print(element)
);

//get iterator to the list
var myListIter = myList.iterator;
    
//iterate over the list
while(myListIter.moveNext()){
    print(myListIter.current);
}
```