const buttons = document.querySelectorAll('.button')
//const button = document.getElementByClassName(button)
const body = document.querySelector("body")

buttons.forEach( (button) => {
    // console.log(button);
    button.addEventListener("click",function(e) {
        // console.log(e);
        // console.log(e.target);

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            // body.style.backgroundColor = 'grey';
        }
        else if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            // body.style.backgroundColor = 'white';
        }
        else if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            // body.style.backgroundColor = 'blue';
        }
        else if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            // body.style.backgroundColor = 'yellow';
        }
    })
})