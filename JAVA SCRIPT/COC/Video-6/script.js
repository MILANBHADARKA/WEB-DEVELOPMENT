let a="65531";
let b="6416ertwet"
let c=null;
let d=undefined;
let e=true;

let f=1;

let g=65436413;



console.log(typeof(a));

a=Number(a);    //convert to number
b=Number(b);
c=Number(c);
d=Number(d);
e=Number(e);

f=Boolean(f);     //convert to boolean

g=String(g);   //convert to string



console.log(typeof(a));
console.log(`a is ${a}`);
console.log(`b is ${b}`);
console.log(`c is ${c}`);
console.log(`d is ${d}`);
console.log(`e is ${e}`);
console.log(`f is ${f}`);
console.log(`type of g is ${typeof(g)}`);


/*

"33" => 33
"654ffgedv" => NaN
true => 1 and false => 0

*/