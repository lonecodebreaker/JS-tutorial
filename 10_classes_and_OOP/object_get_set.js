
// here is object based we have to take hardcoded value as here its neccessary to do so , if not object cannot be created 
const User = {
      _email : "s@google.com",
      _password : "abcdef",

      get email(){
          return this._email.toUpperCase()
      },

      set email(value){
         this._email = value
      }
}

// here we are using factory function that is initially empty ,we have to pass our object then through its reference it will create a object 
const Mark = Object.create(User)
console.log(Mark.email);
