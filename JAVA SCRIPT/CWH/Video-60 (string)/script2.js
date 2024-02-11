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
console.log(b.replace("Bhadarka","Ahir"));            //this will print changes not change variable value
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
removing white space from satrt and end
*/

let z="    Hetav     changani     "

z=z.trim();
console.log(z);




//startswith() & endswith() function

let f="Milan BHadarka hello hi."

console.log(f.startsWith("Milan"))     //if string f is start with "Milan" then it give output true otherwise false.
console.log(f.endsWith("."))          //if string f is end with "." then it give output true otherwise false.
console.log(f.includes("hello"));     //if in string there is "hello" at any index then it give true otherwise it"s give false


let h= "Milan-Bhadarka-chandubhai."    
h=h.split('-')      //it convert string to array in basis of '-'. we can give anything inside '' like split(' ') , split('_') e.t.c.
console.log(h);