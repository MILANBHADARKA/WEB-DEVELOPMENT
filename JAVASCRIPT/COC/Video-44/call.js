function setusername(username)
{
    this.username = username;
}

function createuser(username,email,password)
{
    // setusername(username)   //this will not work
    // setusername.call(username)    //this will also not work

    setusername.call(this,username)  //this will work

    this.email = email;
    this.password = password;
}

const user1 = new createuser("Milan","bhadarkamilan3@gmail.com","123")
console.log(user1);