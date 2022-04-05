# Go


## Go lang

## Header
```go
package main
import "fmt"
```

## Basic structure

### Simple declaration
```go
var msg string
msg = "Hello"
myNum := 5
var myFloatNum float32 := 5.99
const Phi = 1.618
```

### Declare array

```java
var cars [5]string
cars := [...]string{"Volvo", "BMW", "Ford", "Mazda"}   //Fix size
slice := []int{2, 3, 4} //dynamic size
var threedim [5][10][4]int
a = [3][4]int{  
   {0, 1, 2, 3} ,   /*  initializers for row indexed by 0 */
   {4, 5, 6, 7} ,   /*  initializers for row indexed by 1 */
   {8, 9, 10, 11}   /*  initializers for row indexed by 2 */
}
System.out.println(len(cars))
```

### Declare structure

### Enum
```go
type Season int64

const (
	Summer Season = 0
	Autumn        = 1
	Winter        = 2
	Spring        = 3
)
```

## Control structure

A code segment which show the following
	* Loop
	* If check null
	* Try catch
	* Import Library
	* Define a function
	* Declare a class

```go
package main

import "fmt"

type car struct {
	name string
}

func New(name string) car {
	e := car{name}
	return e
}

/* define a method for circle */
func(circle Circle) area() float64 {
   return math.Pi * circle.radius * circle.radius
}

func main() {
    //finally in java
    defer print("end")
	//there is no try catch handling.
    //cannot be null, if null, make it a pointer
	cars := [...]string{"Volvo", "BMW", "Ford", "Mazda"}
	for i := 1; i < len(cars); i++ {
		var car string = cars[i]
		fmt.Println("Hello " + car + "!")
	}
}
```


## String

### Basic operation
```go
var greeting string = "Hello";
fmt.Println(fmt.Sprintf("The length of the txt string is: %d", len(greeting)) );
fmt.Println(strings.ToUpper(greeting)); 
fmt.Println(strings.Index(greeting, "ll"))
```

### Replace
```go
Str := "Runoob"
fmt.Println(strings.Replace(Str, "u", "D", -1));
```

### Concat and compare
```go
a := "12"+"34"
result1 := str1 == str2
result5 := str1 != str2
result6 := str1 > str2
strings.Compare("GeeksforGeeks", "GeeksforGeeks")
```

### Regular expression
```go
import (
    "fmt"
    "regexp"
    "strings"
)
str := "geeksforgeeks"
match1, err := regexp.MatchString("geeks", str)
fmt.Println("Match: ", match1, " Error: ", err)

re, _ := regexp.Compile("geek")
  
// string to be matched
str := "I love geeksforgeeks"

// returns the slice of first and last index
match := re.FindStringIndex(str)
fmt.Println(match)  //[7 11]
```

## Array

### Basic operation, access of element
```go
cars := [...]string{"Volvo", "BMW", "Ford", "Mazda"};
print (cars[0]);
```

### Traverse, sort
```go
for _, car := range cars {
  print(car);
}
import "sort"
sort.Strings(arr[:])  //arr is array => arr[:] is a slice
```

## Date

### New date

```go
import "time"
t := time.Now()
fmt.Println(t) //2009-11-10 23:00:00 +0000 UTC m=+0.000000001
t = time.Date(2021, time.Month(2), 21, 1, 10, 30, 0, time.UTC)
rounded := time.Date(t.Year(), t.Month(), t.Day(), 0, 0, 0, 0, t.Location())
```

### Add days

```go
myDate.AddDate(0, 0, 2) //adding 2 days
```

### Compare date, diff date
```go
g1 := today.Before(tomorrow)
g2 := tomorrow.After(today)
today != tomorrow 
today == tomorrow 
```

### Format date
```go
now := time.Now()
fmt.Println(now.Format("2006-02-01")) //reference time = Mon Jan 2 15:04:05 -0700 MST 2006
fmt.Println(now.Format(time.RFC822)) //02 Jan 06 15:04 MST
fmt.Println(now.Format(time.Kitchen)) //3:04PM
fmt.Println(now.Format(time.UnixDate)) //Mon Jan _2 15:04:05 MST 2006
```
	
## File

### Console read write
```go

reader := bufio.NewReader(os.Stdin)
fmt.Println("Simple Shell")
fmt.Println("---------------------")

for {
    fmt.Print("-> ")
    text, _ := reader.ReadString('\n')
    // convert CRLF to LF
    text = strings.Replace(text, "\n", "", -1)

    if strings.Compare("hi", text) == 0 {
        fmt.Println("hello, Yourself")
    }

}

reader := bufio.NewReader(os.Stdin)
char, _, err := reader.ReadRune()  //single character

if err != nil {
  fmt.Println(err)
}

// print out the unicode value i.e. A -> 65, a -> 97
fmt.Println(char)

```

### Read write line with UTF-8
```go
import (
    "fmt"
    "io/ioutil"
)

func main() {
    // read in the contents of the localfile.data
    data, err := ioutil.ReadFile("localfile.data")
    // if our program was unable to read the file
    // print out the reason why it can't
    if err != nil {
        fmt.Println(err)
    }

    // if it was successful in reading the file then
    // print out the contents as a string
    fmt.Print(string(data))

    // the WriteFile method returns an error if unsuccessful
    err := ioutil.WriteFile("myfile.data", mydata, 0777)
    // handle this error
    if err != nil {
    // print it out
    fmt.Println(err)
    }

    f, err := os.OpenFile("myfile.data", os.O_APPEND|os.O_WRONLY, 0600)
    if err != nil {
        panic(err)
    }
    defer f.Close()

}
```


### File system operation

```go
import (
    "bufio"
    "fmt"
    "os"
)

f, err := os.Create("/tmp/dat2")
check(err)

err = os.MkdirAll("subdir/parent/child", 0755)
check(err)

c, err := os.ReadDir("subdir/parent")
check(err)
fmt.Println("Listing subdir/parent")
for _, entry := range c {
    fmt.Println(" ", entry.Name(), entry.IsDir())
}

err = os.Chdir("subdir/parent/child")
check(err)

```

## Database

### Connection string list and open connection

```go

import (
    "database/sql"
    "fmt"
    "log"
    "os"

    "github.com/go-sql-driver/mysql"
)
var db *sql.DB

func main() {
    // Capture connection properties.
    cfg := mysql.Config{
        User:   os.Getenv("DBUSER"),
        Passwd: os.Getenv("DBPASS"),
        Net:    "tcp",
        Addr:   "127.0.0.1:3306",
        DBName: "recordings",
    }
    // Get a database handle.
    var err error
    db, err = sql.Open("mysql", cfg.FormatDSN())
    if err != nil {
        log.Fatal(err)
    }

    pingErr := db.Ping()
    if pingErr != nil {
        log.Fatal(pingErr)
    }
    fmt.Println("Connected!")
}
```

### Execute update/insert

```go
// addAlbum adds the specified album to the database,
// returning the album ID of the new entry
func addAlbum(alb Album) (int64, error) {
    result, err := db.Exec("INSERT INTO album (title, artist, price) VALUES (?, ?, ?)", alb.Title, alb.Artist, alb.Price)
    if err != nil {
        return 0, fmt.Errorf("addAlbum: %v", err)
    }
    id, err := result.LastInsertId()
    if err != nil {
        return 0, fmt.Errorf("addAlbum: %v", err)
    }
    return id, nil
}
```

### Execute select and traverse dataset

```go
func albumsByArtist(name string) ([]Album, error) {
    // An albums slice to hold data from returned rows.
    var albums []Album

    rows, err := db.Query("SELECT * FROM album WHERE artist = ?", name)
    if err != nil {
        return nil, fmt.Errorf("albumsByArtist %q: %v", name, err)
    }
    defer rows.Close()
    // Loop through rows, using Scan to assign column data to struct fields.
    for rows.Next() {
        var alb Album
        if err := rows.Scan(&alb.ID, &alb.Title, &alb.Artist, &alb.Price); err != nil {
            return nil, fmt.Errorf("albumsByArtist %q: %v", name, err)
        }
        albums = append(albums, alb)
    }
    if err := rows.Err(); err != nil {
        return nil, fmt.Errorf("albumsByArtist %q: %v", name, err)
    }
    return albums, nil
}
```


## Popular format

### CSV

#### Read

```go
import (
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"strings"
)

in := `first_name,last_name,username
"Rob","Pike",rob
Ken,Thompson,ken
"Robert","Griesemer","gri"
`
r := csv.NewReader(strings.NewReader(in))
for {
    record, err := r.Read()
    if err == io.EOF {
        break
    }
    if err != nil {
        log.Fatal(err)
    }

    fmt.Println(record)
}
```

#### Write

```go
records := [][]string{
    {"first_name", "last_name", "username"},
    {"Rob", "Pike", "rob"},
    {"Ken", "Thompson", "ken"},
    {"Robert", "Griesemer", "gri"},
}

w := csv.NewWriter(os.Stdout)

for _, record := range records {
    if err := w.Write(record); err != nil {
        log.Fatalln("error writing record to csv:", err)
    }
}

// Write any buffered data to the underlying writer (standard output).
w.Flush()

if err := w.Error(); err != nil {
    log.Fatal(err)
}
```

### DOM / XML

#### Read / Write and Traverse
```go
import (
	"encoding/xml"
	"fmt"
	"log"
	"strings"
)

type Plant struct {
    XMLName xml.Name `xml:"plant"`
    Id      int      `xml:"id,attr"`
    Name    string   `xml:"name"`
    Origin  []string `xml:"origin"`
}
coffee := &Plant{Id: 27, Name: "Coffee"}
coffee.Origin = []string{"Ethiopia", "Brazil"}
out, _ := xml.MarshalIndent(coffee, " ", "  ")
fmt.Println(string(out))

type Users struct {
    XMLName xml.Name `xml:"users"`
    Users   []User   `xml:"user"`
}

type User struct {
    XMLName xml.Name `xml:"user"`
    Type    string   `xml:"type,attr"`
    Name    string   `xml:"name"`
    Social  Social   `xml:"social"`
}

// read our opened xmlFile as a byte array.
byteValue, _ := ioutil.ReadAll(xmlFile)

// we initialize our Users array
var users Users
// we unmarshal our byteArray which contains our
// xmlFiles content into 'users' which we defined above
xml.Unmarshal(byteValue, &users)

for i := 0; i < len(users.Users); i++ {
    fmt.Println("User Type: " + users.Users[i].Type)
    fmt.Println("User Name: " + users.Users[i].Name)
    fmt.Println("Facebook Url: " + users.Users[i].Social.Facebook)
}
```

#### Select element
```go
import "gopkg.in/xmlpath.v2"

path := xmlpath.MustCompile("/library/book/isbn")
root, err := xmlpath.Parse(file)
if err != nil {
        log.Fatal(err)
}
if value, ok := path.String(root); ok {
        fmt.Println("Found:", value)
}
```

### JSON

#### Read / Write
```go
import (
    "encoding/json"
    "fmt"
    "os"
)
type response2 struct {
    Page   int      `json:"page"`
    Fruits []string `json:"fruits"`
}
res2D := &response2{
    Page:   1,
    Fruits: []string{"apple", "peach", "pear"}}
res2B, _ := json.Marshal(res2D)
fmt.Println(string(res2B))  //{"page":1,"fruits":["apple","peach","pear"]}


type Users struct {
    Users []User `json:"users"`
}

// User struct which contains a name
// a type and a list of social links
type User struct {
    Name   string `json:"name"`
    Type   string `json:"type"`
    Age    int    `json:"Age"`
    Social Social `json:"social"`
}

// Open our jsonFile
jsonFile, err := os.Open("users.json")
// if we os.Open returns an error then handle it
if err != nil {
    fmt.Println(err)
}
fmt.Println("Successfully Opened users.json")
// defer the closing of our jsonFile so that we can parse it later on
defer jsonFile.Close()

// read our opened jsonFile as a byte array.
byteValue, _ := ioutil.ReadAll(jsonFile)

var users Users

json.Unmarshal(byteValue, &users)

for i := 0; i < len(users.Users); i++ {
    fmt.Println("User Type: " + users.Users[i].Type)
    fmt.Println("User Age: " + strconv.Itoa(users.Users[i].Age))
    fmt.Println("User Name: " + users.Users[i].Name)
    fmt.Println("Facebook Url: " + users.Users[i].Social.Facebook)
}
```

### Yaml

```golang
type T struct {
    A string
    B struct {
        RenamedC int   `yaml:"c"`
        D        []int `yaml:",flow"`
    }
}

t := T{}
    
err := yaml.Unmarshal([]byte(data), &t)
if err != nil {
    log.Fatalf("error: %v", err)
}
fmt.Printf("--- t:\n%v\n\n", t)

d, err := yaml.Marshal(&t)
if err != nil {
    log.Fatalf("error: %v", err)
}
fmt.Printf("--- t dump:\n%s\n\n", string(d))
```

### Web/API call


#### Fetch http
```go
import (
   "io/ioutil"
   "log"
   "net/http"
)
resp, err := http.Get("https://jsonplaceholder.typicode.com/posts/1")
if err != nil {
   log.Fatalln(err)
}
```

#### Call api
```go
func main() {
//Encode the data
   postBody, _ := json.Marshal(map[string]string{
      "name":  "Toby",
      "email": "Toby@example.com",
   })
   responseBody := bytes.NewBuffer(postBody)
//Leverage Go's HTTP Post function to make request
   resp, err := http.Post("https://postman-echo.com/post", "application/json", responseBody)
//Handle Error
   if err != nil {
      log.Fatalf("An Error Occured %v", err)
   }
   defer resp.Body.Close()
//Read the response body
   body, err := ioutil.ReadAll(resp.Body)
   if err != nil {
      log.Fatalln(err)
   }
   sb := string(body)
   log.Printf(sb)
}
```

## Advance structure / Popular structure

### Map
		○ Declaration
		○ Traverse
		○ Common operation (add/remove/find)

```go
m := make(map[string]int)

m["Dio"] = 3
m["Jonathan"] = 1

var id string
var ok bool
if x, found := res["strID"]; found {
     if id, ok = x.(string); !ok {
        //do whatever you want to handle errors - this means this wasn't a string
     }
} else {
   //handle error - the map didn't contain this key
}

for k, v := range m { 
    fmt.Printf("key[%s] value[%s]\n", k, v)
}

_, ok := sessions["moo"];
if ok {
    delete(sessions, "moo");
}
```

### Set

```go
//No set in golang, use map[string]bool instead
```

### List

```go
	
import "container/list"
l := list.New()    // Initialize an empty list
fmt.Println(l)      // &{{0x43e280 0x43e280 <nil> <nil>} 0}
fmt.Println(l.Front())      // <nil>
fmt.Println(l.Back())       // <nil>
l.PushFront(10)
fmt.Println(l.Front())       // &{0x43e280 0x43e280 0x43e280 10}
l.PushBackList(l2)      //l2 is a list here
l.Remove(v)
```

