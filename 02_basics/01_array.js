const myArr = [0, 1, 2, 4, 5]

// js me resizable hota h aaray and contain mix data types
// js me array-copy operation create shallow copies
// shallow copy object ki woh copy whose properties share the same references

const myarr2 = new Array (7, 6, 3, 4)

// console.log(myArr[1])
// console.log(myarr2[0])

// myArr.push(6)   // myArr me 6 push kiya
// myarr2.push(3)  // 3 pushed
// myarr2.pop() // last element removed

// myArr.unshift(9) // start me push hojayega value
// myArr.shift()  // start se element gayab

// console.log(myArr.includes(9)) // false boolean type
// console.log(myArr.indexOf(4)) //  5 element h 

// console.log(myArr);   // [0, 1, 2, 4, 5]

// const newArr = myArr.join() // now in this case ye arr string hojayega

// console.log(newArr)     // 0,1,2,4,5
// console.log(typeof newArr)  // string 


// slice, splice

console.log( "A", myArr)    //  simple, array print hojayega

const myn1 = myArr.slice(1,3)  //  1 and 2 index value print hoga
console.log(myn1)                
console.log("B", myArr)     //  same original array me no change

const myn2 = myArr.splice(1,3)   //  but splice me 1,2,3 index value print hogi but original array se remove
console.log(myn2)               
console.log("C", myArr)        //  toh yaha par 1, 2, 3 index value nhi aayegi

// slice se original array me change nhi hota
// splice me original array se given index value remove hojati h
