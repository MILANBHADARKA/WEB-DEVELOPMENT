//java-script conditional statement and some operator



//arithmatic operator
//+ ,    -   ,  * ,    /   ,  **    ,   %  , ++   ,  --    
let a=5;
let b=2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);     //"**" is the exponetiation operator.
console.log(a%b);
console.log(++a);
console.log(--b);



//assignment operator
//= ,    +=  , -=   ,  /=    ,   *=     ,   **=     ,    %=  
let c=5;
c+=100;

console.log(c);



//comparison operator
//==    ,   != ,   ===(equal value and type)   ,   !==(not equal value or not equal type)   ,     >    ,    < ,       >=     ,  <=   ,   ?(tarnary operator)

if("3" === 3)
{
    console.log("true");
}
else
{
    console.log("false");    
}
//here we use "===" output is false  because "3"is string but 3 is number so value is same but type is different
//is we use "3"==3 then it is true




//logical operator
//&&    ,   || ,    !(logical not)   





//conditional statement
//1. if statement
//2. if-else statement
//3. else if ladder


let age = 45;

if(age>18){
    console.log("you can drive");
}

else{
    console.log("you cannot drive");
}





//tarnary operator
//condition ? exp1 : exp2;

age>18 ? console.log("you can drive") : console.log("you can not drive");