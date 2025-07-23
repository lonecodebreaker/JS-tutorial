// const user =  {
//     userName : "Shubham",
//     logINCount : 8,
//     isloggedIn : true,
//     getUserDetails : function(){ //console.log("Got user Details from Database") 
//                //console.log(`username is ${this.userName}`);
//                console.log(this)
//         }
// }

// console.log(user.getUserDetails());

// // In OOP language , classes is similar to this object literal , user


// // Overriding issue when new is not used in making of instance
// function User(userName , logINCount , isloggedIn){
//     this.userName = userName
//     this.logINCount = logINCount
//     this.isloggedIn = isloggedIn

//     return this
// }
// const userOne = User("Humpty",4,true)
// const userTwo = User("Dumpty",5,true)
// console.log(userOne)


function User(userName , logINCount , isloggedIn){
    this.userName = userName
    this.logINCount = logINCount
    this.isloggedIn = isloggedIn

    return this
}
const userOne = new User("Humpty",4,true)
const userTwo = new User("Dumpty",5,true)
//console.log(userOne);
console.log(userOne.constructor);

