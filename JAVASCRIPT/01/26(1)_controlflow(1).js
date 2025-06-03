//if-else



// comperision operator
//  < , > , <= , >= , == , === , !=

//use 0f "==="

if(2 === "2")                             //this will check value and type both are same or not.
{
    console.log(executed);
}


// truthy and falsy value

let email = "bhalkhdhn@gmail.com"
let a = "";  //empty string
let b = [];  //empty array
//see output that empty string consider as false value but empty string is cconsider as true value.

if(email)
{
    console.log("email found");
}
else
{
    console.log("Email not found ");
}

if(a)
{
    console.log("string found");
}
else
{
    console.log("string not found ");
}

if(b)
{
    console.log("array found");
}
else
{
    console.log("array not found ");
}


//truthy value
/*
    true , "0" , "false" , " " , [] , {}(empty object) , function(){} ,  
*/

//falsy value
/*
    0 , false , -0 , BigInt 0n , "" , null , undefined , NaN
*/


if(b.length === 0)          //to check array is empty or not
{
    console.log("array is empty");
}
console.log("\n");

let newobject = {
    name : "Milan",
    id : 1
}
console.log(Object.keys(newobject));    //this is return keys of object in form of array
console.log("\n");

let myobject = {}

if(Object.keys(myobject).length === 0)       //to check object is empty or not here "Object.keys(myobject)" this will give an array so if Object.keys(myobject).length === 0 mwans object is empty.
{
    console.log("object is empty");
}

