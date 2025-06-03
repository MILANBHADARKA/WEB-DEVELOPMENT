function saymyname()
{
    console.log("M");
    console.log("i");
    console.log("l");
    console.log("a");
    console.log("n");
}

saymyname();
console.log("\n");

function add(a,b)
{
    return a+b;
}

let c=add(3,6);
console.log(c);




function loginusermassage(username)                   
{
    return `${username} just logined`;
    //console.log(${username} just logined);
}

// let z=loginusermassage("Milan")
// console.log(z);
console.log(`${loginusermassage("Milan")}`);



function fun(username = "Hello")          //if user not give argument then this here "Hello" is the vbalue of username         
{
    return `${username} just logined`;
    //console.log(${username} just logined);
}

let y=fun();
console.log(y);



let a = function(number) {
    return number +2;

}

console.log(a(2));