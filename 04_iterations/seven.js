const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => num + 20)
// const newNums = myNumbers.map( (num) => { return num + 20})
// console.log(newNums);

/*  output:

[
  21, 22, 23, 24, 25,
  26, 27, 28, 29, 30
] */

// ************ chainig

const newNums = myNumbers
               .map((num) => num * 10)
               .map ((num) => num + 1)     // first condition me jo output value aayegi ush value ko lega ye
               .filter((num) => num >= 40) // greater then 40 and 40 will only return
            
console.log(newNums);
               
  