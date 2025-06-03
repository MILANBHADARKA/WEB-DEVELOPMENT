function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){               //this is a constructor function
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){        //this is how we can add a method to the prototype of the object now all the object created by "createuser" constructor function will have this method
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const tea = createUser("tea", 250)            //here we are not using new keyword while creating this object so the prototype of this object will not be linked to the function

const chai = new createUser("chai", 25)

chai.printMe()
chai.increment()
chai.printMe()

// tea.printMe()              //This will give an error because we not use new keyword while creating this object 
//basicly if we want to link the prototype of the object to the function we have to use new keyword while creating the object





/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/