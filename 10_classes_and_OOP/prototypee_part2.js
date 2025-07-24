let myName = "Shubham        "
let myChannelName = "lonecodebreaker         "

// //console.log(myName.trim.length) --. for one task only then again for another task

// console.log(myName.trueLength());  // Our TASK
// // task here is to create a method that prints the true Length of string with ignoring white space character without using trim property
// // It is not convinent to use trim method every time a string come.

// let myHeroes = [ "thor","Spiderman" ]

// let heroPower = {
//     thor : "hammer",
//     spiderman : "sling",

//     getSpidermanPower : function(){
//        console.log(`Spidy Power is ${this.spiderman}`);
//     }
// }

// Array.prototype.heyShubham = function(){
//     console.log("Shubham says hey ")
// }

// Object.prototype.Shubham = function(){
//     console.log(" Shubham is everywhere ");
// }
// heroPower.Shubham() 

// heroPower.heyShubham() // checking if Object instance has taken the function added to array prototype from Object.prototype
// // Error as output
// myHeroes.heyShubham()  // it has obviosuly taken the function heytShubham in prototye of array
// // Runs the function gracefully

// // we have this function in prototype of heroPower or not --> Answer is No
// // So can we create this , yes --> By injecting to prototype of heroPower 
// // But what if I add this Shubham() method in Object Prototype , then it will be availbale to all Object that inherit from Object prototype


// //older time inheritance 
// const User =  {
//     username : "robert",
//     email : "robert@google.com"
// }
// const Teacher = {
//     makeVideo : true
// }
// const TeachingSupport  = {
//     isAvailable : false
// }
// const TAsupport = {
//     makeAssignments : " Js Assignments ",
//     fullTime : true,
//     __proto__ : TeachingSupport
// }

// Teacher.__proto__ = User

// //modern time syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)

// now our old task 
String.prototype.trueLength = function(){
     console.log(`${this}`);
     console.log(`True length is ${this.trim().length}`);
}
myName.trueLength()
"AeroPlane".trueLength()
"Ship".trueLength()