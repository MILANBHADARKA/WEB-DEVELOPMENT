let mynumber = [1,2,3,4,5,6,7,8,9,10]

let newnums = mynumber.map( (num) => num+10)

console.log(newnums);
console.log("\n\n");



//let's do this with use of "for each" loop

let newnumber = []; 

mynumber.forEach( (number) => {
    newnumber.push(number +  10)
});

console.log(newnumber);
console.log("\n\n");





//chaining

let number1 = mynumber
                    .map( (num) => num*10 )       //compiler first do this
                    .map( (num) => num+1)        //then this
                    .filter( (num) => num>=40)     //then this
console.log(number1);