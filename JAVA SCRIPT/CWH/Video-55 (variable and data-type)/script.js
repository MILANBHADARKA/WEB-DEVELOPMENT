console.log("Hey how are you?");

var a=5;                //all the rule for variable name is like c.
var b=7.5;               //in javascript variable name is case sensitive means a and A is different variable.
var c="milan";    

console.log(a+b);
console.log(c);
a=a+10;
console.log(a);

console.log(typeof a,typeof b,typeof c);      //for print type of any variable.

const a1=9;        //now we cannot change value of a1.
// a1=a1+10;      //this is an error.

let z=5;
let v="hello";
let y=5.6;

//difference between is let is like local variable and var is like globle variable let is only use in block where it declere and we can use var everywhere in program. 

console.log(z);
console.log(v);
console.log(y);
//console.log(z,v,y);


//premetive data-type

//in java-script there are 7 premetive data-type
//null,number,string,symbol,undefined,boolean,bigint
let r=5;
let s="sjdvb";
let t=3.6546;
let u=true;
let p=undefined;
let q=null;     //remember that data-type of null is object.//see in output.

console.log(r,s,t,u,p,q);
console.log(typeof r,typeof s,typeof t,typeof u,typeof p,typeof q);





//non_premitive datatype
//array,object,function

//object
let o = {          //this is call object. we can give any name instade of o.
    name: "Milan",                //note that here we cannot give samicolon at the end we give colon 
    "job code":5319                //here in space between job and code so ""(double cout) is neccesry but in other key that have no space in then ""(double cout) is mendetary.
}
//here "name" and "job code" is call key & "Milan" and "5319" is call  value so we can say say that in object we can declare key-value pairs.