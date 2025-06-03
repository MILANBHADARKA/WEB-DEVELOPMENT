const fs = require('fs');
// console.log(fs);

console.log("starting");

// fs.writeFileSync("first.txt", "Hello world")           
                        
fs.writeFile("second.txt", "How are you?", () => { 
    console.log("Done");

    fs.readFile("second.txt", (error,data) => {
        console.log(error);
        console.log(data.toString());

    })
})

fs.appendFile("first.txt", "Milan Bhadarka", (e,d) => {
    console.log(d);
    
})

console.log('Ending');


