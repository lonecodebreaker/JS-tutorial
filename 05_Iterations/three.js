// All loop below are more array specific 
// // common scenario is that more often we get array of string , array of objects where we just get into each object then access each object inside with dot notation
// // ["" , "" , ""] and [{} , {} , {}]

// //1. for-of loop

// // on array 
const arr = [1, 2, 3, 4, 5 ]

for (const num of arr) {
    console.log(num);
}

// on string
const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}


//Maps
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map()

map.set('in', "india")
map.set('usa',"america")
map.set('fr',"france")
map.set('in', "india")

//console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-' , value);
}

// for object 
const myObject = {
    game1: 'nfs',
    game2: 'spiderman'
}

for (const [key,value] of myObject) {
    console.log(key, ':-' , value);
}
// output here is error - myObject is not iterable
