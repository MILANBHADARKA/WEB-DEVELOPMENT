let box = document.querySelectorAll('.box');
let delete1 = document.querySelector('.delete');

// give backgroud color red to box

box.forEach( (element) => {
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
    element.style.margin = '10px';
    element.style.padding = '10px';
    element.style.border = '1px solid black';
    element.style.borderRadius = '5px';

    element.addEventListener('click', () => {
        element.style.backgroundColor = 'green';

        delete1.addEventListener('click', () => {
            element.style.display = 'none';
        })
    })

})
