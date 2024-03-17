async function getdata() {
    return new Promise ( (resolve,reject) => {
        setTimeout( () => {
            resolve(455);
        }, 3000);
    })

}

async function first() {
    console.log("Loding DataTransfer");
    
    console.log("Do something else");

    console.log("Loding DataTransfer");
    
    let data = await getdata();      //await is use in async function only so we dwclare function first
    console.log(data);
//now if getdata function is not resolve then it will not excicute the next line of code.


    console.log("Process data");

    console.log("task 2");    
}

first();
