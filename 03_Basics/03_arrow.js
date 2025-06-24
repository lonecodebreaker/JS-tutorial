
//this keyword inside object
const user = {
    username : "shubham",
    price: 999 ,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);



//this keyword inside functions 
function coffee(){
    let username = "shubham"
    console.log(this.username);
}
coffee()


//arrow function - how its made 

const minimalist = function(){
    let username = "Shubham"
    console.log(this.username);
    console.log(this);
    
}
minimalist()
 
// converted to arrow function like this 

const minimalist2 = () => {
    let username = "Shubham"
    console.log(this.username);
    console.log(this);
    
}
minimalist()


// working on pure arrow function 

const addTwo = (num1 , num2 ) => {
      return num1 + num2 
}

// implicit return arrow function
const addTwoAgain = ( num1 , num2) => ( num1 + num2 )  
console.log(addTwo(3,5));

// implicitly returning object
const addObject = (num1 , num2 ) => ({username : "shubham"})
console.log(addObject(3,5));


