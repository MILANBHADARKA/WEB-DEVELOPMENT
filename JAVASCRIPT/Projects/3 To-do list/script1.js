let main = document.querySelector('.main');
let box = document.querySelector('.box');
let input = document.querySelector('input');
let ultodos = document.querySelector('.todos');

document.querySelector('.add').addEventListener('click', function(event) {
    event.preventDefault();

    let div = document.createElement('div');
    div.classList.add('todo');
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.alignItems = "center";
    div.style.gap = "10px";

    let li = document.createElement('li');
    li.innerText = input.value;
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
    trash.style.background = 'rgb(255, 200, 0)';
    div.appendChild(trash);

    trash.addEventListener('click', function() {
        div.remove();
    });




    let edit = document.createElement('button');
    edit.innerHTML = '<i class="fas fa-edit"></li>';
    edit.classList.add('edit-btn');
    edit.style.background = 'rgb(255, 200, 0)';
    div.appendChild(edit);

    edit.addEventListener('click', function() {
        edit.remove()
        let newinput = document.createElement('input');
        newinput.classList.add('newinput');
        newinput.style.width = "100px";
        newinput.style.height = "20px";

        newinput.value = li.innerText;
        div.appendChild(newinput);

        let save = document.createElement('button');
        save.innerHTML = '<i class="fas fa-save"></li>';
        save.classList.add('save-btn');
        save.style.background = 'rgb(255, 200, 0)';
        div.appendChild(save);

        save.addEventListener('click', function() {
            li.innerText = newinput.value;
            newinput.remove();
            save.remove();
            div.appendChild(edit);
        });
    });

    ultodos.appendChild(div);

    input.value = "";
});

