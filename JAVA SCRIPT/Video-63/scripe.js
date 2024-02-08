let arr = [1,2,3,6,9,7,4]

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

// console.log(a.join("-"));
//OR//
a=a.join(" and ");           //here insted of "and" we can use any like -,>,+,<,#,any string e.t.c.
console.log(a);



//pop(function)
let b=[1,6,4,7,8,9,3];

b.pop();       //this will remove last element adn his from array
console.log(b);     



//push() function
let c=[2,3,4,6,3,7,9,3,2]




