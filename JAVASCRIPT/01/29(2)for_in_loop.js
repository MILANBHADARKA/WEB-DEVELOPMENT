//"for in" loop for object

let myobject = {
    js : "javascript",
    css : "cascade style sheet",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const i in myobject) {                          //we can use any name insteade of i
    // console.log(i);                              //this will print only key of object
    console.log(`${i} :- ${myobject[i]}`);         //this will print key and value of object
}
console.log("\n");







//"for in"loop for array

let myarray = [1,2,3,"Milan"]

for (const i in myarray) {
    // console.log(i);                           //this will print only index of array
    console.log(myarray[i]);                    //this will print value
}
console.log("\n");

//difference between "for of" and "for in"
for (const i of myarray) {                           //this is for of loop
    console.log(i);                                 //this will print direct value of array
}







//"for in" loop for map

let variable = new Map();

variable.set('IN','India')
variable.set("US","United state")
variable.set("FR",'france')

for (const i in variable) {
    console.log(i);                              //this will nothing print because map is not ittrable
}

