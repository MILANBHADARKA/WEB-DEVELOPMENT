let main = document.querySelector('.main')
let start = document.createElement('button');
start.classList.add('start');
start.innerText = 'Start';
main.appendChild(start);


document.querySelector('.start').addEventListener('click', (event) => {
    event.preventDefault();
    let random = Math.floor(Math.random()*3)+1;

    let userinput = prompt('Enter your choice: snack, water or gun');

    let userans = document.createElement('p');
    let computerans = document.createElement('p');

    userans.classList.add('userans');
    computerans.classList.add('computerans');

    main.appendChild(userans);
    main.appendChild(computerans);

    // userans.innerText = 'Your choice: ' + userinput;
    // computerans.innerText = 'Computer choice: ' + random;

    let result = document.createElement('p');
    result.classList.add('result');
    main.appendChild(result);

    if(userinput==1 || userinput=="s" || userinput=="S")
    {   
        userans.innerText = 'Your choice: ' + "Snack";

        if(random==1)
        {   
            computerans.innerText = 'Computer choice: ' + "Snack";
            result.innerText = 'Draw';
        }
        else if(random==2)
        {
            computerans.innerText = 'Computer choice: ' + "Water";
            result.innerText = 'You Win';
        }
        else if(random==3)
        {
            computerans.innerText = 'Computer choice: ' + "Gun";
            result.innerText = 'You Lose';
        }
    }
    else if(userinput==2 || userinput=="w" || userinput=="W")
    {
        userans.innerText = 'Your choice: ' + "Water";
        if(random==1)
        {
            computerans.innerText = 'Computer choice: ' + "Snack";
            result.innerText = 'You Lose';
        }
        else if(random==2)
        {
            computerans.innerText = 'Computer choice: ' + "Water";
            result.innerText = 'Draw';
        }
        else if(random==3)
        {
            computerans.innerText = 'Computer choice: ' + "Gun";
            result.innerText = 'You Win';
        }
    }
    else if(userinput==3 || userinput=="g" || userinput=="G")
    {
        userans.innerText = 'Your choice: ' + "Gun";
        if(random==1)
        {
            computerans.innerText = 'Computer choice: ' + "Snack";
            result.innerText = 'You Win';
        }
        else if(random==2)
        {
            computerans.innerText = 'Computer choice: ' + "Water";
            result.innerText = 'You Lose';
        }
        else if(random==3)
        {
            computerans.innerText = 'Computer choice: ' + "Gun";
            result.innerText = 'Draw';
        }
    }
    else
    {
        let result = document.createElement('p');
        result.classList.add('result');
        main.appendChild(result);
        result.innerText = 'Invalid input';
    }

});


