// reduce (accumlator and more)

const myNums = [1, 2, 3, 4, 5]

const initialValue = 0

const newNums = myNums.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 
            //console.log(`acc: ${accumulator} and currentValue : ${cuurentValue} `)
            initialValue)
            
console.log(newNums);

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
    
}, 0) // another way use function

console.log(myTotal)


/* yaha par accumulator starting me initialvalue lega jo ki 0 h and 
then accumulator + cuurentvalue (array me current value abhi jese 1 uske baad jo value h)
then unka jo sum hoga woh accumulator me chale jayega 
jese ki 0 + 1 = 1
1+ 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15  , this is how reduce works*/