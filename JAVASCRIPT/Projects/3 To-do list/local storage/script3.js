let main = document.querySelector('.main');
let todos = document.querySelector('.todos');
let input = document.querySelector('input');

let add = document.querySelector('.add');

add.addEventListener( 'click', (event) => {
    event.preventDefault();
    let count = localStorage.length;

    if(input.value == "") {
        add.disable = true;
        return;
    }

    localStorage.setItem(count, input.value);


    location.reload();
    input.value = "";
})


for(let i = 0; i < localStorage.length; i++) {

    if(localStorage.getItem(i) == "") {
        continue;
    }
    
    let li = document.createElement('li');
    li.classList.add('todo-item');
    li.id = i;

    let span = document.createElement('span');
    span.innerText = localStorage.getItem(i);
    li.appendChild(span);

    
    let trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash"></li>';
    trash.classList.add('trash-btn');
    trash.style.background = 'rgb(255, 200, 0)';
    li.appendChild(trash);

    
    let edit = document.createElement('button');
    edit.innerHTML = '<i class="fas fa-edit"></li>';
    edit.classList.add('edit-btn');
    edit.style.background = 'rgb(255, 200, 0)';
    li.appendChild(edit);



    todos.appendChild(li);

}


let edit = document.querySelectorAll('.edit-btn');
let trash = document.querySelectorAll('.trash-btn');




edit.forEach( (btn) => {
    let li = btn.parentElement;

    let edit = li.querySelector('.edit-btn');
    let span = li.querySelector('span');

    btn.addEventListener('click', () => {

        edit.remove();

        let newinput = document.createElement('input');
        newinput.classList.add('newinput');
        newinput.style.width = "100px";
        newinput.style.height = "20px";

        newinput.value = span.innerText;
        li.appendChild(newinput);

        
        let save = document.createElement('button');
        save.innerHTML = '<i class="fas fa-save"></li>';
        save.classList.add('save-btn');
        save.style.background = 'rgb(255, 200, 0)';
        li.appendChild(save);

        save.addEventListener('click', () => {

            if(newinput.value == "") {
                save.disable = true;
                return;
            }

            localStorage.setItem(li.id, newinput.value);
            newinput.remove();
            save.remove();

            li.appendChild(btn);
            location.reload();
            
        });
    });
});



trash.forEach( (btn) => {
    btn.addEventListener('click', () => {
        let li = btn.parentElement;
        localStorage.setItem(li.id, "");
        // localStorage.removeItem(li.id);
        // li.remove();
        location.reload();
    });
});




let clear = document.querySelector('.clear-btn');

clear.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});


