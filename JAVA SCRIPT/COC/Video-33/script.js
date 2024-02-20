const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);  //it will give HTMLcollection

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}
console.log("\n\n");

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
console.log("\n\n");

const dayone = document.querySelector('.day')
console.log(dayone);
console.log(dayone.parentElement);
console.log(dayone.nextElementSibling);
console.log("\n\n");

console.log("NODES : ",parent.childNodes); //this will return nodelist



