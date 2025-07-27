
class User{
    constructor(username, email , password ){
         this.username = username;
         this.email = email;
         this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeuserName(){
        return `${this.username.toUpperCase()}`
    }
}

const User1 = new User("Shubham","shubam@fb.com","123")
console.log(User1.encryptPassword());
console.log(User1.changeuserName());


// behind the scene work (without class keyword)

function User2(username, email , password ){
         this.username = username;
         this.email = email;
         this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeuserName = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("Richard","richard@fb.com","9999")
console.log(tea.encryptPassword());
console.log(tea.changeuserName());


