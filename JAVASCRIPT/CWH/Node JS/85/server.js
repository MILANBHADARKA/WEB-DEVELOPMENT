var slugify = require('slugify')

let a = slugify('Some string');
console.log(a); // some-string

//if you prefer somthing other than '-' as a separator
let b = slugify('Some string', '_');
console.log(b); // some_string



let c = slugify('Some str&&*((^&&%#ring', '_');
console.log(c);