const name = "kaushal"  // string declare
const repoCount = 6

// console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ja.g-Psyd.uck-uig')  // string declare // more functionality
                                    // object choose karte h
console.log(gameName[0])     // key value pair
console.log(gameName.__proto__) //proto

console.log(gameName.length)  // to check length
// console.log(gameName.endsWith())
// console.log(gameName.lastIndexOf());
// console.log(gameName.toUpperCase())
console.log(gameName.charAt('2'))  // g to check at place which char
console.log(gameName.indexOf('a'))  // g to check at place which char

const newString = gameName.substring(0, 5)
console.log(newString);      // 0 1 2 3 4   ki string tak print kara dega


const anotherString = gameName.slice(-2, 4)
console.log(anotherString);  // ishme negative value  bhi le sakte h 

const newStringOne = "  kj   "
console.log(newStringOne)   // space ke sath output aayega
console.log(newStringOne.trim());  // spaces ko trim kardega cut

const url = "https//kaushaltwitter.147opd//room34"

console.log(url.replace('opd' , 'id'))  // replace kardega

console.log(url.includes('kaushal'))  // check karega url me it is there or not

console.log(gameName.split('.')) // ye string ko array me split kardega based on your given seperator

// kuch bhi de sakte ho  - , . , = ....