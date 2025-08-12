// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6, 7]

for (const num of arr) {
    console.log(num);    
}

const greetings = "hello world"
for (const greet of greetings) {
    if(greet == " ") {
        break
    }
    console.log(`each char is ${greet}`);
}       // space ke baad print nhi hoga


// Maps

const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

// output:
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States Of America',
//   'Fr' => 'France'
// }          // unique value hi rakhta h and jis order me tumne diya ushi order me rhta h


for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// IN :- India
// USA :- United States Of America
// Fr :- France

// const myObject = {
//     'game1': 'NFS'
//     'game2': 'gta5'
// }         // ishme iterable nhi ush for of format se


// maps iterable nhi h so forin loop can't use




