//crud operation
use('CrudDB')

console.log(db);

db.createCollection("courses")

//Create
// db.courses.insertOne({
//         "name": "Java",
//         "price": 20000,
//         "instructure": "MilanBhadarka"
// })

// db.courses.insertMany(
//     [
//         {
//           "name": "Java",
//           "price": 20000,
//           "instructure": "MilanBhadarka"
//         },
//         {
//           "name": "Python",
//           "price": 15000,
//           "instructure": "John Doe"
//         },
//         {
//           "name": "JavaScript",
//           "price": 18000,
//           "instructure": "Jane Doe"
//         },
//         {
//           "name": "C++",
//           "price": 17000,
//           "instructure": "Richard Roe"
//         },
//         {
//           "name": "Ruby",
//           "price": 16000,
//           "instructure": "Doe John"
//         }
//       ]
// )

// let b = db.courses.findOne({price: 20000})
// console.log(b);

// let a = db.courses.find({price: 20000})
// // console.log(a);
// console.log(a.count());
// console.log(a.toArray());




//update

// db.courses.updateOne({price: 20000}, {$set:{price: 30000}})

// db.courses.updateMany({price: 20000}, {$set:{price: 30000}})





//delete

// db.courses.deleteOne({price: 15000})

// db.courses.deleteMany({price: 15000})






//other operator
// https://www.mongodb.com/docs/manual/reference/operator/query/