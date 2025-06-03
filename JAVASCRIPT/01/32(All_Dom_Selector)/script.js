document.getElementById("title").id;     //we can here also use many like getElementbyclassname and e.t.c...
document.getElementById("title").className;


document.getElementById('title').getAttribute('class');


document.getElementById('title').setAttribute('class' , 'heading test')

document.getElementById('title').getAttribute('class');



const title = document.getElementById("title")

title.style.backgroundColor = 'red'
title.style.padding = '15px'
title.style.borderRadius = '15px'




//adding content

title.textContent; //it will display all text even if content is hidden using display:none property
title.innerText;   //it will display only visible text
title.innerHTML; //it will give full html with tags

title.innerText = "Hello this is DMO"





//queryselector

document.querySelector('h2'); //this will return first h2
document.querySelectorAll('h2');    //this will return all h2 inform of nodelist

document.querySelector('#title');
document.querySelector('.heading');
document.querySelector('input[type=password]');
document.querySelector('p:first-child');




const myul = document.querySelector('ul')
const turngreen = myul.querySelector('#one')

turngreen.style.backgroundColor='green'
turngreen.innerText = "when"




//queryselectorall

const templilist = document.querySelectorAll('li')

// templilist.style.backgroundColor='yellow'       //this is wrong because templilist variable is nodelist. noselist is not array but it is like a array.

//so solution is


templilist.forEach(element => {
    element.style.color='blue'
    element.style.backgroundColor='yellow'
});

//we can also do
templilist[0].style.backgroundColor='red'
templilist[1].innerText='two'




const myh1 = document.querySelectorAll('h1')

// myh1.style.backgroundColor='blue'            //this is wrong even if in file we have only one h1 but querySelectorAll is return a nodelist.

myh1[0].style.backgroundColor='blue'




const li_item = document.getElementsByClassName('li_list')   //this will data in form of HTMLcollection

//now of we want to do some work on li_list so directly it is not possible because li_list is HTMLcollection so it has no property like map(),for each() e.t.c.  so now we convert HTMLcollection into array

const myconverted_li_item = Array.from(li_item)

myconverted_li_item.forEach( (element) => {
    element.style.padding = '20px'
})










