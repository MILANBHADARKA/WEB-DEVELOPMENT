//store in variable

const promise1 = new Promise(function(resolve,reject) {
    //Do an async task
    //DB calls , crptography , network

    setTimeout(function() {
        console.log("Async task is complete");
        resolve()
    },1000)
})

promise1.then(function(){
    console.log("Promise comsumed");
})



//without storing in variable
new Promise(function( resolve , reject ) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log("async 2 resolved");
})




const promise3 = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username : "Milan", email : "Milan@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
    console.log(user.username);
    console.log(user.email);
})





const promise4 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true

        if(!error){
            resolve({username : "Milan", email : "Milan@gmail.com" , password : "123"})
        }

        else{
            reject('ERROR : Somthing went wrong.')
        }
    },1000)
})

//chaining of .then()
promise4.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){   
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolve or rejected");
})








const promise5 = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true

        if(!error){
            resolve({username : "JAVA-SCRIPT", email : "Milan@gmail.com" , password : "123"})
        }

        else{
            reject('ERROR : JS went wrong.')
        }
    },1000)
})

async function consumePromise5() {
    try{
        {
            const response = await promise5
        }
    }
    catch{
        console.log('error...');
    }
}

consumePromise5()







// async function getallusers() {
//      try{
//         const response = await fetch('https://api.github.com/users/milanbhadarka')

//         const data = await response.json();
//         console.log(data);
        
//      }
//      catch(error) {
//         console.log("E : ", error);
//      }
// }

// getallusers()


//do this work with use of .fatch and .then


fetch('https://api.github.com/users/milanbhadarka').then((abc) => {
    return abc.json();
}).then((data) => {
    console.log(data);
}).catch((error) => console.log("errorrrrrr"))