//console.log("2" > 1);  // yaha par ye string ko number lega
//console.log("02" > 1)  // two different data type comparision

console.log(null > 0)  // false  
console.log(null == 0) // false 
console.log(null >= 0) // True kyoki ish case me ye null ko number bana dega


console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false

// we usually dont do such compairisons 

// ===   these check strictly 

console.log("2" === 2) // false

// in this case it should be true but 
// it will be false because it also checks datatype


