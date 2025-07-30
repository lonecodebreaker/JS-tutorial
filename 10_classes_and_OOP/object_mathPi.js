// Here we will know deeply the object in js , like how js handle object internally

Object.getOwnPropertyDescriptor()

console.log(Math.PI);
Math.PI = 5;

//after assigning something diffrent from original value
console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);


// Object created through factory function
const myNewObj = Object.create(null)

// Object Created directly
const User = {
   username : "Shubham",
   age : 26,
   isLoggedIn : true,
   work : function(){
    console.log("user is working ");
   }
}

console.log(User);
// getting the use of property descriptor in user defined property 

console.log(Object.getOwnPropertyDescriptor(User,"username"));

//looping in Object
for (let [key,value] of Object.entries(User)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}

// stooping looping in a property of Object
Object.defineProperty(User , "username" , {
    writable : false ,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(User,"username"));

// Now if object properties got looped , username will not be there .



