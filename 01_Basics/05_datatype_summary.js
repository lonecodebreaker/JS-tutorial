// primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Non-primitive
// Array, Objects , Functions 

const score  = 100;
const scoreValue = 100.3
const isLoggedIn  = false
const outsideTemprature = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

//must read for interview prepartion (typeof) results for primitive and non primitive datatypes
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


const bigNumber = 12345678909876543245667786567877n
//console.log(typeof bigNumber);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubeName = "shubhamratandotcom "

let anotherName = myYoutubeName
anotherName = "pradeepRatan"
console.log(anotherName);
console.log(myYoutubeName);

let userOne = {
    email:"shubham@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne;
userTwo.email = "usertwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




