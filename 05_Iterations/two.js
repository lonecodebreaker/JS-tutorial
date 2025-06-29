// //Syntax 
// while (condition) {
    
// }

let index  = 0
while(index <= 10){
    console.log(`value of index is ${index}`);
    index += 2
}

let myArray = ["flash" , "batman","superman"]
let arr = 0
while (arr<myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr += 1
}

// do while loop
// it basically have importance where you have to atleast run loop once without condition checking.
// do {
    
// } while (condition);

let score  = 11
do {
    console.log(`score is ${score}`);
    score++;
} while (score <= 10);