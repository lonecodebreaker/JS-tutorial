
class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Hello I am ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const Mark = new User("Mark Henry")
//console.log(Mark.createId());  // Error due to static --> TypeError: Mark.createId is not a function


class Teacher extends User {
    constructor(username,subject)
    {
        super(username)
        this.subject = subject
    }

    addCourses(){
        console.log(`Course Added by ${this.username}`);
    }
}

const Elon = new Teacher("Elon Musk","Space travel")
Elon.logMe();

// Child class can also not acess the static variable like the instance of parent class 
console.log(Elon.createId());   // Error due to static --> TypeError: Elon.createId is not a function




