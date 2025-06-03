// let prom1  = new Promise( (resolve,reject) => {
//         let a = Math.random();

//         if(a<.5){
//             reject("No number is not supporting for promise1");
//         }
//         else{
//             setTimeout( () => {
//                 console.log('Yes i am done  for promise1');
//                 resolve("Milan ( for promise1)")    
//             } , 1000)
//         }
// })


// prom1.then( (a) => {         //here value of "a" is that we pass in resolve
//     console.log(a);
// }).catch( (b) => {        //here value of "b" is that we pass in reject
//     console.log(b);
// })


//we can also write like that
// prom1.then( (a) => {
//     console.log(a);
// })
// prom1.catch( (err) => {
//     console.log(err);
// })

//in simple catch is excicute when promise will reject and then will exicute when promise will resolve.






//promise chaining


let prom2  = new Promise( (resolve,reject) => {
    let a = Math.random();

    if(a<.5){
        reject("No number is not supporting  for promise2");
    }
    else{
        setTimeout( () => {
            console.log('Yes i am done  for promise2');
            resolve("Milan ( for promise2)")    
        } , 1000)
    }
})

prom2.then( (a) => {
    console.log(a);
    return 2;             //here we return constant but we can also return another promise
}).then( (b) => {
    console.log(b);
    return 3;
}).then( (c) => {
    console.log(c);
}).catch( (err) => {
    console.log(err);
})
