// const coding = ["js", "ruby", "java", "python"]


// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })

// console.log(values);     // koi value return nhi karta foreach loop


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)

// console.log(newNums);    // filter use karte h return k liye 
                         // if curly braces use kare function me then don't forget to use return 

const newNums = []

myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

console.log(newNums)         // way to use forEach for print


const books = [ 
    { title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
    { title: 'Book two', genre: 'Non-Fiction', publish: 1977, edition: 2008},
    { title: 'Book three', genre: 'Fiction', publish: 1988, edition: 2007},
    { title: 'Book four', genre: 'Non-Fiction', publish: 1991, edition: 1998},
    { title: 'Book five', genre: 'History', publish: 1961, edition: 2006},
    { title: 'Book six', genre: 'Science', publish: 1999, edition: 2003},
    { title: 'Book seven', genre: 'Non-Fiction', publish: 2004, edition: 2004},
    { title: 'Book eight', genre: 'Fiction', publish: 2011, edition: 2020},
    { title: 'Book nine', genre: 'History', publish: 1973, edition: 1988},
    { title: 'Book ten', genre: 'Science', publish: 1971, edition: 19772},
];

const userBooks = books.filter((bk) =>  bk.publish >= 1988 || bk.genre === 'Science' )
console.log(userBooks)



