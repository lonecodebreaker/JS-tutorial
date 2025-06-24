// function mongo(){
//     console.log(`DB connected`);
    
// }
// mongo()

// // now this is working quickly but sometimes functions get polluted by global scope 
// // thats why we write IIFE to execute that task quickly , like connecting to database

// //  now to make it IIFE just put function inside of ( ) and execute it like this 
// //( fn)() - as know earlier in implicitly invoked function , just by putting function return value inside ( ) , parantheses creates a block

// (function mongu(){
//     console.log(`DB connected`);
    
// })();

// //checking on arrow function
// (() => {
//     console.log(`DB connected twice`);
// })()

// // checking for another normal function as arrow function not works
// (function mongu3(){
//     console.log(`DB connected thrice`);
// })()

// putting parameter and doing string interpolation too

((name) => {
    console.log(`${name},DB connected twice`);
})("Shubham")

