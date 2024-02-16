//for of loop for array

let arr = [1,2,3,4,5,6]

for (const number of arr) {     //this will auto collect information like when loop start and when loop end.
    console.log(number);
}
console.log("\n");



//for of loop for string

let str  = "Milan";

for (const i of str) {
    console.log(`Character is ${i}`);
}
console.log("\n");




//maps
//maps is like array.

let variable = new Map();

variable.set('IN','India')
variable.set("US","United state")
variable.set("FR",'france')

console.log(variable);     //print map
console.log("\n");




//for of loop for Map

for (const map of variable) {
    console.log(map);
}
console.log("\n");


for (const [key,value] of variable) {                  //we can give any name instede of key,value like i,j.
    console.log(key, ":-", value );
}
console.log("\n");


for (const [i,j] of variable) {                  
    console.log(i, ":-", j );
}
console.log("\n");



//for of loop for object

let myobject = {
    name : "Milan",
    id : 1
}

// for (const information of myobject) {         //this will not work because object is not iterable we need to use for in object
//     console.log(information);
// }

