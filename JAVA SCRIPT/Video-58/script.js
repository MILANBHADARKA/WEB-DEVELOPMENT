function fun(name)        //we can give any name here
{
    console.log("good morning " + name +" how are you?");
}
fun("Rohan");
fun(1);

function fun(variable)
{
    console.log("good morning " , variable ," how are you?");
}
fun("Milan");
fun(1);




function add(a,b,c=3)        //here we gave value of c so now in calling give value of c is optional and if we give then that is the value of c not 3.
{
    return a+b+c;
    // console.log(a+b);
}

let d = add(5,3);
console.log("the sum is : ",d);
// console.log("the sum is : "+d);




//arrow function
const fun1 = (a) =>
{
    console.log("hello" + a);
}

fun1(45);
fun1("Milan");