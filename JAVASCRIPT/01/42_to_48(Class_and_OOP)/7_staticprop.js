class User {
    constructor(username) {
        this.username = username;
    }

    logme(){
        console.log(`Hello ${this.username}`);  
    }

    static createID(){       
        return `123`
    }
}

const Milan = new User("Milan")
Milan.logme();
// console.log(Milan.createID());      //this will throw an error because createID is a static method


class Teacher extends User {     
    constructor(username, subject){
        super(username);   
        this.subject = subject;
    }

}

const teacher1 = new Teacher("Milan", "Javascript")
teacher1.logme();
// console.log(teacher1.createID())    //this will throw an error because createID is a static method