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

function chai() {
    console.log(this)
}

chai()    // yaha par bahot bahot sari values function global values micro task aate h


// function coffee() {
//     let username = "kaushal"
//     console.log(this.username)      // yaha par undefined aayega kyoki this for current context object me kaam karta h function me nhi
// }


