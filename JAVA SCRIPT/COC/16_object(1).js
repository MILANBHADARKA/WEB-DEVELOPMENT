//remember

//singaleton object
//let myobject = new Object() {}

//non singaleton object
// let myobject = {}



let user = {
    name : "Milan",                //here "name" is call "key" and "Milan" is call "value"   key : value
    id : 1,     //here we can also do "id".
    "date of birth" : "18-01-2006",     //here "" is naccesary because there is space between date,of, and birth
    email : "kjbkjbkb@gmail.com"
}

console.log(user);

console.log(user.name);           //here in this method we not use qutota("") , but in this method we not print     user.date of birth     so second method is shown as below

console.log(user["name"]);        //here in this method we use qutota("")
console.log(user["date of birth"]);


console.log(user["email"]);
user.email = "bacd@gmail.com";               //change value
console.log(user["email"]);

// Object.freeze(user);                          //now we can not change value of object
// user.email = "bacd,mbklb@gmail.com"; 
// console.log(user["email"]);

user.password = 123456;            //to add new key and value
console.log(user["password"]);
console.log("\n");
console.log("\n");






//SYMBOL

let mysym = Symbol("key1")           //here in Symbol "S" is capital

let myobject = {
    name : "Milan",
    id : 1,
    [mysym] : "mykey1"     //this is syntax to use symbol in object
}

console.log(myobject);
console.log("\n");

console.log(myobject["name"]);
console.log(myobject[mysym]);     //this is syntax to print symbol
console.log("\n");



// function in object
myobject.greeting = function() {
    console.log("Good evening");
}

console.log(myobject);
console.log("\n");

console.log(myobject.greeting);        //this will not print function but this is print only reference of function
console.log(myobject.greeting());
console.log("\n");


myobject.greetingtwo = function() {
    // console.log(`Hello our user ${myobject.name}`);
    console.log(`Hello our user ${this.name}`);     //to refere same object
}

console.log(myobject.greetingtwo());
