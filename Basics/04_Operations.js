// 2 ** 3 => powers
let str1 = "hello"
let str2 = " user"

console.log(str1 + str2);

// all the conversions that take place while operations are based on a set of rules
// if a string comes first, everything will be concatenated
// if numbers come first, operations will happen and then concatenation
// after even a single string, all the next ones are concatenated

console.log(+ true); // will convert them into a number and print it
console.log(+ ""); // will treat "" as a boolean, meaning false, then convert it to a number

let n1, n2, n3;
n1 = n2 = n3 = 2 + 2 // works, but is not readable enough
