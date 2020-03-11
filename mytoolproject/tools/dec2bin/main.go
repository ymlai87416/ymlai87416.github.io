package main

import (
	"fmt"
	"strconv"
	"strings"
	"syscall/js"
)

func padZero(input string, padToLength int) string {
	if len(input) >= padToLength {
		return input
	}
	repeat := padToLength - len(input)
	var output = strings.Repeat("0", int(repeat)) + input
	return output
}

func dec2Bin(input []string, sameLength bool) []string {
	var longestLen int = 0
	var result = make([]string, len(input))

	for i := 0; i < len(input); i++ {
		var in, _ = strconv.ParseInt(input[i], 10, 64)
		var out = strconv.FormatInt(in, 2)
		if longestLen < len(out) {
			longestLen = len(out)
		}
		result[i] = out
	}

	if sameLength {
		for i := 0; i < len(result); i++ {
			result[i] = padZero(result[i], longestLen)
		}
	}

	return result
}

func bin2Dec(input []string, sameLength bool) []string {
	var longestLen int = 0
	var result = make([]string, len(input))

	for i := 0; i < len(input); i++ {
		var in, _ = strconv.ParseInt(input[i], 2, 64)
		var out = strconv.FormatInt(in, 10)
		if longestLen < len(out) {
			longestLen = len(out)
		}
		result[i] = out

	}

	if sameLength {
		for i := 0; i < len(result); i++ {
			result[i] = padZero(result[i], longestLen)
		}
	}

	return result
}

func bin2DecJs(this js.Value, args []js.Value) interface{} {
	var inputArr = make([]string, len(args)-1)
	var sameLen = args[len(args)-1].Truthy()

	for i := 0; i < len(inputArr); i++ {
		inputArr[i] = args[i].String()
	}

	var output = bin2Dec(inputArr, sameLen)

	arr := make([]interface{}, len(output))
	for i := 0; i < len(output); i++ {
		arr[i] = output[i]
	}

	return arr
}

func dec2BinJs(this js.Value, args []js.Value) interface{} {
	var inputArr = make([]string, len(args)-1)
	var sameLen = args[len(args)-1].Truthy()

	for i := 0; i < len(inputArr); i++ {
		inputArr[i] = args[i].String()
	}

	arr := make([]interface{}, len(output))
	for i := 0; i < len(output); i++ {
		arr[i] = output[i]
	}

	return arr
}

func main() {
	js.Global().Set("bin2Dec", js.FuncOf(bin2DecJs))
	js.Global().Set("dec2Bin", js.FuncOf(dec2BinJs))
	println("Successfully load ")
	select {}
}

func test() {
	var testDec = []string{
		"1023",
		"1",
		"17",
		"347524",
		"6668872874",
	}

	var testBin = []string{
		"1",
		"1000",
		"1111101010100",
		"10010001111100000",
		"00100001000111111",
	}

	var testResultDec = dec2Bin(testDec, true)

	for i := 0; i < len(testResultDec); i++ {
		fmt.Println(testResultDec[i])
	}

	var testResultBin = bin2Dec(testBin, true)
	for i := 0; i < len(testResultBin); i++ {
		fmt.Println(testResultBin[i])
	}
}
