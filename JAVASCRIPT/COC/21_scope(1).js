let z=5;

if(1)
{
    let a=5;
    var b=6;
    const c=7;
    let z=300
    console.log(`inner z : ${z}`);
}

// console.log(a);  //this is not valid because let it blocked-scoped or local variable
console.log(b);
// console.log(c);     //this is not valid because const it blocked-scoped or local variable

console.log(`outer z : ${z}`);  //this will print 5.  not a 300.