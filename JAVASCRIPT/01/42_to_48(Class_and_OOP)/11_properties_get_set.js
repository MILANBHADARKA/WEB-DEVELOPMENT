//function based syntax

function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email', {
        set: function(value){
            this._email = value;
        },

        get: function(){
            return this._email;
        }

    })

    Object.defineProperty(this,'password', {
        set: function(value){
            this._password = value;
        },

        get: function(){
            return this._password
        }

    })

}

const Milan = new User("sdfuhsdgf@gmaul.com", '324sdg')
console.log(Milan.email);
console.log(Milan.password);










//object based syntax

const User1 = {
    _email: 'ajfhvb@gmail.com',
    _password: 'Hello',

    get password(){
        return `${this._password}543dgsdgvsdg`;
    },

    set password(value){
        this._password = value
    }

}

const Vishal = Object.create(User1)    //This is factory function means we are creating a new object from the existing object
console.log(Vishal.password);