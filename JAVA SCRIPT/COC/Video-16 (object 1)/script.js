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

Object.freeze(user);                          //now we can not change value of object
user.email = "bacd,mbklb@gmail.com"; 
console.log(user["email"]);

console.log("\n");





//SYMBOL

let mysym = Symbol("key1")           //here in Symbol "S" is capital

let myobject = {
    name : "Milan",
    id : 1,
    [mysym] : "mykey1"     //this is syntax to use symbol
}

console.log(myobject);
console.log(myobject[mysym]);     //this is syntax to print symbol

