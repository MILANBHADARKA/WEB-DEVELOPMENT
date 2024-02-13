function cart(...item)               //here "..." is called rest operator
{                                   //this is useful when we don't khow in advance that how many parameter are there.like cart of any e-commerse website this is on user dependent that how many items that user add to cart so in advance we don't know that how many items that user add in cart.
    return item;
}

console.log(cart(200,400,610,700,900));
console.log("\n");




// pass object to function

function handleobject(newobject)
{
    console.log(`Name is ${newobject.name} and Id is ${newobject.id}`);
}

let myobject= {
    name : "Milan",
    id : 1
}

handleobject(myobject);

handleobject({              //pass direct object
        name : "Mehul",
        id : 2
})
console.log("\n");


//pass array to the function

function handlearray(newarray)
{
    return newarray[2];
}

let a=[2,5,3,30,4,6,7,8,9]

console.log(`element at index 2 is ${handlearray(a)}`);
console.log(`element at index 2 is ${handlearray([10,45,65,32,21])}`);  //pass direct array