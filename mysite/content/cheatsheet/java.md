---
title: "Java"
date: "2022-04-04"
author: "Tom"

toc:
  enable: true
  auto: true
---

## Java

## Basic structure

### Simple declaration

```java
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
```

### Declare array

```java
String[] cars = new String[4];
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
System.out.println(cars.length)
```

### Declare structure

```java

public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}
```

### Enum

```java
enum Level {
  LOW,
  MEDIUM,
  HIGH
}
```

## Control structure

A code segment which show the following
	* Loop
	* If check null
	* Try catch
	* Import Library
	* Define a function
	* Declare a class

```java
import java.io.File;  // Import the File class

public class Main {
    public static void main(String[] args) {
        try{
            String[] cars = ["Volvo", "BMW", "Ford", "Mazda", null];
            for(int i=0; i<cars.length; ++i){
                String car = cars[i];
                if(car == null)
                    System.out.println("Hello Hell!");    
                else
                    System.out.println("Hello " + car + "!");    
            }
        }
        catch(Exception ex){

        }
    }
}

```


## String

### Basic operation

```java
String greeting = "Hello";
System.out.println("The length of the txt string is: " + txt.length());
System.out.println(txt.toUpperCase()); 
System.out.println(txt.indexOf("locate")); // Outputs 7
```

### Replace

```java
String Str = new String("Runoob");
System.out.println(Str.replace('u', 'D'));
```

### Concat and compare

```java
"12".compareTo("34")
String a = "12"+"34"
```

### Regular expression

```java
import java.util.regex.Matcher;
import java.util.regex.Pattern;

Pattern pattern = Pattern.compile("w3schools", Pattern.CASE_INSENSITIVE);
Matcher matcher = pattern.matcher("Visit W3Schools!");
boolean matchFound = matcher.find();
if(matchFound) {
    System.out.println("Match found");
} else {
    System.out.println("Match not found");
}
```

## Array

### Basic operation, access of element

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
System.out.println(cars[0]);
```

### Traverse, sort

```java
for (String i : cars) {
  System.out.println(i);
}

Arrays.sort(cars);
```

## Date

Java 8 new library `java.time` similar to Joda time


### New date

```java
import java.time.LocalDate; // import the LocalDate class
LocalDate localDate = LocalDate.now(); // Create a date object
LocalDate localDate = LocalDate.of(2017, 06, 22);
System.out.println(localDate); // Display the current date
LocalDate localDate = LocalDate.getLocalDate();
```

### Add days

```java
LocalDate tomorrow = today.plusDays(1);
```

### Compare date, diff date
```java
if(todayDate.after(historyDate) && todayDate.before(futureDate)) {
    // In between
}
```
### Format date
	
```java
System.out.println(myDateObj);
DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");

String formattedDate = myDateObj.format(myFormatObj);
System.out.println("After formatting: " + formattedDate);
```

## File

### Console read write

```java
//read
BufferedReader reader =
            new BufferedReader(new InputStreamReader(System.in));
String name = reader.readLine();

//write
System.out.println(name);
```

### Read write line with UTF-8

```java
import java.io.File;  // Import the File class

File myObj = new File("filename.txt"); // Specify the filename
myObj.createNewFile()       //return true if can create

//read
try {
    File myObj = new File("filename.txt", "UTF-8"));
    Scanner myReader = new Scanner(myObj);
    while (myReader.hasNextLine()) {
        String data = myReader.nextLine();
        System.out.println(data);
    }
    myReader.close();
} catch (FileNotFoundException e) {
    System.out.println("An error occurred.");
    e.printStackTrace();
}

//write
try {
    //Writer  fstream = new OutputStreamWriter(new FileOutputStream(mergedFile), StandardCharsets.UTF_8);
    FileWriter myWriter = new FileWriter("filename.txt", "UTF-8"));
    myWriter.write("Files in Java might be tricky, but it is fun enough!");
    myWriter.close();
    System.out.println("Successfully wrote to the file.");
} catch (IOException e) {
    System.out.println("An error occurred.");
    e.printStackTrace();
}
```

## Database

### Connection string list

```
"jdbc:oracle:thin:username/password@amrood:1521:EMP"
```

### Open connection

```java
import java.sql.* ;  // for standard JDBC programs
import java.math.* ; // for BigDecimal and BigInteger support

try {
    Class.forName("oracle.jdbc.driver.OracleDriver").newInstance();
    String URL = "jdbc:oracle:thin:username/password@amrood:1521:EMP";
    Connection conn = DriverManager.getConnection(URL);
}
catch(ClassNotFoundException ex) {
    System.out.println("Error: unable to load driver class!");
    System.exit(1);
catch(IllegalAccessException ex) {
    System.out.println("Error: access problem while loading!");
    System.exit(2);
catch(InstantiationException ex) {
    System.out.println("Error: unable to instantiate driver!");
    System.exit(3);
}
```

### Execute update/insert

```java
sql = "INSERT INTO Registration " +
                   "VALUES(?, ?, ?, ?)";
PreparedStatement updateRegistration = con.prepareStatement(sql)
updateRegistration.setInt(1, 103);
updateRegistration.setString(2, 'Sumit');
updateRegistration.setString(3, 'Mittal');
updateRegistration.setString(4, 28);
updateRegistration.executeUpdate();

System.out.println("Inserted records into the table...");
```

### Execute select

```java
//STEP 4: Execute a query
System.out.println("Creating statement...");
stmt = conn.createStatement();
String sql;
sql = "SELECT id, first, last, age FROM Employees";
ResultSet rs = stmt.executeQuery(sql);
```

### Traverse the dataset

```java
//STEP 5: Extract data from result set
while(rs.next()){
    //Retrieve by column name
    int id  = rs.getInt("id");
    int age = rs.getInt("age");
    String first = rs.getString("first");
    String last = rs.getString("last");

    //Display values
    System.out.print("ID: " + id);
    System.out.print(", Age: " + age);
    System.out.print(", First: " + first);
    System.out.println(", Last: " + last);
}
//STEP 6: Clean-up environment
rs.close();
stmt.close();
conn.close();
```

## Popular format

### CSV

    compile group: 'com.opencsv', name: 'opencsv', version: '4.1'

#### Read

```java
CSVReader csvReader = new CSVReader(filereader); 
String[] nextRecord; 

// we are going to read data line by line 
while ((nextRecord = csvReader.readNext()) != null) { 
    for (String cell : nextRecord) { 
        System.out.print(cell + "\t"); 
    } 
    System.out.println(); 
} 


// Create an object of file reader class with CSV file as a parameter. 
FileReader filereader = new FileReader(file); 

// create csvParser object with 
// custom seperator semi-colon 
CSVParser parser = new CSVParserBuilder().withSeparator(';').build(); 

// create csvReader object with parameter 
// filereader and parser 
CSVReader csvReader = new CSVReaderBuilder(filereader) 
                            .withCSVParser(parser) 
                            .build(); 

// Read all data at once 
List<String[]> allData = csvReader.readAll(); 
```

#### Write

```java
CSVWriter writer = new CSVWriter(new FileWriter(path.toString()));
for (String[] array : stringArray) {
    writer.writeNext(array);
}

writer.close();
```

### DOM / XML

    Java 9 need dependency on javax.xml.bind:jaxb-api:2.3.0

#### Read / Write

```java
import java.io.File;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;

public class DomParserDemo {
   public static void main(String[] args){

      try {	
         File inputFile = new File("input.txt");
         DocumentBuilderFactory dbFactory 
            = DocumentBuilderFactory.newInstance();
         DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
         Document doc = dBuilder.parse(inputFile);
         doc.getDocumentElement().normalize();
         System.out.println("Root element :" 
            + doc.getDocumentElement().getNodeName());
         NodeList nList = doc.getElementsByTagName("student");
         System.out.println("----------------------------");
         for (int temp = 0; temp < nList.getLength(); temp++) {
            Node nNode = nList.item(temp);
            System.out.println("\nCurrent Element :" 
               + nNode.getNodeName());
            if (nNode.getNodeType() == Node.ELEMENT_NODE) {
               Element eElement = (Element) nNode;
               System.out.println("Student roll no : " 
                  + eElement.getAttribute("rollno"));
               System.out.println("First Name : " 
                  + eElement
                  .getElementsByTagName("firstname")
                  .item(0)
                  .getTextContent());
               System.out.println("Last Name : " 
               + eElement
                  .getElementsByTagName("lastname")
                  .item(0)
                  .getTextContent());
               System.out.println("Nick Name : " 
               + eElement
                  .getElementsByTagName("nickname")
                  .item(0)
                  .getTextContent());
               System.out.println("Marks : " 
               + eElement
                  .getElementsByTagName("marks")
                  .item(0)
                  .getTextContent());
            }
         }
      } catch (Exception e) {
         e.printStackTrace();
      }
   }
}
```

#### Write XML

```java
public class CreateXMLFileJava {
 
    public static final String xmlFilePath = "C:\\Users\\nikos7\\Desktop\\files\\xmlfile.xml";
 
    public static void main(String argv[]) {
 
        try {
 
            DocumentBuilderFactory documentFactory = DocumentBuilderFactory.newInstance();
 
            DocumentBuilder documentBuilder = documentFactory.newDocumentBuilder();
 
            Document document = documentBuilder.newDocument();
 
            // root element
            Element root = document.createElement("company");
            document.appendChild(root);
 
            // employee element
            Element employee = document.createElement("employee");
 
            root.appendChild(employee);
 
            // set an attribute to staff element
            Attr attr = document.createAttribute("id");
            attr.setValue("10");
            employee.setAttributeNode(attr);
 
            //you can also use staff.setAttribute("id", "1") for this
 
            // firstname element
            Element firstName = document.createElement("firstname");
            firstName.appendChild(document.createTextNode("James"));
            employee.appendChild(firstName);
 
            // lastname element
            Element lastname = document.createElement("lastname");
            lastname.appendChild(document.createTextNode("Harley"));
            employee.appendChild(lastname);
 
            // email element
            Element email = document.createElement("email");
            email.appendChild(document.createTextNode("james@example.org"));
            employee.appendChild(email);
 
            // department elements
            Element department = document.createElement("department");
            department.appendChild(document.createTextNode("Human Resources"));
            employee.appendChild(department);
 
            // create the xml file
            //transform the DOM Object to an XML File
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            DOMSource domSource = new DOMSource(document);
            StreamResult streamResult = new StreamResult(new File(xmlFilePath));
 
            // If you use
            // StreamResult result = new StreamResult(System.out);
            // the output will be pushed to the standard output ...
            // You can use that for debugging 
 
            transformer.transform(domSource, streamResult);
 
            System.out.println("Done creating XML File");
 
        } catch (ParserConfigurationException pce) {
            pce.printStackTrace();
        } catch (TransformerException tfe) {
            tfe.printStackTrace();
        }
    }
}
```

### JSON

```gradle
dependencies {
    implementation 'com.fasterxml.jackson.core:jackson-core:2.14.1'
    implementation 'com.fasterxml.jackson.core:jackson-annotations:2.14.1'
    implementation 'com.fasterxml.jackson.core:jackson-databind:2.14.1'
}
```

#### Read

```java
public static void main(String[] args) {
    // JSON string representing an array of objects
    String jsonString = "[{\"name\":\"John Doe\", \"age\":30}, {\"name\":\"Jane Doe\", \"age\":25}]";

    // Create ObjectMapper instance
    ObjectMapper objectMapper = new ObjectMapper();

    try {
        // Deserialize JSON string to JsonNode
        JsonNode rootNode = objectMapper.readTree(jsonString);

        // Check if the root node is an array
        if (rootNode.isArray()) {
            // Cast the root node to ArrayNode
            ArrayNode arrayNode = (ArrayNode) rootNode;

            // Iterate over elements of the array
            for (JsonNode node : arrayNode) {
                // Access individual fields of each JsonNode
                String name = node.get("name").asText();
                int age = node.get("age").asInt();

                // Print out the fields
                System.out.println("Name: " + name);
                System.out.println("Age: " + age);
            }
        }

    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

#### Write

```java
public static void main(String[] args) {
    // Create an instance of ObjectMapper
    ObjectMapper objectMapper = new ObjectMapper();

    // Create a JsonNodeFactory instance
    JsonNodeFactory nodeFactory = JsonNodeFactory.instance;

    // Create an ObjectNode (a JSON object)
    ObjectNode personNode = nodeFactory.objectNode();
    
    // Add properties to the ObjectNode
    personNode.put("name", "John Doe");
    personNode.put("age", 30);

    // Create an ArrayNode (a JSON array)
    ArrayNode phoneNumbersNode = nodeFactory.arrayNode();
    phoneNumbersNode.add("123-456-7890");
    phoneNumbersNode.add("987-654-3210");
    
    // Add the ArrayNode to the ObjectNode
    personNode.set("phoneNumbers", phoneNumbersNode);
    
    // Convert ObjectNode to JsonNode
    JsonNode jsonNode = personNode;

    // Print the JsonNode as a JSON string
    try {
        String jsonString = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(jsonNode);
        System.out.println(jsonString);
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```

### Yaml

```java
public class Order {
    private String orderNo;
    private LocalDate date;
    private String customerName;
    private List<OrderLine> orderLines;
    // Constructors, Getters, Setters and toString
}
public class OrderLine {
    private String item;
    private int quantity;
    private BigDecimal unitPrice;
    // Constructors, Getters, Setters and toString
}
//install package jackson-dataformat-yaml
mapper = new ObjectMapper(new YAMLFactory());
mapper.findAndRegisterModules(); //handle date property??
Order order = mapper.readValue(new File("src/main/resources/orderInput.yaml"), Order.class);
```

### Web/API call

#### Fetch http

```java

public class ParameterStringBuilder {
    public static String getParamsString(Map<String, String> params) 
      throws UnsupportedEncodingException{
        StringBuilder result = new StringBuilder();

        for (Map.Entry<String, String> entry : params.entrySet()) {
          result.append(URLEncoder.encode(entry.getKey(), "UTF-8"));
          result.append("=");
          result.append(URLEncoder.encode(entry.getValue(), "UTF-8"));
          result.append("&");
        }

        String resultString = result.toString();
        return resultString.length() > 0
          ? resultString.substring(0, resultString.length() - 1)
          : resultString;
    }
}

URL url = new URL("http://example.com");
HttpURLConnection con = (HttpURLConnection) url.openConnection();
con.setRequestMethod("GET");

Map<String, String> parameters = new HashMap<>();
parameters.put("param1", "val");

con.setDoOutput(true);
DataOutputStream out = new DataOutputStream(con.getOutputStream());
out.writeBytes(ParameterStringBuilder.getParamsString(parameters));
out.flush();
out.close();

//set
con.setRequestProperty("Content-Type", "application/json")
//read
String contentType = con.getHeaderField("Content-Type");

String cookiesHeader = con.getHeaderField("Set-Cookie");
List<HttpCookie> cookies = HttpCookie.parse(cookiesHeader);

Optional<HttpCookie> usernameCookie = cookies.stream()
  .findAny().filter(cookie -> cookie.getName().equals("username"));
if (usernameCookie == null) {
    cookieManager.getCookieStore().add(null, new HttpCookie("username", "john"));
}

con.disconnect();
con = (HttpURLConnection) url.openConnection();

con.setRequestProperty("Cookie", 
  StringUtils.join(cookieManager.getCookieStore().getCookies(), ";"));

//redirect
con.setInstanceFollowRedirects(false);
HttpUrlConnection.setFollowRedirects(false);

//read
int status = con.getResponseCode();
BufferedReader in = new BufferedReader(
  new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer content = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    content.append(inputLine);
}
in.close();

int status = con.getResponseCode();

Reader streamReader = null;

if (status > 299) {
    streamReader = new InputStreamReader(con.getErrorStream());
} else {
    streamReader = new InputStreamReader(con.getInputStream());
}

```

#### Call api

Apache HTTP Components

```java
HttpClient httpclient = HttpClients.createDefault();
HttpPost httppost = new HttpPost("http://www.a-domain.com/foo/");

// Request parameters and other properties.
List<NameValuePair> params = new ArrayList<NameValuePair>(2);
params.add(new BasicNameValuePair("param-1", "12345"));
params.add(new BasicNameValuePair("param-2", "Hello!"));
httppost.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));

//Execute and get the response.
HttpResponse response = httpclient.execute(httppost);
HttpEntity entity = response.getEntity();

if (entity != null) {
    try (InputStream instream = entity.getContent()) {
        // do something useful
    }
}
```

## Advance structure / Popular structure

```java
// Map
HashMap<String, Integer> people = new HashMap<String, Integer>();
people.put("John", 32);
people.put("Steve", 30);
people.put("Angie", 33);

//immutable
Map<String, String> map = Map.of("key1","value1", "key2", "value2");

// Set
HashSet<String> cars = new HashSet<String>();

//immutable
Set<String> strSet = Set.of("Apple", "Ball", "Cat", "Dog");

// ArrayList
ArrayList<String> cars = new ArrayList<String>();
```

## Threading

```java
//there are 3 ways to create a thread
//extends a thread class
NewThread t = new NewThread();
t.start();
//create a runnable
Thread t = new Thread(new MyRunnable());
t.start();
//create a task
Callable<String> callableTask = () -> {
    TimeUnit.MILLISECONDS.sleep(300);
    return "Task's execution";
};

ExecutorService executor = Executors.newFixedThreadPool(10);
Future<String> result = executor.submit(() -> {
    new Task();
});
result.get();

//a lock, please aware of lock ownership.
Reentrantlock lock = new Reentrantlock();
lock.lock(); lock.tryLock(); lock.unlock();

Semaphore seml new Semaphore(1);

static syncrhonized void myMethod(){}  //lock on class level
syncrhonized void myMethod(){}  //lock on object level
```

## Stream and reactive programming

```java
//create stream
private static List<Employee> empList = Arrays.asList(arrayOfEmps);
empList.stream();
Stream.of(arrayOfEmps[0], arrayOfEmps[1], arrayOfEmps[2]);

Stream.Builder<Employee> empStreamBuilder = Stream.builder();
empStreamBuilder.accept(arrayOfEmps[0]);
empStreamBuilder.accept(arrayOfEmps[1]);
empStreamBuilder.accept(arrayOfEmps[2]);
Stream<Employee> empStream = empStreamBuilder.build();

//for-each
empList.stream().forEach(e -> e.salaryIncrement(10.0));

//map and reduce
Double sumSal = empList.stream()
      .map(Employee::getSalary)
      .reduce(0.0, Double::sum);

//filter
mployees = Stream.of(empIds).map(employeeRepository::findById).filter(e -> e != null)

//flatMap
List<String> namesFlatStream = namesNested.stream().flatMap(Collection::stream)
      .collect(Collectors.toList());

//others: sorted, findFirst, orElse, min, max, distinct, allMatch, anyMatch, noneMatch, takeWhile, dropWhile

//collect function
//toList
List<Employee> employees = empList.stream().collect(Collectors.toList());
//toArray
Employee[] employees = empList.stream().toArray(Employee[]::new);
//others: joining, toSet, toCollection, summarizingDouble, groupingBy, partitioningBy, reducing, 

//parallel stream. Default pool is ForkJoinPool.commonPool(), you can assign a pool for it.
ForkJoinPool customThreadPool = new ForkJoinPool(4);
long actualTotal = customThreadPool.submit(
      () -> aList.parallelStream().reduce(0L, Long::sum)).get();
```
