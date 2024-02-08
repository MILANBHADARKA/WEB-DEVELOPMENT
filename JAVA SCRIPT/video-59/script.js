/*
Creat a faulty calculator using java-script

1.if take oprand from user
2.it take oprator from user

this faulty calculator does wrong operation at 10% time like this

+ --> -
* --> +
- --> /
/ --> **

if perform wrong opration for 10% time only
*/


let r= Math.random();       //it create random number between 0 to 1.
let a=prompt("enter first number");
let b=prompt("enter second number");
let o=prompt("enter valid operator");
let ans;

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(r>0.1)                 
{
    alert(`the result is ${eval(`${a} ${o} ${b}`)}`);


    // if(o=='+')
    // {
    //     ans = a-b;
    //     // console.log(ans);
    //     alert(ans);
    // }
    // else if(o=='*')
    // {
    //     ans = a+b;
    //     // console.log(ans);
    //     alert(ans);
    // }
    // else if(o=='-')
    // {
    //     ans = a/b;
    //     // console.log(ans);
    //     alert(ans);
    // }
    // else if(o=='/')
    // {
    //     ans = a ** b;
    //     // console.log(ans);
    //     alert(ans);
    // }
    // else
    // {
    //     console.log("Enter valid oprator");
    // }
}

else
{
    o=obj[o];
    alert(`the result is ${eval(`${a} ${o} ${b}`)}`);



    // if(o=='+')
    // {
    //     ans = a + b;
    //     // console.log(ans);
    //     alert(ans);
    // }
    // else if(o=='*')
    // {
    //     ans = a*b;
    //     // console.log(ans);
    //     alert(ans);
    // }
    // else if(o=='-')
    // {
    //     ans = a-b;
    //     // console.log(ans);
    //     alert(ans);
    // }
    // else if(o=='/')
    // {
    //     ans = a / b;
    //     // console.log(ans);
    //     alert(ans);
    // }
    // else
    // {
    //     console.log("Enter valid oprator");
    // }
}