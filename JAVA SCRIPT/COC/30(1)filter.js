let myarray = [1,2,3,4,5,6,7,8,9,10]

let newnum = myarray.filter( (num) => num > 4);  //this will return that element who setisfied "num > 4" this condition 

console.log(newnum);
console.log("\n\n");

let newnumber = myarray.filter( (num) => {return num > 4})      //here return keyword is necessary(because we use curly bracket) this is consept of "inplisite & expliste return of function" we saw in  previous file(23(2)arrow.js).
console.log(newnumber);
console.log("\n\n");





//now do this work using for each loop

let number = []    //make empty array

myarray.forEach( (num) => {
    if (num > 4) {
        number.push(num);
    }
})

console.log(number);
console.log("\n\n");




//more on filter()


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// console.log(books.);

let userbook = books.filter( (book) => book.genre === 'History' )
console.log(userbook);
console.log("\n\n");

userbook = books.filter( (book) => book.publish>=1995 )
console.log(userbook);
console.log("\n\n");

userbook = books.filter( (item) => {
    return item.publish >=1995 && item.genre === "Science"
})
console.log(userbook);
console.log("\n\n");
