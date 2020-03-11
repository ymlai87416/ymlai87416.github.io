package main

import (
	"fmt"
	"strconv"
)

func dec2Bin(input []string, length int, sameLength bool) []string {
	var longestLen int = 0
	var result = make([]string, length)

	for i := 0; i < length; i++ {
		var in, _ = strconv.ParseInt(input[i], 10, 64)
		var out = strconv.FormatInt(in, 2)
		if longestLen < len(out) {
			longestLen = len(out)
		}
		result[i] = out
	}

	var fmtString = "%0" + strconv.Itoa(longestLen) + "d"
	for i := 0; i < length; i++ {
		result[i] = fmt.Sprintf(fmtString, result[i])
	}

	return result
}

func bin2Dec(input []string, length int, sameLength bool) []string {
	var longestLen int = 0
	var result = make([]string, length)

	for i := 0; i < length; i++ {
		var in, _ = strconv.ParseInt(input[i], 2, 64)
		var out = strconv.FormatInt(in, 10)
		if longestLen < len(out) {
			longestLen = len(out)
		}
		result[i] = out

	}

	var fmtString = "%0" + strconv.Itoa(longestLen) + "d"
	for i := 1; i < length; i++ {
		result[i] = fmt.Sprintf(fmtString, result[i])
	}

	return result
}

func main() {

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

	var testResultDec = dec2Bin(testDec, len(testDec), true)

	for i := 0; i < len(testResultDec); i++ {
		fmt.Println(testResultDec[i])
	}

	var testResultBin = bin2Dec(testBin, len(testBin), true)
	for i := 0; i < len(testResultBin); i++ {
		fmt.Println(testResultBin[i])
	}
}
