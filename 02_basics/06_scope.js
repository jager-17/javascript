//var c = 300
let a = 300        // global scope iski value bahar inner scope me use ho sakti h

if (true) {
    let a = 10
    const b = 20
    //var c = 30
    // console.log("INNER: ", a);    // 10    // block scope iski value bahar nhi jani chaiye
    
}

// we don't use var kyoki iski value bahar aajati h. block scope se

// console.log(a);   // 300
// console.log(b);
// console.log(c);   

// global scope broswer me ala hota h and node environment me alag

function one () {
    const username = "Kaushal"

    function two(){
        const website = "jag.com"
        console.log(username)
    }

    // console.log(website) // error reason block scope ke bahar nhi aa sakta
    two()    // yaha par ye two() console.log(username) ko print karega
}
one()    // one two ko kar rha h

// abhi k liye closure means ki inside function call variable of outside function

if (true) {
    const username = "kaushal"
    if(username === "kaushal") {
        const website = " jag.com"
        console.log(username + website)
    }
}


// +++++++++++++++++++ interesting ++++++++++++++


console.log(addone(5))     // only function me ye kaam karega no error function declare se pehle you write this here
function addone(num) {
    return num + 1
}                                            // normal only function




// console.log(addtwo(5))      // but yaha par  ye error dega kyoki ish function ko varibale me hold kiya h
const addtwo = function(num) {               // also function but it is called an expression
    return num + 2
}



