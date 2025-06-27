// //If statement 

// Syntax
// if(true)
// {
//     // scope between curly braces
// } 

// const isLoggedIn = true
// if(isLoggedIn){
//      // this statement will run
// }

// //Operators in JavaScript
// // < , > , <= , >= , == , != , === ( strict equal = triple eqaul also checks type with variable value)
// // !== it checks for the sign in two varible whether equal or not

// if(2 === "2") {
//     console.log("executed");
// }

// // need of else statement
// const temprature = 41
// if(temprature === 40 ){
//     console.log("less than 50 ");
// } else {
//     console.log(" temprature is greater than 50 ");
// }


// // issue of block scope in if statement 

// const score = 200
// if(score > 100)
// {
//     let power = " fly"
//     console.log(`User Power : ${power}`);
// }
// console.log(`User Power : ${power}`);

// // Short hand Notation
// const balance = 1000

// //if (balance > 500 ) console.log("above 500"), console.log("well done");

// // nested if else statement

// if(balance < 500)
// {
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("greater than 900 ");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedFromEmail = true
if(userLoggedIn && debitCard && 2==3)
{
    console.log("allow to but course");
}
if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("user logged in");
}