const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');

    if(height === " " || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter valid value this is ${height}`;
    }
    else if(weight === " " || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter valid value this is ${weight}`;
    }
    else{
      const bmi = (weight / ((height*height)/10000)).toFixed(2)
      //show the result
      results.innerHTML = `<span>${bmi}</span>` 
    }

    if(bmi<18.6){
      advice.innerHTML = `<span>Under weight</span>`
    }
    else if (bmi >=18.6 && bmi <= 24.9){
      advice.innerHTML = `<span>Normal range</span>`
    }
    else if (bmi > 24.9){
      advice.innerHTML = `<span>over weight</span>`
    }
    else{
      advice.innerHTML = `<span> </span>`
    }
});