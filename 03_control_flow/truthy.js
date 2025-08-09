const userEmail = []

if (userEmail) {      // array h isliye print hoga
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values ******************

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values ******************
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// false == 0 => true , false == '' => true


// nullish Colescing Operator (??) : null undefined

let val1;
//  val1 = 5 ?? 10      // 5 print hoga
//  val1 = null ?? 10    // 10 print hoga
//  val1 = undefined ?? 15   // 15 print hoga


// Terniary Operator

// condition ? true : false

const iceTeaaPrice = 100
iceTeaaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

// more than 80 

