let a=3
console.log(`type of a is ${typeof a}`);

let b=new Number(3)
console.log(`type of b is ${typeof b}`);
console.log(b);

console.log("\n");

b=b.toString();
console.log(b);
console.log(typeof b);

console.log("\n");

let  c= 6446.64621

console.log(c.toFixed(2));   //this is for how many digit you want to see in fraction part

console.log(`output of ${c} with precision '6' ${c.toPrecision(6)}`);
console.log(`output of ${c} with precision '5' ${c.toPrecision(5)}`);
console.log(`output of ${c} with precision '4' ${c.toPrecision(4)}`);
console.log(`output of ${c} with precision '3' ${c.toPrecision(3)}`);
console.log(`output of ${c} with precision '2' ${c.toPrecision(2)}`);
console.log(`output of ${c} with precision '1' ${c.toPrecision(1)}`);

console.log("\n");


let d=1000000

console.log(d.toLocaleString());      //it give coma with INDIAN standerd
console.log(d.toLocaleString('en-US'));      //it give coma with US standerd

console.log("\n");

console.log(Number.MAX_VALUE);//min & max value of number
console.log(Number.MIN_VALUE);









/*Math*/




console.log("\n");console.log("\n");

console.log(Math);
console.log(Math.PI);
console.log(Math.log(1));
console.log(Math.sin(3.14/2));    //give only redian number in sin,cos e.t.c.
console.log(Math.cos(0));

console.log("\n");

console.log(Math.sqrt(4));

console.log("\n");

console.log(Math.abs(-4));       //to convert nagetive number to positive.

console.log("\n");

console.log(Math.round(10.654));     //this will round off the number.
console.log(Math.round(10.554));
console.log(Math.round(10.454));

console.log("\n");

console.log(Math.ceil(2.654));    //this will roundoff number with upper number
console.log(Math.floor(2.654));    //this will roundoff number with lower number

console.log("\n");

console.log(Math.max(1,3,4,7,5,3,9,5));   //this will find min and max from array
console.log(Math.min(1,3,4,7,5,3,9,5));

console.log("\n");

console.log(Math.random());     //this will generate random number from 0-1
console.log(Math.random()*10);    //this will generate random number from 0-10 in float value
console.log(Math.floor(Math.random()*10));    //this will generate random number from 0-10 in int value
console.log((Math.random()*10) + 1);     //if we dont want to get '1' then do '+ 1' this will give number 1-11
console.log(Math.random()*3);    //this will generate random number from 0-3 in float value
console.log(Math.floor(Math.random()*3));    //this will generate random number from 0-3 in int value

console.log("\n");


//general form to generete number between min-max

let min=5
let max=49

console.log(    (Math.random() * (max-min+1)) + min    );
console.log(    Math.floor(Math.random() * (max-min+1)) + min     );