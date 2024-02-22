// //use of settimeout
// //SYNTAX
// //settimeout(hendler , time)

// setTimeout(function(){
//     console.log("Milan");
// } , 1000);      //1000ms = 1s



// const changetext = function() {
//     document.querySelector('h1').innerHTML = "From Kutiyana"
// }
// const changeme = setTimeout( changetext , 3000)
// //here we declare variable because in future we give reference to cleartimeout. creating variable of settimeout does not affect on work of settimeout()





// //use of cleartimeout
// //SYNTAX
// //cleartimeout(refrence)

// document.querySelector("#stop").addEventListener( 'click' , function(){
//     clearTimeout(changeme)
// }) 
// //now if we click on stop button then text will not be change







// //use of setinterval
// //SYNTAX
// //setinteval(hendlar,time)
// const func = function(str) {
//     console.log(str , Date.now());
// }

// const interval1 = setInterval(func , 1000 , "Hi")




// //use of clearinterval
// //SYNTAX
// //clearinreval(refrence)


// // clearInterval(interval1)







//click on start to intarval and click on stop to stop interval



let intervalId;

document.getElementById('start').addEventListener('click', function() {
    const print = function(str) {
        console.log(str , Date.now());
    }

    intervalId = setInterval(print, 1000 , "HI");

});

document.getElementById('stop').addEventListener('click', function() {
    clearInterval(intervalId);
});

