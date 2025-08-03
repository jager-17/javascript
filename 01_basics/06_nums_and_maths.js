const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(2))  // 100.00 to fix decimal value

const otherName = 123.78344

// console.log(otherName.toPrecision(4))  // precision based on your given input value


const hundreds = 10000000
// console.log(hundreds.toLocaleString())  // 10,000,000  by default US standards

// console.log(hundreds.toLocaleString('en-IN')) // 1,00,00,000 now its indian style

// +++++++++++++++++++++++ maths ++++++++++++++++++++

// console.log(Math);  // an object which have lots of properties (methods)
// console.log(Math.abs(-4)); //absolute value -neg to postive , but if positive no change 
// console.log(Math.round(3.49)) // round the value
// console.log(Math.ceil(4.2)) // ceil means top 4.2 should be 4 but (ceil top value provide karta h output : 5)
// console.log(Math.floor(4.9)) // niche ki wale = 4
// console.log(Math.max(6, 7, 8, 9, 3)) // 9

// console.log(Math.random())  // always balue between 0-1
// console.log((Math.random()*10) + 1) // you can adjust random value between 

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

// yaha par max and min value define karoge taki range bta sako
// math.floor to avoid whole number
// (max - min + 1) tumko 0 to 5 ke bich value dega 
// so last me + min karenge so 1 to 6 ke bich value mile


