class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Hello I am ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,subject,password)
    {
        super(username)
        this.subject = subject
        this.password = password
    }

    addCourses(){
        console.log(`Course Added by ${this.username}`);
    }
}

const Shubham = new User("Shubham Ratan")

const David = new Teacher("David Malan", "computer science", "123456")

console.log(David.logMe());
console.log(David.addCourses());

// Do Shubham have access of addCourses method in Teacher class 
console.log(Shubham.addCourses());  // Answer is no so error will be there 

console.log(Shubham === David);   // false 

console.log(David instanceof Teacher);
console.log(David instanceof User);







