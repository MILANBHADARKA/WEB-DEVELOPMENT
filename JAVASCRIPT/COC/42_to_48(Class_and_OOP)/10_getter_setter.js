//class based syntax

class User {
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    set email(value){
        this._email = value
    }

    get email(){
        return this._email;
    }

    
    set password(value){
        this._password = value
    }

    get password(){
        return `${this._password}65432ljh`
    }

}


const Milan = new User("kasjdh@gmail.com", "123askfj")
console.log(Milan.password);
console.log(Milan.email);




//we use getter to get the value of a property and change it before returning it so that the original value keep protected.
//we use setter to set the value of a property.