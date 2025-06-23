
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

