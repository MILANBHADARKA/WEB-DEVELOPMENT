class User {
    constructor(username) {
        this.username = username;
    }

    logme(){
        console.log(`Hello ${this.username}`);  
    }
}


class Teacher extends User {        //now teacher class will have all the properties of the user class
    constructor(username, subject){
        super(username);   //super is used to call the constructor of the parent class
        this.subject = subject;
    }

    addCourse(course){
        console.log(`${this.username} is now teaching ${course}`);
    }
}



const user1 = new User("Chai")
console.log(user1);
user1.logme();



const teacher1 = new Teacher("Milan", "Javascript")
console.log(teacher1);
teacher1.addCourse("Python");
teacher1.logme();       //this will call the logme method of the parent class   
//this is how we can use inheritance in javascript



console.log(teacher1 instanceof User);      //this will return true
console.log(user1 instanceof Teacher);      //this will return false
console.log(teacher1 === user1);            //this will return false

