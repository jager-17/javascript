// singleton. literals se singlton nhi bnata , constructor se ha
// object.create // constructor


// object literals
const mysym = Symbol()

const JsUser = {
    name : "Kaushal",
    email : "kaushal@google.com",
    [mysym] : "mykey1",  // symbol ko ese hi represent karte h
    isLoggedIn: false,
    lastloginDays: ["Monday", "saturday"]
}

// console.log(JsUser.email)  // one way
// console.log(JsUser["email"]) // another way more practical
// console.log(JsUser[mysym])

JsUser.email = "jag@chatgpt.com" // email changed
// Object.freeze(JsUser)   // changes freeze hojayenge iske baad

// JsUser.email = "ts@google.com" // no change

// console.log(JsUser)

JsUser.greeting = function() {
    console.log("hello Js user")
}

JsUser.greetingtwo = function(){
    console.log(`hello user, ${this.name}`)   // this. is used to access
}

console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())