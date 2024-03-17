let random = Math.floor(Math.random() * 100) + 1;
console.log(random);

let submit = document.querySelector('.submit');
let count = 10;


let p = document.createElement('p');   //for displaying the result
let g_remain = document.createElement('span'); //for saw count of remaining guesses
g_remain.innerText = count;    //initially 10 guesses
document.querySelector('.r-guess').appendChild(g_remain);    

submit.addEventListener('click', function (event) {

    event.preventDefault();

    remove();

    let number = document.querySelector('#number').value;   //getting the input value


    p.classList.add('p');
    p.classList.add('remove');
    p.innerText = ' ';
    document.querySelector('.result').appendChild(p);


    let p_guess = document.createElement('span');   //for displaying the previous guesses
    p_guess.classList.add('previous_guess');
    document.querySelector('.p-guess').appendChild(p_guess);
    let previousguess = () => {
        p_guess.innerText = number + ',';
    }


    g_remain.classList.add('guess_remaining');
    g_remain.classList.add('remove');
    document.querySelector('.r-guess').appendChild(g_remain);


    if(count>0){
        if(number>100 || number<1){
            p.innerText = 'Please enter a number between 1 and 100';
            g_remain.innerText = count;
        }
        else if(number == random){
            p.innerText = 'You guessed it right';
            previousguess();
            guesscount();
            endGame();
        }
        else if(number<random){
            p.innerText = 'Number is too low';
            previousguess();
            guesscount();
        }
        else if(number>random){
            p.innerText = 'Number is too high';
            previousguess();
            guesscount();
        }
        else{
            p.innerText = 'Please enter a valid number';
            g_remain.innerText = count;
        }
    }

    else if(count == 0){
        endGame();
        g_remain.innerText = '0';
    }

    document.querySelector('#number').value = '';   //clearing the input field

});

let remove = () => {   //removing the previous result

    let a = document.querySelectorAll('.remove');

    a.forEach( (element) => {
        element.remove();
    });

}

let guesscount = () => {   //decreasing the count of remaining guesses
    count--;
    g_remain.innerText = count;
    if(count == 0){
        endGame();
    }
}

let endGame = () => {   //disabling the input field and displaying the restart button
    p.innerText = 'Game over. The number was ' + random;

    let restart = document.createElement('button');
    restart.classList.add('restart');
    restart.innerText = 'Restart';
    document.querySelector('.result').appendChild(restart);

    restart.addEventListener('click', function (event) {
        location.reload();
    });

    submit.disabled = true;


}
