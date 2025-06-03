let myarray = ["hello",56,7,true,564,65.4]

myarray.forEach((element) => {                 //we can give any name instade of element
    console.log(element);
});
console.log("\n");


//or
// myarray.forEach(function (element) {
//     console.log(element);
// });


//or
// function printme(item){
//     console.log(item);
// }

// myarray.forEach(printme);             //here not use printme() like this


let array = [true,56,7,564,65.4,"hello"]

array.forEach((item,index,fullarr) => {
    console.log(item,index,fullarr);
});
console.log("\n");


let newarray = [                   //object inside array
    {
        name : "hello",
        id : 1
    },
    {
        name : "hi",
        id : 2
    },
    {
        name : "how",
        id : 3
    }
]


newarray.forEach( (i) => {
    // console.log(i.name);
    // console.log(i.id);

    console.log(`${i.id} :- ${i.name}`);
})