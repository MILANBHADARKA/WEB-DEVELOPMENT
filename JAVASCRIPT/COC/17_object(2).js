let myobject = {

    name : {
        fullname : {                             //nested object
            userfullname : {
                "firstname" : "Milan",
                "lastname" : "Bhadarka"
            }
        }
    },

    email : "jkjbkjbkjb@gmail.com",

    'roll no' : 1,

    greeting : function() {                   //function in object
        console.log("good afternoon");
    }

}

console.log(myobject);
console.log("\n");

console.log(myobject.name);
console.log("\n");
console.log(myobject.name.fullname);
console.log("\n");
console.log(myobject.name.fullname.userfullname);
console.log("\n");
console.log(myobject.name.fullname.userfullname.firstname);
console.log("\n");
console.log("\n");




console.log(Object.keys(myobject));     //this will return keys in form of array
console.log("\n");

console.log(Object.values(myobject));       //this will return values in form of array
console.log("\n");

console.log(Object.entries(myobject));      //this will return keys and value pair in form of array
console.log("\n");


console.log(myobject.hasOwnProperty('email'));     //here 'O and 'P' is capital letter
//this will retrun 'true or false' if propraty written in () is exist then it return 'true' otherwise it return 'false'.
console.log(myobject.hasOwnProperty("Milan"));
console.log(myobject.hasOwnProperty('id'));
console.log(myobject.hasOwnProperty('roll no'));
console.log("\n");
console.log("\n");




let obj1 = {
    1 : "a",
    2 : "b"
}
let obj2 = {
    3 : "a",
    4 : "b"
}
let obj3 = {
    5 : "a",
    6 : "b"
}

//combining object

//1
// let obj4 = Object.assign(obj1,obj2,obj3)         //this syntax will combine obj1,obj2,obj3 in obj1 then assign all in obj4 means this syntax will make changes in obj1.
// console.log(obj1);
// console.log(obj4);


//2
// let obj4 = Object.assign({},obj1,obj2,obj3)        //but uisng this syntax we not do changes in obj1 and combine all key : value in obj4.
// console.log(obj1);
// console.log(obj4);


//3
let obj4 = {...obj1,...obj2,...obj3}                // '...' is call restoperaator


console.log(obj1);
console.log(obj4);
console.log("\n");console.log("\n");




//array of object

let array = [
    {
        id : 1,
        name : "kjgk"
    },
    {
        id : 2,
        name : "affwf"
    },
    {
        id : 3,
        name : "efgwgg"
    },
    {
        id : 4,
        name : "wefwteh"
    },
    {
        id : 5,
        name : "wethwjh"
    }
]

console.log(array);


