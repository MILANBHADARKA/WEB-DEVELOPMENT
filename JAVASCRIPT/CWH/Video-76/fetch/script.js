async function getdata() {
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')          //it will return promise

    // let data = await x.json()              //it will parse data in to json      //it will return promise
//by default this is GET request




    // Example POST method implementation:
    let x = await fetch( 'https://jsonplaceholder.typicode.com/posts', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    });


    let data = await x.json();

    return data;

}

async function first() {
    console.log("Loding moduls");

    console.log("Do somthing else");

    console.log("Loding data");

    let data = await getdata();

    console.log(data);

    console.log("process data");

    console.log("Task 2");

}

first();




