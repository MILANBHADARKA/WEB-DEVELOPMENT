
// Select the database to use.
use('coursesdata');

// Insert a few documents into the courses collection.
db.getCollection('course').insertMany([
        {
          "name": "Java",
          "price": 20000,
          "instructure": "MilanBhadarka"
        },
        {
          "name": "Python",
          "price": 15000,
          "instructure": "John Doe"
        },
        {
          "name": "JavaScript",
          "price": 18000,
          "instructure": "Jane Doe"
        },
        {
          "name": "C++",
          "price": 17000,
          "instructure": "Richard Roe"
        },
        {
          "name": "Ruby",
          "price": 16000,
          "instructure": "Doe John"
        }
]);

// Print a message to the output window.
console.log(`Done inserting data.`);
