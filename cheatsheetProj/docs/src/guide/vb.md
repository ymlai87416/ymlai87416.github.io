## Unknown language

## Basic structure


```vb
Dim x as in
const PI = 3.141592653589793;
let x = 2;
```


### Simple declaration

### Declare array

```vb
Dim numbers(4) As Integer
Dim numbers = New Integer() {1, 2, 4, 8}
Dim matrix = New Integer(3, 2) {{1, 2, 3}, {2, 3, 4}, {3, 4, 5}, {4, 5, 6}}
```

### Declare structure

```vb
Public Class Person

	Public Sub New(ByVal UserName As String)
		' Set the property value.
		Me.UserName = UserName
	End Sub

	Public Sub Capitalize()
		' Capitalize the value of the property.
		userNameValue = UCase(userNameValue)
	End Sub
End Class
```

### Lambda

```vb
Dim writeline1 = Sub(x) Console.WriteLine(x)
Dim writeline2 = Sub(x)
                     Console.WriteLine(x)
                 End Sub
Console.WriteLine((Function(num As Integer) num + 1)(5))
```

### Enum

```vb
Public Enum EggSizeEnum
	Jumbo
	ExtraLarge
	Large
	Medium
	Small
End Enum
```

## Control structure

```vb
Imports System

Module Program
    Sub Main(args As String())
        Try
            Dim cars = New String() {"Volvo", "BMW", "Ford", "Mazda", Nothing}
            For Each i As String In cars
                Dim car = cars(i)
                If IsNothing(car) Then
                    Print("Hello Hell!")
                Else
                    Print("Hello " + car + "!")
                End If
            Next
        Catch ex As NullReferenceException
            Print("Variable x is not defined")
        Catch ex As Exception
            Print("Something else went wrong")
        End Try

    End Sub
End Module
```

## String

### Basic operation

```vb
Dim x = "line1" & 
        "line2"

Console.WriteLine(GetChar(testString, 4))
Console.WriteLine(pair.Substring(0, position))

Console.WriteLine(UCase(LowerCase))

trimString = LTrim(testString)
trimString = RTrim(testString)
trimString = Trim(testString)
```

### Replace

```vb
a = "Hello, World!"
a.replace("H", "J")
a.split(",")
```

### Concat and compare

```vb
a = "Hello"
b = "World"
c = a & b
```

### Regular expression

```vb
Dim text As String = "A Thousand Splendid Suns"
Dim mc As MatchCollection = Regex.Matches(text, "\bS\S*")
Dim m As Match

For Each m In mc
	Console.WriteLine(m)
Next m
```

```
Matching words that start with 'S':
The Expression: \bS\S*
Splendid
Suns
```

## Array

### Basic operation, access of element

```vb
Dim intData() As Integer = {12, 16, 20, 24, 28, 32}
marks(5) = 92
ReDim Preserve marks(10)
Dim threeDIntArray(10, 10, 10) As Integer
Dim scores As Integer()() = New Integer(5)(){}
```

### Traverse, sort

```vb
Dim zooAnimals(2) As String
zooAnimals(0) = "lion"
zooAnimals(1) = "turtle"
zooAnimals(2) = "ostrich"
Array.Sort(zooAnimals)
```

## Date


### New date

```vb
Dim dateInMay As New System.DateTime(1993, 5, 31, 12, 14, 0)
DateTime date1 = DateTime.Now
Dim someDateAndTime As Date = #5/1/2008 8:30:52 AM#

' ISO 8601
Dim iso8601String = "20080501T08:30:52Z";
Dim dateISO8602 = DateTime.ParseExact(iso8601String, "yyyyMMddTHH:mm:ssZ",
                                System.Globalization.CultureInfo.InvariantCulture);
```

### Add days

```vb
DateAdd("m", 1, "31-Jan-95")
```

### Compare date, diff date

```vb
Dim date1 as new DateTime(2009, 8, 1, 0, 0, 0);
Dim date2 as new DateTime(2009, 8, 1, 12, 0, 0);
Dim result = DateTime.Compare(date1, date2);

if (result < 0)
   relationship = "is earlier than";
```

### Format date

```vb
MsgBox("The formatted date is " & Format(#5/31/1993#, "dddd, d MMM yyyy"))
```

## File

### Console read write

```vb
Dim str As String
str = Console.ReadLine()
Console.ReadKey()

Console.WriteLine("Hello VB!")
```

### Read write line with UTF-8

```vb
Dim objReader As New StreamReader("c:\input.utf8.txt", Encoding.UTF8)
Dim objWriter As New StreamWriter("c:\output.utf8.txt",False, Encoding.UTF8)

Dim Line As String
Dim WholeFile As String = Nothing

Do While objReader.Peek() <> -1
    Line = objReader.ReadLine
    If Line.Length = 0 Then
        WholeFile = WholeFile.Substring(0, WholeFile.Length - 2)
        WholeFile = WholeFile + vbCrLf
        RichTextBox1.Text = WholeFile
    Else
        WholeFile = WholeFile + Line + ", "
    End If
Loop

objWriter.Write(WholeFile)

objWriter.Close()
objReader.Close()
```

### File system operation

```vb
Dim path As String = "c:\temp\MyTest.txt"
' Create or overwrite the file.
Dim fs As FileStream = File.Create(path)

' Add text to the file.
Dim info As Byte() = New UTF8Encoding(True).GetBytes("This is some text in the file.")
fs.Write(info, 0, info.Length)
fs.Close()

My.Computer.FileSystem.DeleteFile(path)
```

## Database


### Connection string list

```vb
'SQL server

data source=192.168.24.**;database=Charge_Sys;uid=sa;pwd=202414;

Server=tcp:myserver.database.windows.net,1433;Database=myDataBase;User ID=mylogin@myserver;Password=myPassword;Trusted_Connection=False;Encrypt=True;

'Azure
Driver={SQL Server Native Client 10.0};Server=tcp:[serverName].database.windows.net;Database=myDataBase;Uid=[LoginForDb]@[serverName];Pwd=myPassword;Encrypt=yes;

```

### Open connection

### Execute select

```vb
Imports System.Data
Imports System.Data.sqlclient

Dim Constring  as  string="data source=192.168.24.**;database=Charge_Sys;uid=sa;pwd=202414;"
Dim sqltxt  as  string ="Select * from User_Info"
Dim sqlconn  as  new  sqlconnection(Constring)
Dim sqlcmd  as  new  sqlcommand(sqltxt,sqlconn)
Dim da  as  new  sqldataadapter(sqlcmd)
Dim ds as  dataset
Dim read as  sqldataReader
Try
	Sqlconn.open()
	Read=sqlcmd.executeReader
	Read.Read()
	Msgbox (read.item(3))
	Read.close()
	Da.Fill(ds,”UserInfo”)
	Datagridview1.datasource=ds.table(“UserInfo”)
Catch  ex  As  Exception
	Msgbox(ex.message)
Finally
	Sqlcmd.dispose()
End Try
```

### Execute update/insert

```vb
Using con As New SqlConnection("server=.;database=Test;integrated security=true")
    Using cmd As New SqlCommand("UPDATE T_Programme Set  pro_nom=@nom , pro_nbr_unites=@unit , pro_nbr_heures=@heures WHERE pro_no =@no", con)

        cmd.Parameters.Add("@no", SqlDbType.VarChar).Value = "1234"
        cmd.Parameters.Add("@nom", SqlDbType.VarChar).Value = "qwerty"
        cmd.Parameters.Add("@unit", SqlDbType.Float).Value = 12.0
        cmd.Parameters.Add("@heures", SqlDbType.Int).Value = 2

        con.Open()
        rowsAffected = cmd.ExecuteNonQuery()

    End Using
End Using
```

### Traverse the dataset

```vb
If dtset.Tables(0).Rows.count <> 0 then
   For i = 0 To dtset.Tables(0).Rows.Count - 1
    'Do Something (insert)
   Next
End If
```

## Popular format

### CSV

#### Read

```vb
Using MyReader As New Microsoft.VisualBasic.
                      FileIO.TextFieldParser(
                        "C:\TestFolder\test.txt")
    MyReader.TextFieldType = FileIO.FieldType.Delimited
    MyReader.SetDelimiters(",")
    Dim currentRow As String()
    While Not MyReader.EndOfData
        Try
            currentRow = MyReader.ReadFields()
            Dim currentField As String
            For Each currentField In currentRow
                MsgBox(currentField)
            Next
        Catch ex As Microsoft.VisualBasic.
                    FileIO.MalformedLineException
            MsgBox("Line " & ex.Message &
            "is not valid and will be skipped.")
        End Try
    End While
End Using
```

#### Write

```vb
Sub ExportCSV()
  Dim strRelFilename As String = "resources\csvData.csv"

  'Get the path of the executable (i.e., the main app-directory).
  Dim strStartupPath As String = _
   System.IO.Path.GetDirectoryName(System.Diagnostics.Process.GetCurrentProcess().MainModule.FileName)

  Dim strFullFilename As String = Path.Combine(strStartupPath, strRelFilename)
  'Stop if the CSV doesn't exist
  If Not File.Exists(strFullFilename) Then
   MsgBox(strRelFilename & " doesn't exist")
   Return
  End If

  Dim anotherArray(14, 3) As String '...
  'Create some test-data
  For y As Integer = 0 To 14
   For x As Integer = 0 To 3
     anotherArray(y, x) = y.ToString() & ":" & x.ToString()
   Next
  Next

  Dim sb As New Text.StringBuilder
  For y As Integer = 0 To 14
   For x As Integer = 0 To 3
     sb.Append(anotherArray(y, x) + ",")
   Next
   sb.Remove(sb.Length - 1, 1) 'Remove trailing ","
   sb.Append(Environment.NewLine) 'Finish the current line
  Next

  'Write the file
  My.Computer.FileSystem.WriteAllText(strFullFilename, sb.ToString(), False)
End Sub

```

### DOM / XML

#### Read / Write / Traverse

```vb
Imports System.Xml
Imports System.IO

'Read
Dim xmldoc As New XmlDataDocument()
Dim xmlnode As XmlNodeList
Dim i As Integer
Dim str As String
Dim fs As New FileStream("products.xml", FileMode.Open, FileAccess.Read)
xmldoc.Load(fs)
xmlnode = xmldoc.GetElementsByTagName("Product")
For i = 0 To xmlnode.Count - 1
    xmlnode(i).ChildNodes.Item(0).InnerText.Trim()
    str = xmlnode(i).ChildNodes.Item(0).InnerText.Trim() & "  " & xmlnode(i).ChildNodes.Item(1).InnerText.Trim() & "  " & xmlnode(i).ChildNodes.Item(2).InnerText.Trim()
    MsgBox(str)
Next


'Write dataset
Dim xmlData = northwindDataSet.GetXml()
Dim filePath = "ENTER A VALID FILEPATH"
northwindDataSet.WriteXml(filePath)

'Write class
Public Module XMLWrite  
  
    Sub Main()  
        WriteXML()  
    End Sub  
  
    Public Class Book  
        Public Title As String  
    End Class  
  
    Public Sub WriteXML()  
        Dim overview As New Book  
        overview.Title = "Serialization Overview"  
        Dim writer As New System.Xml.Serialization.XmlSerializer(GetType(Book))  
        Dim file As New System.IO.StreamWriter(  
            "c:\temp\SerializationOverview.xml")  
        writer.Serialize(file, overview)  
        file.Close()  
    End Sub  
End Module  
```

### JSON

#### Read / Write

```vb
'https://www.newtonsoft.com/json/help/html/ParseJsonObject.htm
Dim json As String = rawresp
Dim jsonObject As Newtonsoft.Json.Linq.JObject = Newtonsoft.Json.Linq.JObject.Parse(json)
Dim jsonArray As JArray = jsonObject("result")

For Each item As JObject In jsonArray
    textboxLast.Text = item.SelectToken("Last").ToString
Next

'Write
Dim videogameRatings as new JObject(
    new JProperty("Halo", 9),
    new JProperty("Starcraft", 9),
    new JProperty("Call of Duty", 7.5));

File.WriteAllText("c:\videogames.json", videogameRatings.ToString());

' write JSON directly to a file
using (file as StreamWriter = File.CreateText("c:\videogames.json"))
    using (writer as JsonTextWriter = new JsonTextWriter(file))
        videogameRatings.WriteTo(writer);
    End Using
End Using
```


```vb
Imports Newtonsoft.Json

Dim i as JValue = JToken.FromObject(12345)

Console.WriteLine(i.Type)
Console.WriteLine(i.ToString())

Dim s as JValue= JToken.FromObject("A string")

Console.WriteLine(s.Type)
Console.WriteLine(s.ToString())

Dim computer as new Computer 
{
    .Cpu = "Intel",
    .Memory = 32,
    .Drives = new List(Of String)
    {
        "DVD",
        "SSD"
    }
};

Dim o as JObject = JToken.FromObject(computer)
Console.WriteLine(o.ToString())

Dim a as JArray = JToken.FromObject(computer.Drives)
Console.WriteLine(a.ToString())
```
### Web/API call

#### Fetch http

```vb
Dim webClient As New System.Net.WebClient
Dim result As String = webClient.DownloadString("http://api.hostip.info/?ip=68.180.206.184")
```

#### Call api


```vb
'ASMX
Protected Sub GetCountry(sender As Object, e As EventArgs)
    Dim service As New GeoService.GeoIPService()
    Dim output As GeoService.GeoIP = service.GetGeoIP(txtIPAddress.Text.Trim())
    lblCountry.Text = "Country: " + output.CountryName
End Sub

'WCF
Private Sub button1_Click(System.Object sender, System.EventArgs e)
    Dim client as New ServiceReference1.Service1Client();

    Dim returnString = client.GetData(textBox1.Text);
    label1.Text = returnString;
End Sub

'JSON 
Private Async Sub PostMessageTest_Click(sender As Object, e As EventArgs) Handles PostMessageTest.Click
   Dim c As New CustomersRest
   c.FirstName = "Bill"
   c.LastName = "Gates"
   c.CustomerID = Guid.Empty
   Dim RestURL As String = "https://example.com/api/customers/"
   Dim client As New Http.HttpClient
   Dim JsonData As String = JsonConvert.SerializeObject(c)
   Dim RestContent As New Http.StringContent(JsonData, Encoding.UTF8, "application/json")
   Dim RestResponse As Http.HttpResponseMessage = Await client.PostAsync(RestURL, RestContent)
   ResultMessage.Text = RestResponse.StatusCode.ToString
End Sub
```


## Advance structure / Popular structure

### Map

```vb
Imports System.Collections.Generic

Dim dictionary As New Dictionary(Of String, Integer)

dictionary.Add("bird", 20)
dictionary.Add("frog", 1)
dictionary.Add("snake", 10)
dictionary.Add("fish", 2)

If values.TryGetValue("c", result) Then
    Console.WriteLine("RESULT: {0}", result)
End If

If dictionary.ContainsKey("carrot") Then
    ' Write value of the key.
    Dim num As Integer = dictionary.Item("carrot")
    Console.WriteLine(num)
End If

For Each pair As KeyValuePair(Of String, Integer) In colors
    Console.WriteLine("COLOR: {0}, VALUE: {1}", pair.Key, pair.Value)
Next

Dim list As New List(Of String)(animals.Keys)

dictionary.Remove("fish")
```


### Set

```vb
' SortedSet  / HashSet
' String array.
Dim a As String() = {"cat", "dog", "cat", "leopard", "tiger", "cat"}
Console.WriteLine(String.Join(" ", a))

' Create HashSet.
Dim hash As HashSet(Of String) = New HashSet(Of String)(a)

For Each b As String In hash
    Console.WriteLine(b)
Next
```

### List

```vb
Dim list As New List(Of Integer)
        list.Add(2)
        list.Add(3)
        list.Add(5)
        list.Add(7)
Dim list2 As New List(Of Integer)({2, 3, 5, 7})

For Each number As Integer In list
    Console.WriteLine("FOR EACH: {0}", number)
Next

list.Insert(1, "dalmatian")

' Add ints on the end.
list.AddRange(New Integer() {3, 4})

' Insert ints at the start.
list.InsertRange(0, New Integer() {-2, -1})

For Each value As String In list.GetRange(1, 2)
    Console.WriteLine("RIVER: {0}", value)
Next

numbers.Remove(20)

Dim index20 As Integer = sizes.IndexOf(20)
```