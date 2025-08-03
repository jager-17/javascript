let myDate = new Date()
// console.log(myDate.toString()) //Sun Aug 03 2025 06:35:57 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Sun Aug 03 2025
// console.log(myDate.toISOString())  //2025-08-03T06:35:57.751Z
// console.log(myDate.toJSON()) // 2025-08-03T06:35:57.751Z
// console.log(myDate.toLocaleTimeString()) //6:35:57 AM
// console.log(myDate.toLocaleString())  //8/3/2025, 6:39:54 AM
// console.log(myDate.toTimeString())  // 06:39:54 GMT+0000 (Coordinated Universal Time)

console.log(typeof myDate)  // object

// let myCreatedDate = new Date(2023, 0, 23)  // month 0 se start hota js me
// let myCreatedDate = new Date("2023-01-14") // but if aap khud choose kar rhe ho format then you should write 1
let myCreatedDate = new Date(2023, 0, 23, 5, 45) // date and time
// console.log(myCreatedDate.tolocalString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))

console.log(myCreatedDate.getMonth())

let newDate = new Date("2025-08-02")
console.log(newDate);
console.log(newDate.getMonth() + 1)

console.log(newDate.toLocaleDateString('default', {
    weekday: "long"
}))