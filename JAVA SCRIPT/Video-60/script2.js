/*
if we want to add double quot in string then there are two way
*/

//1
let a="mi\"lan";

console.log(a);

//2
let c=`h"ello`
console.log(c);


let b="MIlan Bhadarka hello hello"

console.log(b.toUpperCase());
console.log(b.toLowerCase());
//here note that  'U' and 'L' is capital latter.
console.log(b.length);


/*
slice function
*/

console.log(b.slice(1,4));    //this will print 1 to 3 index char.

console.log(b.slice(2));       //this will print 2 to end index char.                                            

/*
replace
*/
console.log(b.replace("Bhadarka","Ahir"));            //this will print changes not chage variable value
console.log(b.replace("hello","hi"));     //if in string there are more then one "hello" this will chage only first "hello".


console.log(b);

b = b.replace("hello","hi");          //to change in variable
console.log(b);


/*
concate
*/
let p="hetav";
let q="malhar";

console.log(p.concat(q,"dhruv","rahul"));

p=p.concat(q);
console.log(p);


/*
removing white space
*/

let z="    Hetav changani     "

z=z.trim();
console.log(z);
