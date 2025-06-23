// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "john"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email : "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname : "Shubham",
            lastname : "Singh"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

//const obj3 = { obj1 , obj2 }
//const obj3 = Object.assign({},obj1 , obj2 )
const obj3 = {...obj1,...obj2}
// console.log(obj1);
// console.log(obj3);

const users = [
    {
        id: "1" ,
        email: "s@gmail.com" 
    },
    {
         id: "2" ,
        email: "r@gmail.com" 
    }
]

// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLogged'));


// object destructuring and JSON api

const course = {
    courseName : "js learning",
    price: "999",
    courseInstructor: "myself"
}

//course.courseInstructor

const {courseInstructor : masterji } = course
console.log(masterji);

//JSON API data when fetched
// {
//     "courseName" : "js tutorial",
//     "price": "free",
//     "courseInstructor":"Shubham"

// }

// [
//     {},
//     {},
//     {}
// ]

console.log("just a commit");
console.log();
console.log("codespace ditched by me ");
console.log("again checking repo");