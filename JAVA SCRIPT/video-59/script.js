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



let a,b,ans;
a=prompt("enter first number");
b=prompt("enter second number");


let o;
o=prompt("enter valid operator");


let c= Math.random();       //it create random number between 0 to 1.

if(c<=0.1)                 
{
    if(o=='+')
    {
        ans = a-b;
        // console.log(ans);
        alert(ans);
    }
    else if(o=='*')
    {
        ans = a+b;
        // console.log(ans);
        alert(ans);
    }
    else if(o=='-')
    {
        ans = a/b;
        // console.log(ans);
        alert(ans);
    }
    else if(o=='/')
    {
        ans = a ** b;
        // console.log(ans);
        alert(ans);
    }
    else
    {
        console.log("Enter valid oprator");
    }
}
else
{
    if(o=='+')
    {
        ans = a + b;
        // console.log(ans);
        alert(ans);
    }
    else if(o=='*')
    {
        ans = a*b;
        // console.log(ans);
        alert(ans);
    }
    else if(o=='-')
    {
        ans = a-b;
        // console.log(ans);
        alert(ans);
    }
    else if(o=='/')
    {
        ans = a / b;
        // console.log(ans);
        alert(ans);
    }
    else
    {
        console.log("Enter valid oprator");
    }
}