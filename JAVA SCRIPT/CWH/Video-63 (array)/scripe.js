let arr = [1,2,3,6,9,7,"milan"]

console.log(`type of array is ${typeof(arr)}`);

console.log(arr);
console.log(`lenght is ${arr.length}`);
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[6]);

arr[6]=10;
console.log(arr[6]);




//tostring() function
// console.log(arr.toString());                  //this wll only print not change in array
//OR//
arr=arr.toString();           //this will convert array to string all element is coma sepreted.
console.log(arr);
console.log(`now type is ${typeof(arr)}`);



//join() function
let a=[2,6,3,4,7,8]

// console.log(a.join(" and "));
//OR//
a=a.join(" and ");           //here insted of "and" we can use any like -,>,+,<,#,any string e.t.c.
console.log(a);


  
//pop() function
let b=[1,6,4,7,8,9,3];

b.pop();       //this will remove last element and his space from array
console.log(b);     
console.log(`length is ${b.length}`)


//push() function
let c=[2,3,4,6,3,7,9,3,2]

c.push(5);      //this will add the element at last in array.
console.log(c);     



//shift() function
let d=[2,3,6,4,7,8]      

d.shift();           //this will remove first element and his space from array
console.log(d);     
console.log(`length is ${d.length}`)



//unshift() function
let e=[6,3,2,4,9,3,1,1,11,3]           

e.unshift(50);                 //this will add the element at first in array.
console.log(e);     



//delete operator
let f=[2,3,4,6,2,1,1]                //this will remove element from array but space is reserved

delete f[3];
console.log(f);     
console.log(`length is ${f.length}`)


//concat() function
let a1=[1,2,3]
let a2=[6,5,4]
let a3=[7,8,9]

let a4=a1.concat(a2);
console.log(a4);     

a4=a1.concat(a2,a3)
console.log(a4);     


//sort() function
let g=[9,8,7]
g.sort();

console.log(g);     




//splice() function
let h=[3,4,9,7,2,1,2,3,9,5,10]

h.splice(1,4)  //this will remove index:1,2,3,4 element
console.log(h);


let i=[1,2,3,4,5,6,7,8,9]

i.splice(1,4,22,55)       //tis will remove index:1,2,3,4 element and add 22 and 55 on that space.

console.log(i);     




//slice() function

let j=[2,4,6,3,7,8]
console.log(j.slice(2))
console.log(j.slice(2,4))


//now diff between slice and splice is that splice do changes in orginal array but slice don't do changes in original array.




//reverse() function                //to reverse the arrays
let k=[1,2,3,4,5,6,7,8,9,10]

k=k.reverse();
console.log(k);


