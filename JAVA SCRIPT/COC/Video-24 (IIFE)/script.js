//Imediately Invoked Function Expression (IIFE)


( function print() {               
    console.log("Hello");
} )();            //here ";" is neccery to tell compiler that function is end.
//here function will execute immediately.

//remember that use of IIFE is not only to execute function immediately but to save function from global polution
//this is two advantage of IIFE.



(  () => {
    console.log("Hi how are you?");
} ) ();


 