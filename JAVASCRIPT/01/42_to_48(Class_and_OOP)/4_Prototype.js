// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);  
//this is our task o create this prototyple function trueLength which will return the length of the string without counting the spaces at the end of any string
//we can solve this at the end


let myHeros = ["thor", "spiderman"]
let names = ["Milan", "Vishal", "Mehul"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Array.prototype.print = function(){
    console.log("Print prototype function available for all arrays");
}
//this prototype function will be available for all the arrays because we have added this to the prototype of the array


myHeros.print();
names.print();
// heroPower.print();        //this will give an error because we have added the print method to the prototype of the array not to the object




Object.prototype.milan = function(){
    console.log("Milan prototype function available for all the data types");
}
//this prototype function will be available for all the data types because we have added this to the prototype of the object
//And object is the parent of all the data types



myHeros.milan();
names.milan();
heroPower.milan();

// delete Object.prototype.milan         //this is how we can delete the prototype function from the object


//so here we study about the prototype in javascript and how we can add a method to the prototype of the object and how we can use that method.
//and object is the parent of all the data types so if we add a method to the prototype of the object then that method will be available for all the data types










// INHERITANCE IN JAVASCRIPT

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}
Teacher.__proto__ = User      //outside the object
//here Teacher is the child of User and all the properties of User will be available for Teacher
//this is old syntax

const TeachingSupport = {
    isAvailable: false
}


const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport        //inside the object
    //now TeachingSupport is the parent of TASupport and all the properties of TeachingSupport will be available for TASupport 
    //this is old syntax
}




// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //here TeachingSupport is the child of Teacher and all the properties of Teacher will be available for TeachingSupport














// our task is to create a prototype function trueLength which will return the length of the string without counting the spaces at the end of any string
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Milan   ".trueLength()
"iceTea".trueLength()