
function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

//sayMyName()

//inputs taken during function defintion is called parameter
// number1 and number2 are parameter
//inputs taken during function execution is called arguments
// 3 and null are arguments

// function addTwoNumbers(number1, number2){
//       console.log(number1+number2);
// }  

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("Result is :", result);


function loginUserMessage(username = "sam") {
    // here as if takes only true value so doing !username will completley flip the boolean , username is undefined -> if runs
    // username is valid , it not will be false -> if statemnt not run
    if (!username) {
        console.log("Please Enter a valid username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());



// rest operator application
// practical application problem in shopping cart and solution
function calculateCartPrice(val1 , val2 , ...num1){
    return num1
}
console.log(calculateCartPrice(200 , 400, 500,2000));

const user = {
    username:"Shubham",
    aged : 18
}

//object passed in function
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and age is ${anyObject.age}`);
}

handleObject(user)
// object can be passed directly too
handleObject({
    username : "sam",
    age: 19
})


//array passed in function
const myNewArray = [ 200, 400, 100, 600 ]

function returnSecondvalue(getArray){
     return getArray[1]
}

console.log(returnSecondvalue(myNewArray));
// array can be passed directly too
console.log(returnSecondvalue([200, 400, 100, 600]));

