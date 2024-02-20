//our task is add another list item.

const ul = document.querySelector('.language')

const li2 = document.createElement('li')

li2.innerText = "hello"
ul.appendChild(li2)



//now here we define function so in future if we want add new list item so it will posible.

function addlist(listname)
{
    const li = document.createElement('li');
    li.innerText = `${listname}`
    document.querySelector('.language').appendChild(li);
}

addlist("CSS");
addlist("HTML");
//this method is not optimize so another optimize method is shown below


function addoptilist(listname)
{
    const li = document.createElement('li')
    const addtext = document.createTextNode(listname);
    li.appendChild(addtext);
    // li.appendChild(document.createTextNode(listname))

    document.querySelector('.language').appendChild(li);

    
}
addoptilist("REACT")







//edit value

const variable = document.querySelector('li:nth-child(2)')
// variable.innerText = "Mojo"    //this way is not optimize

const newlist = document.createElement('li')
const addtext = document.createTextNode("Mojo");
newlist.appendChild(addtext)
// newlist.appendChild(document.createTextNode("Mojo"))

variable.replaceWith(newlist)







//remove element

const lastlang = document.querySelector("li:last-child")
lastlang.remove();
