package main

import (
	"fmt"
	"syscall/js"
)

func reverse(input []string) []string {
	result := make([]string, len(input))
	for i := 0; i < len(input); i++ {
		data := []rune(input[i])
		for j, k := 0, len(data)-1; j < k; j, k = j+1, k-1 {
			temp := data[j]
			data[j] = data[k]
			data[k] = temp
		}
		result[i] = string(data)
	}

	return result
}

func reverseJs(this js.Value, args []js.Value) interface{} {
	var inputArr = make([]string, len(args))

	for i := 0; i < len(inputArr); i++ {
		inputArr[i] = args[i].String()
	}

	var output = reverse(inputArr)

	arr := make([]interface{}, len(output))
	for i := 0; i < len(output); i++ {
		arr[i] = output[i]
	}

	return arr
}

func main() {
	js.Global().Set("reverse", js.FuncOf(reverseJs))
	println("Successfully load reverse string module")
	select {}
}

func test() {
	var input = []string{
		"abc",
		"the quick fox jump over a brown dog",
		"road house",
		"i go to school by bus"}

	var output = reverse(input)

	for i := 0; i < len(output); i++ {
		fmt.Println(output[i])
	}
}
