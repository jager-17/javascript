// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
// primitive dataype call by value hota h 
// means ishme copy me changes hote h and usko hi provide kiya jata h


// const score = 100
// const scoreValue = 100.3

// const isLoogedIn = false
// const outsideTemp = null

const id = Symbol('123') // unique
const anotherId = Symbol('123') // unique

console.log(id == anotherId) // false as both are unique id's

const BigIntEg = 454788448411644n // big int use n at the last

// javascript me datatype define karne ki need nhi hoti
// hence javascript is dynamically typed not statically 



// Reference datatypes  ( non primitive)
// memory me direct space allocate hota h

// Arrays, Objects, Functions


const avengers = ["thor", "steve" , "Rdj"]  // array

let myObj = {
   name : "kaushal",
   age: 20,
}                      // object

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof BigIntEg)  // undefined aayega
// console.log(typeof outsideTemp)  // object

// undefined = undefined
// null = object
// Boolean = boolean
// Number = number
// String = string
// Object =  object
// Object = function


// +++++++++++++ memory +++++++++++++++++++++


// Stack (primitive), Heap (non-primitive)

let one = "Kaushal"

let two = one
two = "Jag" 

console.log(one) // kaushal aayega change nhi hoga yaha
console.log(two) // yaha par copy mila and value change hua toh Jag

let userOne = {
    email: "user@google.com"
}

let userTwo = userOne

userTwo.email = "jag@goole.com"

console.log(userOne)   // jag@goole.com
console.log(userTwo)   // jag@google.com

// ish case me value dono scenario me cahnge hojayegi
// reason ye reference type h toh copyu nhi milta
