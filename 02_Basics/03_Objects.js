//singelton object
// object.create


const mySym = Symbol("key1")
// object literals
const jsUser = {
    name: "Shubham",
    "full name" : "shubham ratan",
    age: 18,
    city:"hyderabad",
    email:"shubham@google.com",
    isloggedIn: true,
    daysLoggedIn :["monday" , "wednesday"],
    [mySym]: "mykey"
};

//console.log(jsUser.full name)
//console.log(jsUser["full name"])
//console.log(typeof jsUser[mySym])

//jsUser.email = "shuham@microsoft.com"
//Object.freeze(jsUser)
// object freezed so further changes don't applies to it 
//jsUser.email = "shubham@chatgpt.com"
//console.log(jsUser)



jsUser.greeting = function(){
   console.log("hello JS User")
}
jsUser.greetingTwo = function(){
   console.log(`hello JS User , ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())