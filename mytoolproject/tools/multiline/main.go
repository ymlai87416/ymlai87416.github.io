package main

import (
	"fmt"
	"strconv"
	"strings"
	"syscall/js"
)

func multiline(input string, language string) string {
	switch language {
	case "vb":
		return escapeVB(input)
	case "java":
		return escapeJava(input)
	default:
		fmt.Printf("language not supported.")
		return ""
	}
}

/*
	Sample code:
	1. +
	2. StringBuilder
		new StringBuilder("Hello World!");
		builder.Append("Step " & i & vbCrLf)
*/
func escapeVB(input string) string {
	temp := strings.Split(input, "\n")
	var resultF strings.Builder

	for i := 0; i < len(temp); i++ {
		var state int = 0
		var resultL strings.Builder
		runesArr := []rune(temp[i])
		for j := 0; j < len(runesArr); j++ {
			fmt.Println(string(runesArr[j]) + " " + strconv.Itoa(state))
			if runesArr[j] == '"' {
				if state == 0 {
					state = 1
				} else if state == 1 {
					if j+1 < len(runesArr) && runesArr[j+1] != '"' {
						state = 0
					} else {
						state = 99
					}
				} else if state == 99 {
					resultL.WriteRune(runesArr[j])
					state = 1
				}

			} else if state == 1 {
				resultL.WriteRune(runesArr[j])
			}
		}
		resultF.WriteString(resultL.String() + "\n")
	}

	return resultF.String()
}

/*
	Sample code:
	1. +
	2. StringBuildee
*/
func escapeJava(input string) string {
	temp := strings.Split(input, "\n")
	var resultF strings.Builder

	for i := 0; i < len(temp); i++ {
		var state int = 0
		var resultL strings.Builder
		runesArr := []rune(temp[i])
		for j := 0; j < len(runesArr); j++ {
			if runesArr[j] == '"' {
				if state == 0 {
					state = 1
				} else if state == 1 {
					state = 0
				}

			} else if state == 1 && runesArr[j] == '\\' {
				state = 99
			} else if state == 1 {
				resultL.WriteRune(runesArr[j])
			} else if state == 99 {
				switch runesArr[j] {
				case 'n':
				case 'r':
				case 't':
					resultL.WriteRune('\t')
				default:
					resultL.WriteRune(runesArr[j])
				}
				state = 1
			}
		}
		resultF.WriteString(resultL.String() + "\n")
	}

	return resultF.String()
}

func multilineInv(input string, language string) string {
	switch language {
	case "vb":
		return concatVB(input)
	case "java":
		return concatJava(input)
	default:
		fmt.Printf("language not supported.")
		return ""
	}
}

func concatJava(input string) string {
	temp := strings.Split(input, "\n")
	var resultF strings.Builder

	for i := 0; i < len(temp)-1; i++ {
		temp[i] = strings.Replace(temp[i], "\"", "\\\"", -1)
		resultF.WriteString("\"" + temp[i] + " \" +\n")
	}
	resultF.WriteString("\"" + temp[len(temp)-1] + "\"")

	return resultF.String()
}

func concatVB(input string) string {
	temp := strings.Split(input, "\n")
	var resultF strings.Builder

	for i := 0; i < len(temp)-1; i++ {
		temp[i] = strings.Replace(temp[i], "\"", "\"\"", -1)
		resultF.WriteString("\"" + temp[i] + " \" & _\n")
	}
	resultF.WriteString("\"" + temp[len(temp)-1] + "\"")

	return resultF.String()
}

func multilineJs(this js.Value, args []js.Value) interface{} {

	var output = multiline(args[0].String(), args[1].String())

	return output
}

func multilineInvJs(this js.Value, args []js.Value) interface{} {

	var output = multilineInv(args[0].String(), args[1].String())

	return output
}

func main() {
	js.Global().Set("multiline", js.FuncOf(multilineJs))
	js.Global().Set("multilineInv", js.FuncOf(multilineInvJs))
	println("Successfully load ")
	select {}
	//test()
}

func test() {
	//vb multiline
	var vbStyleMulti1 = `test = "select * from haha" &_
	"where haha.a = ""01234'"
	`

	//java multiline
	var javaStyleMulti1 = `"select * from haha\n\ta" +
	"where haha.a = '01234'
	`

	var concat = `select *
	from haha
	where haha.a = '01234'`

	fmt.Println(multiline(vbStyleMulti1, "vb"))
	fmt.Println(multiline(javaStyleMulti1, "java"))
	fmt.Println(multilineInv(concat, "vb"))
	fmt.Println(multilineInv(concat, "java"))
}
