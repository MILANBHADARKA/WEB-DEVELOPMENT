class User1 {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const Milan = new User1("Milan","bhadarkamilan@gmail.com","123")
console.log(Milan.encryptPassword());
console.log(Milan.changeUsername());







//behind the scenes

function User2(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const Vishal = new User2("Vishal","vishal@gmail.com","454354")
console.log(Vishal.encryptPassword());
console.log(Vishal.changeUsername());