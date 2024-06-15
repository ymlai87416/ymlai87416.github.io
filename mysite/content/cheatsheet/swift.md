---
title: "Java"
date: "2022-04-04"
author: "Tom"

toc:
  enable: true
  auto: true
---

# Swift

## Basic Syntax

```
var greeting: String = "Hello, world!"
var age = 25 // Swift infers that 'age' is of type Int

let pi: Double = 3.14159
var isSwiftFun: Bool = true
var firstLetter: Character = "A"
var fullName: String = "Alice Smith"

print("Age: \(age)") // Output: Age: 25
```

Operators

```
print("Closed range (1...5):")
for i in closedRange {
    print(i, terminator: " ") // Output: 1 2 3 4 5
}
print()

print("Half-open range (1..<5):")
for i in halfOpenRange {
    print(i, terminator: " ") // Output: 1 2 3 4
}
```

## Strings and Characters

```swift
import Foundation

// Strings and Characters

// String Literals
let simpleString = "Hello, Swift!"
print("String Literal: \(simpleString)") // Output: Hello, Swift!

// String Interpolation
let name = "Alice"
let age = 30
let greeting = "Hello, my name is \(name) and I am \(age) years old."
print("String Interpolation: \(greeting)") // Output: Hello, my name is Alice and I am 30 years old.

// Multiline Strings
let multilineString = """
This is a multiline string.
It can span multiple lines.
You can use it for large text blocks.
"""
print("Multiline String:\n\(multilineString)")

// String Methods
let stringExample = "Hello, Swift!"
let uppercasedString = stringExample.uppercased() // Output: HELLO, SWIFT!
let lowercasedString = stringExample.lowercased() // Output: hello, swift!
let stringLength = stringExample.count // Output: 13
let hasPrefix = stringExample.hasPrefix("Hello") // Output: true
let hasSuffix = stringExample.hasSuffix("Swift!") // Output: true
let containsSubstring = stringExample.contains("Swift") // Output: true

let anotherCharacter: Character = "🙂"

// Iterating over characters in a string
let sampleString = "Swift"
print("Characters in string:")
for char in sampleString {
    print(char, terminator: " ") // Output: S w i f t 
}
print()

// Constructing a string from characters
let characters: [Character] = ["H", "e", "l", "l", "o"]
let constructedString = String(characters) // Output: Hello

// Accessing and modifying string elements
var mutableString = "Hello"
mutableString.append(" World") // Output: Hello World

let index = mutableString.index(mutableString.startIndex, offsetBy: 5)
let charAtIndex = mutableString[index] // Output: (space)
```


## Control Flow

```swift
import Foundation
let temperature = 75
if temperature > 80 {
    print("It's hot outside!")
} else if temperature < 60 {
    print("It's cold outside!")
} else {
    print("The weather is nice.") // Output: The weather is nice.
}

func checkTemperature(temperature: Int) {
    guard temperature >= 0 else {
        print("Temperature is below freezing!")
        return
    }
    print("Temperature is above freezing.") // Output: Temperature is above freezing.
}

let fruits = ["Apple", "Banana", "Cherry"]
print("For loop:")
for fruit in fruits {
    print(fruit) // Output: Apple Banana Cherry
}

print("For-in loop with range:")
for index in 1...3 {
    print("Index: \(index)") // Output: Index: 1 Index: 2 Index: 3
}

var count = 1
print("While loop:")
while count <= 3 {
    print("Count: \(count)") // Output: Count: 1 Count: 2 Count: 3
    count += 1
}

count = 1
print("Repeat-while loop:")
repeat {
    print("Count: \(count)") // Output: Count: 1 Count: 2 Count: 3
    count += 1
} while count <= 3


// Switch with multiple cases and ranges
let character: Character = "a"
print("Switch with multiple cases and ranges:")
switch character {
case "a", "e", "i", "o", "u":
    print("\(character) is a vowel") // Output: a is a vowel
case "b"..."z":
    print("\(character) is a consonant")
default:
    print("Unknown character")
}

// Switch with tuples
let point = (2, 3)
print("Switch with tuples:")
switch point {
case (0, 0):
    print("Origin")
case (_, 0):
    print("On the x-axis")
case (0, _):
    print("On the y-axis")
case (-2...2, -2...2):
    print("Inside the box") // Output: Inside the box
default:
    print("Outside the box")
}

```

## Functions

```swift
// Argument Labels and Parameter Names
func multiply(_ x: Int, by y: Int) -> Int {
    return x * y
}
// In-Out Parameters
func swapValues(_ a: inout Int, _ b: inout Int) {
    let temp = a
    a = b
    b = temp
}
// Variadic Parameters
func sumOfNumbers(_ numbers: Int...) -> Int {
    var total = 0
    for number in numbers {
        total += number
    }
    return total
}
```

## Closures

```swift
let addClosure: (Int, Int) -> Int = { (a: Int, b: Int) in
    return a + b
}
let sum = addClosure(3, 5) // Output: Sum: 8

// Trailing Closures
func performOperation(a: Int, b: Int, operation: (Int, Int) -> Int) -> Int {
    return operation(a, b)
}
let result = performOperation(a: 10, b: 5) { (x, y) in
    return x - y
} // Output: Result: -5

// Capturing Values
func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0
    let incrementer: () -> Int = {
        total += incrementAmount
        return total
    }
    return incrementer
}
let incrementByTwo = makeIncrementer(incrementAmount: 2)
print("First call: \(incrementByTwo())") // Output: First call: 2
print("Second call: \(incrementByTwo())") // Output: Second call: 4
print("Third call: \(incrementByTwo())") // Output: Third call: 6

// Closure Shorthand Syntax
let numbers = [1, 2, 3, 4, 5]
let doubledNumbers = numbers.map { $0 * 2 }
let sortedNumbers = numbers.sorted { $0 > $1 }
```


## Collections

```swift
// Arrays
var fruits: [String] = ["Apple", "Banana", "Cherry"]
print("Fruits array: \(fruits)") // Output: ["Apple", "Banana", "Cherry"]

// Adding an element
fruits.append("Date") // Output: ["Apple", "Banana", "Cherry", "Date"]
let firstFruit = fruits[0] // Output: "Apple"

// Dictionaries
var person: [String: String] = ["name": "John", "city": "New York"]
print("Person dictionary: \(person)") // Output: ["name": "John", "city": "New York"]

// Adding or updating a key-value pair
person["age"] = "30" // Output: ["name": "John", "city": "New York", "age": "30"]

// Accessing values
if let name = person["name"] {
    print("Name: \(name)") // Output: "Name: John"
}

// Sets
var uniqueNumbers: Set<Int> = [1, 2, 3, 3, 4]
print("Unique numbers set: \(uniqueNumbers)") // Output: [2, 3, 1, 4]
uniqueNumbers.insert(5) // Output: [2, 3, 1, 4, 5]

// Iterating over a dictionary
print("Iterating over person dictionary:")
for (key, value) in person {
    print("\(key): \(value)") // Output: name: John city: New York age: 30
}

// Collection Operations
// map
let lengths = fruits.map { $0.count } // Output: [5, 6, 6, 4]
// filter
let longNames = fruits.filter { $0.count > 5 } // Output: ["Banana", "Cherry"]
// reduce
let concatenatedFruits = fruits.reduce("") { $0 + $1 } // Output: "AppleBananaCherryDate"
let sumOfNumbers = uniqueNumbers.reduce(0) { $0 + $1 } // Output: 15
```


## Optionals

```swift
// Optional Types
var optionalString: String? = "Hello, Swift!"  // Output: Optional("Hello, Swift!")
optionalString = nil // Output: nil

// Unwrapping Optionals
optionalString = "Hello again!"
if let unwrappedString = optionalString {
    print("Unwrapped String using if let: \(unwrappedString)") // Output: Hello again!
} else {
    print("optionalString is nil")
}

// guard let
func printUnwrappedString(optionalString: String?) {
    guard let unwrappedString = optionalString else {
        print("optionalString is nil")
        return
    }
    print("Unwrapped String using guard let: \(unwrappedString)") // Output: Hello again!
}

// Optional Chaining
john.address?.street = "123 Main St"
john.address?.city = "New York"

if let street = john.address?.street {
    print("John's street: \(street)") // Output: John's street: 123 Main St
} else {
    print("Street is nil")
}

// Nil-Coalescing Operator
let defaultName = "Anonymous"
let userName: String? = nil
let displayedName = userName ?? defaultName // Output: Displayed Name: Anonymous
```

## Enumerations
    Defining Enumerations
    Associated Values
    Raw Values

```swift
// Defining Enumerations
enum CompassDirection {
    case north
    case south
    case east
    case west
}

var direction = CompassDirection.north // Output: Direction: north
print("Direction: \(direction)") 

// Associated Values
enum Barcode {
    case upc(Int, Int, Int, Int)
    case qrCode(String)
}

var productBarcode = Barcode.upc(8, 85909, 51226, 3) // Output: Product Barcode: upc(8, 85909, 51226, 3)
productBarcode = .qrCode("ABCDEFGHIJKLMNOP") // Output: Product Barcode: qrCode("ABCDEFGHIJKLMNOP")

// Switching on Associated Values
switch productBarcode {
case .upc(let numberSystem, let manufacturer, let product, let check):
    print("UPC: \(numberSystem), \(manufacturer), \(product), \(check)")
case .qrCode(let code):
    print("QR Code: \(code)") // Output: QR Code: ABCDEFGHIJKLMNOP
}

// Raw Values
enum ASCIIControlCharacter: Character {
    case tab = "\t"
    case lineFeed = "\n"
    case carriageReturn = "\r"
}

let controlCharacter = ASCIIControlCharacter.lineFeed
print("Control Character: \(controlCharacter.rawValue)") // Output: Control Character: \n

// Enum with Raw Values
enum Planet: Int {
    case mercury = 1
    case venus
    case earth
    case mars
}

let earth = Planet.earth
print("Planet: \(earth), Raw Value: \(earth.rawValue)") // Output: Planet: earth, Raw Value: 3

// Initializing from a Raw Value
if let possiblePlanet = Planet(rawValue: 2) // Output: Possible Planet: venus
```

## Structures and Classes
    Defining Structures and Classes
    Properties (Stored, Computed, Property Observers)
    Methods (Instance, Type Methods)
    Initialization
    Inheritance
    Protocols

```swift
// Defining Structures and Classes
struct Person {
    // Properties
    var firstName: String
    var lastName: String

    // Computed Property
    var fullName: String { return "\(firstName) \(lastName)" }

    // Method
    func greet() { print("Hello, my name is \(fullName).") }
}

class Animal {
    // Properties
    var name: String
    var age: Int

    // Stored Property with Property Observer
    var weight: Double {
        didSet {
            print("Weight changed from \(oldValue) to \(weight)")
        }
    }

    // Computed Property
    var description: String { return "\(name) is \(age) years old and weighs \(weight) kg." }

    // Initializer
    init(name: String, age: Int, weight: Double) {
        self.name = name
        self.age = age
        self.weight = weight
    }

    // Instance Method
    func speak() { print("\(name) makes a sound.") }

    // Type Method
    class func species() -> String { return "Animal" }
}

// Inheritance
class Dog: Animal {
    // Additional Property
    var breed: String

    // Initializer
    init(name: String, age: Int, weight: Double, breed: String) {
        self.breed = breed
        super.init(name: name, age: age, weight: weight)
    }

    // Overriding Method
    override func speak() { print("\(name) barks.") }
}

// Protocols
protocol Describable {
    var description: String { get }
    func describe()
}

extension Person: Describable {
    var description: String { return "Person: \(fullName)" }

    func describe() { print(description) }
}

extension Dog: Describable {
    func describe() { print(description) }
}

// Using the structures and classes

// Creating a Person instance
let john = Person(firstName: "John", lastName: "Doe")
john.greet() // Output: Hello, my name is John Doe.
john.describe() // Output: Person: John Doe

// Creating an Animal instance
let genericAnimal = Animal(name: "Generic", age: 5, weight: 50.0)
genericAnimal.speak() // Output: Generic makes a sound.
print(genericAnimal.description) // Output: Generic is 5 years old and weighs 50.0 kg.

// Creating a Dog instance
let buddy = Dog(name: "Buddy", age: 3, weight: 30.0, breed: "Golden Retriever")
buddy.speak() // Output: Buddy barks.
buddy.describe() // Output: Buddy is 3 years old and weighs 30.0 kg.

// Using Type Method
print(Animal.species()) // Output: Animal
```


## Error Handling

```swift
// Defining an Error Type using the Error Protocol
enum VendingMachineError: Error {
    case invalidSelection
    case insufficientFunds(coinsNeeded: Int)
    case outOfStock
}

// A function that can throw errors
func vend(itemNamed name: String, coinsInserted: Int) throws -> String {
    let items = ["Chips": 10, "Soda": 15, "Candy": 5]
    guard let itemPrice = items[name] else {
        throw VendingMachineError.invalidSelection
    }
    guard itemPrice <= coinsInserted else {
        throw VendingMachineError.insufficientFunds(coinsNeeded: itemPrice - coinsInserted)
    }
    return "\(name) dispensed"
}

// Throwing and Catching Errors
do {
    let result = try vend(itemNamed: "Chips", coinsInserted: 5)
    print(result)
} catch VendingMachineError.invalidSelection {
    print("Invalid selection. Please choose a valid item.")
} catch VendingMachineError.insufficientFunds(let coinsNeeded) {
    print("Insufficient funds. Please insert an additional \(coinsNeeded) coins.")
} catch VendingMachineError.outOfStock {
    print("Out of stock. Please choose another item.")
} catch {
    print("Unexpected error: \(error).")
}

// Propagating Errors
func buyFavoriteSnack(person: String, vendingMachine: String) throws {
    let favoriteSnacks = ["Alice": "Soda", "Bob": "Candy", "Eve": "Chips"]
    guard let snack = favoriteSnacks[person] else {
        throw VendingMachineError.invalidSelection
    }
    let result = try vend(itemNamed: snack, coinsInserted: 10)
    print("\(person) bought a \(snack): \(result)")
}

do {
    try buyFavoriteSnack(person: "Alice", vendingMachine: "Main Hall")
} catch {
    print("Failed to buy favorite snack: \(error)")
}

// Error Handling with Optionals
let optionalResult = try? vend(itemNamed: "Candy", coinsInserted: 5)
if let result = optionalResult {
    print("Optional handling: \(result)")
} else {
    print("Optional handling: Failed to dispense item")
}

// Forcing Error Handling with Optionals
let forcedResult = try! vend(itemNamed: "Candy", coinsInserted: 5)
print("Forced result: \(forcedResult)")
```

Advanced Topics

    Generics
    Extensions
    Access Control
    Memory Management (ARC, Weak and Unowned References)
    Concurrency (async/await, GCD)

```swift
// Generic Function
func swapValues<T>(_ a: inout T, _ b: inout T) {
    let temp = a
    a = b
    b = temp
}

// Extension to add a method to the String type
extension String {
    func reversedString() -> String {
        return String(self.reversed())
    }
}

//Access control
// private, fileprivate, internal, public, open

//Memory Management (ARC, Weak and Unowned References)
class Person {
    let name: String
    init(name: String) {
        self.name = name
        print("\(name) is initialized")
    }
    deinit {
        print("\(name) is being deinitialized")
    }
}

// Async/Await (requires Swift 5.5 or later)
func fetchWeather() async -> String {
    // Simulate network delay
    await Task.sleep(2 * 1_000_000_000) // 2 seconds
    return "Sunny"
}

func displayWeather() async {
    let weather = await fetchWeather()
    print("Weather: \(weather)")
}

Task {
    await displayWeather()
}

// GCD
DispatchQueue.global().async {
    let weather = "Cloudy"
    DispatchQueue.main.async {
        print("Weather (GCD): \(weather)")
    }
}
```



## Standard Library

```swift
/* Foundation Framework
Date and Time: Shows how to get the current date and time.
DateFormatter: Demonstrates formatting a date to a readable string.
URL and URLComponents: Shows how to create and manipulate URLs.
JSON Serialization: Demonstrates how to parse a JSON string into a Swift dictionary.
File Management: Shows how to access the temporary directory using FileManager.
*/
```