// Here we will know deeply the object in js , like how js handle object internally

// Object.getOwnPropertyDescriptor()

// console.log(Math.PI);
// Math.PI = 5;

// //after assigning something diffrent from original value
// console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

