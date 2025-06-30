

const myNumbers1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// // lets add 10 to each numbers 
// const newNums = myNumbers.map( (num) => num+10 )
// console.log(newNums);

// // above thing can be done by for-each


//CHANING 
const myNumbers2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const newNums = myNumbers2
                .map( (num) => num*10)
                .map((num) => num+1 )
                .filter( (num) => num>=40)
console.log(newNums);         
 // here second map operation will not take original num instead it will take modified num by previus operation               