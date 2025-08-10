const coding = ["js", "ruby", "java", "python"]

// coding.forEach(function (val) {       // callback function h toh naam nhi dete
//     console.log(val);
// })


// coding.forEach((item)=> {
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }                                          // ways to use
// coding.forEach(printMe)    

 
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

/*  js 0 [ 'js', 'ruby', 'java', 'python' ]
ruby 1 [ 'js', 'ruby', 'java', 'python' ]
java 2 [ 'js', 'ruby', 'java', 'python' ]
python 3 [ 'js', 'ruby', 'java', 'python' ]  */


const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },

]

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageFileName);
})

/*  javascript js
python py
java java  */