let myarray = [1,2,3,4,5,6,7,]


//1(with arrow function)
let initialvalue = 0;
let sumwithinitial = myarray.reduce(
    (accumulator , currentvalue) => (accumulator + currentvalue),initialvalue          //this will give sum of array element + initial value.
                                           //like here initialvalue = 0 so sumwithinitial = 0+1+2+3+4+5+6+7;
                                           //this is usefull in llike cart e.t.c.
)
//here we can give any variable name insteade of accumilator,currentvalue,initialvalue.

console.log(sumwithinitial);
// console.log(myarray);


//2(with function)
// let iv = 0;
// let sum = myarray.reduce( function (acc,cuur) {
//     return acc+cuur
// },iv)
// console.log(sum);


let courseprice = [
    {
        name : "js course",
        price : 999,
    },
    {
        name : "c course",
        price : 599,
    },
    {
        name : "mobile dev course",
        price : 5999,
    },
    {
        name : "data science course",
        price : 10999,
    },
]

let total = courseprice.reduce( (acc,item) => (acc + item.price),0)
console.log(total);
console.log("\n\n");



/*-----------------------------------------some interesting---------------------------------------------------------------*/

let myarr1 = [1,2,3,4,"Milan"]

let s1 = myarr1.reduce( (acc,cuur) => (acc + cuur),0)
console.log(s1);
console.log("\n");


let myarr2 = [1,2,"hello",4,"Milan"]

let s2 = myarr2.reduce( (acc,cuur) => (acc + cuur),0)
console.log(s2);
console.log("\n");



let myarr3 = [1,"hello",3,4,"Milan"]

let s3 = myarr3.reduce( (acc,cuur) => (acc + cuur),0)
console.log(s3);
console.log("\n");


let myarr4 = [1,2,"3",4,5,"Milan"]

let s4 = myarr4.reduce( (acc,cuur) => (acc + cuur),0)
console.log(s4);
console.log("\n");


let myarr5 = [1,"2",3,4,5,"Milan"]

let s5 = myarr5.reduce( (acc,cuur) => (acc + cuur),0)
console.log(s5);
console.log("\n");