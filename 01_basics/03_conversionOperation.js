let score = "33abc"

//console.log(typeof score); // string

let valueInNumber = Number(score)  // string changed to number
//console.log(typeof valueInNumber) // number
//console.log(valueInNumber);  // NaN not a number

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = 1

//console.log(typeof isLoggedIn) //Number

let theChangeIn = Boolean(isLoggedIn) //conversion
//console.log(typeof theChangeIn)    // boolean  // if empty it is false and any input it is true
//console.log(theChangeIn)       // true


// *********************** Operations *****************

let value = 3
let negValue = -value
console.log(negValue)

let str1 = "hello"
let str2 = " kaushal"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);    // string me add hoha 12
console.log(1 + "2");   // string me add hoga 22
console.log("1" + 2 + 2);  // string me add hoga 122
console.log(1 + 2 + "2")  // first number add hoga 1+2 = 3 and then 2 as string 32

console.log(((3+4) * 5) % 3)  // always use these type of code parethesis

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
