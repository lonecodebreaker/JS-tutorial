
// Here we will explore in old times through properties getters and setters were defined 

function User(email, password){
    this._email = email
    this._password = password

    // here in method , this refers to the current context , so we have to provide ourown this to give it our own context so that it can 
    // hold the current context not the global context it have 

    Object.defineProperty(this,'email', {
        get : function(){ return this._email.toUpperCase()},
        set : function(value){ this._email = value}
    })
    Object.defineProperty(this,'password', {
        get : function(){ return this._password.toUpperCase()},
        set : function(value){ this._password = value}
    })
}

const Shubham =  new User("Shubham@microsoft.com","abcdef")
console.log(Shubham.email);
console.log(Shubham.password);

