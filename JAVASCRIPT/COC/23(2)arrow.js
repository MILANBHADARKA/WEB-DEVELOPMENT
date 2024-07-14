function a(){
    let username="Milan";
    console.log(this.username);      //here this is not work because in only object we refere current context with using "this" in function this is not work.
}

a();
console.log("\n\n");

 
//+++++++++++++++arrow function++++++++++++++

let myfunc = () => {                //this is simple arrow function
    let username = "Milan";
    console.log(`Hello ${username}`);
    console.log(this);
    console.log(this.username);
}
myfunc();



// let sum = (num1 , num2) => {
//     return num1+num2;                   //this is call explisite return because we use return keyword here
// }
// console.log(sum(5,2));


//we can also do this for upper function


// let sum = (num1,num2) => num1+num2       //this is call inspliste return because here we not use return keyword
// console.log(sum(5,2));


let sum = (num1,num2) => (num1+num2)       //this is also valid
console.log(sum(5,2));


//note that if we use curly braces{} then return keyword is neccery.
//is we user Parentheses() then no need of return keyword.



//for object
let myfunction = () => ({username : "Milan"})
console.log(myfunction())