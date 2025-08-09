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

for (let i = 0; i < 10; i++) {
     console.log(`outer loop value: ${i}`);
     for (let j = 0; j < 10; j++) {
          // console.log(`inner loop value: ${j} and inner loop ${i}`);
          console.log(i + '*' + j + '=' + i*j);  // table 0*1 = 0 ese
          
     }
} 

// outer loop 0 par aayega fir inner loop 10 baar chalega fir outer loop 1 par aayega fir wapis inner loop 10 baar chalega


