let score = "33abc"

console.log(typeof score); // string

let valueInNumber = Number(score)  // string changed to number
console.log(typeof valueInNumber) // number
console.log(valueInNumber);  // NaN not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

console.log(typeof isLoggedIn) //Number

let theChangeIn = Boolean(isLoggedIn) //conversion
console.log(typeof theChangeIn)    // boolean  // if empty it is false and any input it is true
console.log(theChangeIn)       // true
