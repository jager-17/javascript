const user = {
    username : "kaushal",
    price : "899",
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)  // this keyword cuurent context (not fixed) ko reference karta current cope me value access ke liye
        console.log(this);  // current context ki baat karega jo scope me h
    }
}

// user.welcomeMessage()
// user.username = "Jag"
// user.welcomeMessage()

console.log(this)    //  yaha par ye empty object h node environment 


// Browser me jo global object  hota h woh window object hota 

// function chai() {
//     console.log(this)
// }

//chai()    // yaha par bahot bahot sari values function global values micro task aate h


// function coffee() {
//     let username = "kaushal"
//     console.log(this.username)      // yaha par undefined aayega kyoki this for current context object me kaam karta h function me nhi
// }

const user2 = {
    userfullname : "kaushal",      // cannot use variable type

    coffee : function() {
        
        console.log(this.userfullname)
        console.log(this)      
    } 
}
// user2.coffee()

// const chai = function () {
//     let username = "kaushal"
//     console.log(this.username)        // undefined aayega
// }

const chai = () => {               // function keyword hata do and arrow laga do now its arrow function
    let username = "kaushal"
    console.log(this.username);      // undefined aayega
    console.log(this)
}
// chai()

// const addTwo = (num1, num2) => {         // explicit return need curly braces and return use
//     return num1 + num2
// }

// console.log(addTwo(3,4))     // 7      // normal arrow function

// const addTwo = (num1, num2) => num1 + num2      // ye implicit h yaha curly braces ki need nhi hoti {}  and na return ki
//const addTwo = (num1, num2) => (num1 + num2)   // you can also use this way  
//console.log(addTwo(3, 4))    // 7          // implicit return me , curly braces nhi lgate and thus no return use

const addTwo = (num1, num2) => ({username: "kaushal"})    // object ko use karna so you have to use parethesis () and you can add curly braces for object


console.log(addTwo(3,4))
