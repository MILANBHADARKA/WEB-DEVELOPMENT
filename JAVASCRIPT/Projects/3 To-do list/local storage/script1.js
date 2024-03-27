let main = document.querySelector('.main');
let box = document.querySelector('.box');
let input = document.querySelector('input');
let ultodos = document.querySelector('.todos');
let add = document.querySelector('.add');


let i= 0;

for(i=0;i<localStorage.length;i++) {
    let div = document.createElement('div');
    div.classList.add('todo');
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.gap = "10px";

    let li = document.createElement('li');
    li.innerText = localStorage.getItem(i);
    li.classList.add('todo-item');
    div.appendChild(li);

    let complete = document.createElement('button');
    complete.innerHTML = '<i class="fas fa-check-circle"></li>';
    complete.classList.add('complete-btn');
    complete.classList.add('uncomplete');
    complete.style.background = 'rgb(255, 200, 0)';
    div.appendChild(complete);

    complete.addEventListener('click', function() { 
        if(complete.classList.contains('uncomplete')) {
            complete.classList.remove('uncomplete');
            complete.classList.add('complete');
            li.style.textDecoration = "line-through";
        } else {
            complete.classList.remove('complete');
            complete.classList.add('uncomplete');
            li.style.textDecoration = "None";
        }
    });


    let trash = document.createElement('button');
    trash.innerHTML = '<i class="fas fa-trash"></li>';
    trash.classList.add('trash-btn');
    trash.id = i;
    trash.style.background = 'rgb(255, 200, 0)';
    div.appendChild(trash);



    let edit = document.createElement('button');
    edit.innerHTML = '<i class="fas fa-edit"></li>';
    edit.classList.add('edit-btn');
    edit.id = i;
    edit.style.background = 'rgb(255, 200, 0)';
    div.appendChild(edit);

    ultodos.appendChild(div);

}


add.addEventListener('click', function(event) {
    event.preventDefault();
    let count = localStorage.length;

    if(input.value == "") {
        add.disable = true;
        return;
    }

    localStorage.setItem(count, input.value);


    input.value = "";
    location.reload();
});


let trash = document.querySelectorAll('.trash-btn');
trash.forEach(function(item) {
    item.addEventListener('click', function() {
        let id = item.id;
        localStorage.removeItem(id);
        location.reload();
    });
});


let edit = document.querySelectorAll('.edit-btn');
edit.forEach(function(item) {

    let edit = document.querySelector('.edit-btn');
    let div = document.querySelector('.todo');
    let li = document.querySelector('.todo-item');


    item.addEventListener('click', function() {
        edit.remove()
        let newinput = document.createElement('input');
        newinput.classList.add('newinput');
        newinput.style.width = "100px";
        newinput.style.height = "20px";

        newinput.value = localStorage.getItem(item.id);
        div.appendChild(newinput);

        let save = document.createElement('button');
        save.innerHTML = '<i class="fas fa-save"></li>';
        save.classList.add('save-btn');
        save.style.background = 'rgb(255, 200, 0)';
        div.appendChild(save);

        save.addEventListener('click', function() {
            
            let id = item.id;
            localStorage.setItem(id, newinput.value);
            location.reload();
        });
    });
});