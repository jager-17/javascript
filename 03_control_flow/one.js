// if

// if (true) {
                        //eg
// }

const isUserloggedIn = true

//if (isUserloggedIn) {
//}

// < , > , <= , >=, ==, !=, ===

if (3 != 2) {
    console.log("executed")
}

const temeperature = 41

// if (temeperature <= 50) {
//     console.log("less than 50")
// }
// console.log("temperature is greater than 50")      // print hoga reason iska if condition se koi nata nhi


if (temeperature <= 50) {
    console.log("less than 50")
} else {
    console.log("temperature is greater than 50")     // now it's conditional ye nhi hoga
}

const score = 200

if (score > 100) {
    const power = "fly"
    console.log(`user power: ${power}`);  // user power : fly
}
// console.log(`user power: ${power}`); // ye print nhi hoga out of scope

const balance =  750 

if (balance < 500) {
    console.log("less then 500")
} else if ( balance < 750 ) {
    console.log("less then 750") 
} else if ( balance < 1000 ) {
    console.log("less then 1000")
} else {
    console.log("less then 1200")
}    