// const tinderUser = newObject() // singleton
const tinderUser = {}   // non singleton

tinderUser.id = "123abc"
tinderUser.name = "Bunty"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: { 
            firstname : "kaushal",
            lastname : "jangir"

        }
    }
}
 
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "e", 4: "d"}
const obj4 = {5: "c", 6: "f"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)    // combine sab


const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3)


const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 2,
        email: "l@gmail.com"
    },
    {
        id: 3,
        email: "m@gmail.com"
    },
]
// databse se jab value atti h tab ye format hota h

users[1].email

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))     // [ 'id', 'name', 'isLoggedIn' ] - string me aajayega ye
// console.log(Object.values(tinderUser))   // [ '123abc', 'Bunty', false ] same for values
// //console.log(Object.values(tinderUser))   // [ '123abc', 'Bunty', false ] same for values
// console.log(Object.entries(tinderUser))   // 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))   // true property h 


 const course = {
    coursename : "Js",
    courseprice: "999",
    courseinstructor: "hitesh"
 }

 // course.instructor

 // const {courseinstructor} = course   // uou can access these way also
 // console.log(courseinstructor)

 const {courseinstructor: instructor} = course     // destructuring   to extract properties in a variable
 console.log(instructor)

//  {
//     "name" : "kaushal",
//     "from" : "indore",          // JSON format
//     "now" : "jaipur"
//  }

