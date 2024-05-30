//important for interview
//can we change the value of pi in math object
//no we can't change the value of pi in math object because it is a property of math object and it is not writable
//and explain this below code




const descripter = Object.getOwnPropertyDescriptor(Math, 'PI')

console.log(descripter); 
//so we can see that pi is a property of math object and it is not writable and not enumerable and not configurable





const Chai = {
    name: "Ginger chai",
    price: 250,
    isAvailable: true,
}

console.log(Object.getOwnPropertyDescriptor(Chai, 'name'));

Object.defineProperty(Chai, "name", {
    writable: false,
    enumerable: false,
})
//so now we can't change the value of "name" property of "Chai" object because we have set the writable to false


console.log(Object.getOwnPropertyDescriptor(Chai, 'name'));
