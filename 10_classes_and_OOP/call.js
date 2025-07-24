
// call keyword pass the current execution context to the other function in nested function scenario .

function setUserName(username){
      // doing complex DB task
      this.username = username
      console.log("yes I am called");
}

function createUser(username,email,password){
    // setUserName(username) --> Wrong Approach

    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const User1 = new createUser("shubham","shubham@fb.com","123")
console.log(User1);

