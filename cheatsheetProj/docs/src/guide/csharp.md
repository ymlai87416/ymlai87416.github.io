## C# cheatsheet

## Basic structure

### Simple declaration

```csharp
int myNum = 15;
const int myNum = 15;
var i = 10;
```

### Declare array

```csharp
string[] cars;
string[] cars = new string[4];
string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
```

### Declare structure

```csharp
Car myObj = new Car();
```

### Enum

```csharp
enum Level 
{
  Low,
  Medium,
  High
}
```

## Control structure

```csharp
using System;

namespace HelloWorld
{
  class Program
  {
    //comment 1
    /*
        comment 2
    */
    static void Main(string[] args)
    {
        try{
            string[] cars = {"Volvo", "BMW", "Ford", "Mazda", null};
            for(int i=0; i<cars.length; ++i){
                var car = cars[i];
                if(car == null)
                    Console.WriteLine("Hello Hell!");    
                else
                    Console.WriteLine("Hello " + car + "!");    
            }
        }
        catch(Exception ex){
            ex.printStackTrace();
        }
    }
  }
}
```


## String

### Basic operation

```csharp
string greeting = "Hello";
txt.Length
txt.ToUpper()
string name = firstName + lastName;
banner.Trim(charsToTrim);
.StartsWith("<")
 s.IndexOf(": ");
 s.Substring(found + 2)
 str.PadLeft(2, pad)
```

### Replace

```csharp
s = s.Replace("a", "b")
```

### Concat and compare

```csharp
s.CompareTo(objectToCompare);
```

## Array

### Basic operation, access of element

```csharp
s.CompareTo(objectToCompare);
```

### Traverse, sort

```csharp
s.CompareTo(objectToCompare);
```


## Date

### New date

```csharp
s.CompareTo(objectToCompare);
```

### Add days

```csharp
s.CompareTo(objectToCompare);
```

### Compare date, diff date

```csharp
s.CompareTo(objectToCompare);
```

### Format date

```csharp
s.CompareTo(objectToCompare);
```
	
## File

### Console read write

### Read write line with UTF-8

## Database

### Connection string list

### Open connection

### Execute update/insert

### Execute select

### Traverse the dataset

## Popular format

### CSV

#### Read

#### Write

### DOM / XML

#### Read / Write

#### Traverse

#### Select element

### JSON

#### Read / Write

### Web/API call

#### Fetch http

#### Call api

## Advance structure / Popular structure

### Map
		○ Declaration
		○ Traverse
		○ Common operation (add/remove/find)
### Set
	

### List
