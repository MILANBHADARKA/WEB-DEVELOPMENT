//scope in nested function


//we can also use or call function before declration means here if we call then this is valid
// one();     //use before declaration is valid


function one()
{
    let username = "Milan"

    function two()
    {
        let website = "Youtube"; 
        console.log(`user name is ${username}`);     //this is valid.
    
    }
    // console.log(`website is ${website}`);        //this is not valid.

//for understanding remember that parent would not take items from child but child would takes item from parent.

    two();
}

// two();                  //this is also not valid

one();



//++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++

let add = function(num){              //in this case we can not use or call function before decleration
                                          //this is also function but some time we can call it expression.
    return num + 2 ;
}

// console.log(`${add(5)}`);
let z=add(5);
console.log(z);
       
