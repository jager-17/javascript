let i  = 0
while (i <= 10) {
    console.log(`value of i is ${i}`);
    i = i + 2
}         // 0 2 4 6 8 10


let myArray = ["thor", "captain", "ironman"]

let arr = 0
while (arr <=  myArray.length) {
    console.log(`value is ${myArray[arr]}`)
    arr = arr + 1 
}
/* value is thor
value is captain
value is ironman
value is undefined */


// let score = 1

// do {
//     console.log(`value of score is ${score}`)
//     score++
// } while (score <= 10);

let score = 11

do {
    console.log(`value of score is ${score}`)
    score++
} while (score <= 10);        // output 11 aayega ekk baar baad me nhi hoga reason print pehle hota h


