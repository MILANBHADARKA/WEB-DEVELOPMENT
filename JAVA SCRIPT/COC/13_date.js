//date

let date = new Date();
console.log(`type of Date is ${typeof date}`);
console.log(date);
console.log('\n');

console.log(date.toLocaleString());
console.log('\n');

console.log(date.toDateString());
console.log('\n');

console.log(date.toLocaleDateString());
console.log('\n');

console.log(date.toLocaleTimeString());
console.log('\n');

console.log(date.toTimeString());
console.log('\n');

console.log(date.toUTCString());
console.log('\n');

console.log(date.getTimezoneOffset());
console.log('\n');




let mydate = new Date(2023,0,23)        //here remember that month start on '0' means  0=january,1=fabuary then 11=december,12=january,13=fabuary......
console.log(mydate.toDateString())
console.log("\n");

// let mydate1 = new Date("2023-01-22")         //yyyy-dd-mm   here note that month start with 01 means 01=january.
let mydate2 = new Date("01-22-2023")        //mm-dd-yyyy
// let mydate3 = new Date("22-01-2023")      //dd-mm-yyyy this is not valid

console.log(mydate2.toLocaleDateString())
console.log("\n");


let mydate4 = new Date(2023,1,22,5,3,2)
let mydate5 = new Date(2023,1,22,20,3,2)

console.log(mydate4.toLocaleString());
console.log(mydate5.toLocaleString());