//Nullish Coalescing Operetor (??):           null and undefined

let a,b,c;

a = 5 ?? 10;
b = null ?? 10;
c = undefined ?? 10;

let d = null ?? undefined ?? 10 ?? 15;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log("\n");



//terniary operetor

let e=5,f;

e>4 ? f=e : f=1;
console.log(`f = ${f}`);