console.log(null == 0); // False null = 0    Working as a number
console.log(null > 0);  // False null = NaN  Working as an illegal conversion number
// because == has some weird ways of checking and all
console.log(null >= 0); // True  null = 0    Working as a number

console.log(undefined >= 0); // false
console.log(undefined == 0); // false
console.log(undefined > 0);  // false

// === -> strict checking, checks the data type as well
console.log("02" == 0); // Gives a Boolean answer, because of some weird type conversions
console.log("02" === 0);// Gives false as the data types dont match

