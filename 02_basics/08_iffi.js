// Immediately Invoked Function Expression (IIFE)

// function chai () {
//     console.log(`DB connected`)
// } 

// chai()

(function chai () {                // named iffi
    console.log(`DB connected`)
})();                         /* yaha par direct yaa immediate invoke ho rha h 
                                iifi means jo function immediate execute hojaye 
                                but maily ye bhi ki global scope ke variable se pollution hota h 
                                ush global scope ke pollution ko remove karne ke liye iifi use kiya */

( () => (                              // arrow function ke sath iffi
    console.log(`DB not connected`)
) )();                            

// remember pehle iffi function use karne ke baad semicolon(;) lagana jaruri h end me
// warna second iffi function run nhi hoga kyoki usko pta hi nhi chala ki rokna kaha h

( (name) => (                              // arrow function ke sath iffi
    console.log(`DB not connected ${name}`)
) )('kaushal')