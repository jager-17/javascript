const marvel_heros = ["thor" , "ironman", "spiderman"]
const dc_heros = ["batman", "flash", "superman"]

// marvel_heros.push(dc_heros) // ish case me dc heros wali array marvel wali array ke inside aajayegi means array ke ander array not merge

// console.log(marvel_heros)  
// console.log(marvel_heros[3][1]) // flash aayega

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros) // ab actually mege hojayenge ya add honge

const all_new_heros = [...marvel_heros, ...dc_heros] // concat jese hi kaam karega more simplar
// console.log(all_new_heros)

const another_array = [5, 6, 7, [7, 8] , 9, 0, [7, 9, 0, 4,[6, 45, 32]]]  // mixed 

const real_another_array = another_array.flat(Infinity)

// flat solve the problem of mixed you can level by yourself if don't know use infinity

console.log(real_another_array)

console.log(typeof(Array.isArray("kaushal"))) // false
console.log(Array.from("kaushal")) // coverted in array

console.log(Array.from({name : "jager"})) // interesting // {} empty

let score1 = 100
let score2 = 200
let score3 = 500

console.log(Array.of(score1, score2, score3)) // [100, 200, 300]