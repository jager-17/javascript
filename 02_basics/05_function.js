function sayMyName() {
    console.log("K")
    console.log("a")
    console.log("u")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("l")
}

// sayMyName()     // function ko execute

// function addTwoNumber(number1 , number2) {
//     console.log(number1 + number2)
// }

// addTwoNumber(9, 11)        // adding numbers

function addTwoNumber(number1 , number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(7 , 8)
// console.log("Result: ", result)      // jabtak return use nhi karenge can't store value in variable

function loginUserName (username) {
    if(username === undefined){        // you can also write if(!username)
        console.log("please enter a username")
    }  
    
    return `${username} just logged in`
    
}

// console.log(loginUserName("Kaushal"))    // return k baad print karana hota then only you can see output

// console.log(loginUserName()) // if kuch na pass then undefined if "" esa ho then just logged in koi username nhi aayega


function calculateCartPrice(...num1) {     // rest operator (also spread but on other )   
    return num1
}

console.log(calculateCartPrice(200, 5000, 700, 8000)) // array me add hoga

// function calculateCartPrice( val1, val2, ...num1) {     // rest operator (also spread but on other )   
//     return num1
// }    ab [200, 5000] val1 and val2 me chale jayega and [700, 8000] array me bach jayega

const user = {
    username : "kaushal",
    price : "700"
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}     // handle kar rhe upar object ko function k sath

// handleObject(user)  //username is kaushal and price is 700

handleObject({
    username: "sam",    // direct bhi kar sakte h
    price: "399"
})        // username is sam and price is 399


const myNewArray = [500, 500, 300, 400]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))  // array ko function ke sath

console.log(returnSecondValue([500, 400, 300, 100]))
