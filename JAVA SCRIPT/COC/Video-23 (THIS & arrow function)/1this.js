let myobject = {
    username : "Milan",
    id : 1,

    welcomemassage : function(){
        console.log(`${this.username} welcome to the site.`);  //here "this" is use for refere current context.
                                                        //here insted of "this.username" we can also write like "myobject.username"
        console.log(this);
    }
    
}

myobject.welcomemassage()

myobject.username = "sam"

myobject.welcomemassage()


console.log(this);      //here this is print empty braces because in node enviroment "this" is refere to empty object.




