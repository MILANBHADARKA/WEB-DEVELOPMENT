// let a = prompt("Enter a number");

// let b = prompt("Enter another number");

// if (isNaN(a) || isNaN(b)) {
//   throw SyntaxError("You have entered a non-number");
// }

// let sum = parseInt(a) + parseInt(b);


// console.log("The sum of a and b is", sum);






let c = prompt("Enter a number");
let d = prompt("Enter another number");

let sum = parseInt(c) + parseInt(d);

try {
    console.log("The ans is", sum*x);
    
} catch (error) {
    console.log("Error hai bhai");
    
}
finally{
    console.log("This will run anyway");
}
//now important what is use of finally see below code



function func() {
    try {
        console.log("The value of y is", y);
        return true;
    
    } catch (error) {
        console.log("Error hai bhai");
        return false;

    } finally {                    //now normaly if return somthing than function is end. but if we want to run some code after return keyword than we use finally.
        console.log("file are being closed");
        
    }
}

func();







