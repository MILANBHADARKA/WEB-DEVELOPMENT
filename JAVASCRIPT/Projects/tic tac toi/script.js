let boxes = document.querySelectorAll('.box');

boxes.forEach( (box) => {
    box.addEventListener('click', (e) => {
        if (box.innerHTML === '') {
            box.innerHTML = 'X';
            box.id = 'X';
        } else if (box.innerHTML === 'X') {
            box.innerHTML = 'O';
            box.id = 'O';
        } else {
            box.innerHTML = '';
            box.id = '';
        }
    });
    box.style.color = 'black';
    box.style.fontSize = '50px';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
});