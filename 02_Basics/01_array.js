// array

const myArr  = [1,2,3,4,5]
const myHeroes = ["Ironman","Hulk","doctorStrange"]

const myArr2 = new Array(1,2,3,4)

//console.log(myArr[0]);
//console.log(myArr2[0]);

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
//myArr.shift()
//myArr.unshift(1)

//console.log(myArr);

//slice , splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);


const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr);

