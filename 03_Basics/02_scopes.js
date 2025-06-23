
{ } // this is called scope when it is with function 

var c = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);  // error as a is not defined 
//console.log(b);  // arror as b is not defined
console.log(c);    // output is 30

let a = 400
if (true) {
    let a = 10   // value of a inside this scope is 10
    console.log("Inner :", a);
    const b = 20
    var c = 30
}

console.log(a); // output is 400 as value of a outside if scope is 400
//console.log(b);
//console.log(c);

// the global scope when using inspect element then console in browser is diffrent from when we see global scope in coding enviroment with help of node.
