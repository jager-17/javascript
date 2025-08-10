// for

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// pehle value and conditon check hogi fir execute hogi fir increment hokar dubara aayegi
// 0 1 2 3 4 5 6 7 8 9



// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// console.log(element)    // ye bahar execute nhi hoga scope k

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if (element == 7) {
//         console.log("thala for a reason")
//     }
//     console.log(element);
// }    

/* output  0
1
2
3
4
5
6
thala for a reason
7
8
9 */

// for (let i = 0; i < 10; i++) {
//      console.log(`outer loop value: ${i}`);
//      for (let j = 0; j < 10; j++) {
//           // console.log(`inner loop value: ${j} and inner loop ${i}`);
//           console.log(i + '*' + j + '=' + i*j);  // table 0*1 = 0 ese
          
//      }
// } 

// outer loop 0 par aayega fir inner loop 10 baar chalega fir outer loop 1 par aayega fir wapis inner loop 10 baar chalega

// let myArray = ["flash", "batman", "thor"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//      const element = myArray[index];
//      console.log(element)
     
// }    

/* flash
batman
thor */

// break and continue

for (let i = 1; i <= 20; i++) {
     if (i == 5) {
          console.log('detected 5');
          break                               // 4 tak print hoga bas
     }
     console.log(`value of i is ${i}`);
}



for (let i = 1; i <= 20; i++) {
     if (i == 5) {
          console.log('detected 5');
          continue                               // sab print hoga 5 k alawa
     }
     console.log(`value of i is ${i}`);
}

