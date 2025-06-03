import fs from "fs/promises"

let a = await fs.readFile("first.txt")
console.log(a.toString());

let b = await fs.appendFile("first.js", "\nthis is amaxing promise");
console.log(b);
