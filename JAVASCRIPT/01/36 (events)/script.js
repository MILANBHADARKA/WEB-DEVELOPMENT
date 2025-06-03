// document.getElementById('tajmahal1').onclick = function () {
//     alert("TAJMAHAL")
// }
//there is no problem but this approch is not right.

// document.getElementById("tajmahal1").addEventListener( 'click' , function (e) {
//     alert("TAJMAHAL")
//     this.remove();
// })


//type , timestamp , preventdefault , target , toElement , srcElement , currentTarget ,, clientx , clienty , screenx , screeny
//altkey , ctrlkey , shiftkey , keycode

document.getElementById("google").addEventListener( 'click' , function (e) {
    e.preventDefault();     //to change default behevier
})




document.querySelector('#images').addEventListener('click' , function(e) {
    // console.log(e.target.parentNode);     //this will give parent of e.target

    // console.log(e.target.tagName);        //this will give tag name of e.target

    if(e.target.tagName === 'IMG')
    {
        let removeit = e.target.parentNode
        removeit.remove()
    }

    
    
})


