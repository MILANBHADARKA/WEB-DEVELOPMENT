const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const blog = require('./routes/blog.js')

app.use(express.static('public'))

app.use('/blog', blog)


//Middleware 1
app.use((req, res, next) => {

  req.milan = "I am Milan"

  fs.appendFileSync('log.txt', `${Date.now()} - ${req.method} - ${req.url}\n`)

  console.log('m1')
  next()
});

//Middleware 2
app.use((req, res, next) => {
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello about!')
})

app.get('/contact', (req, res) => {
  res.send('Hello contact!' + req.milan)      //req.milan = "I am Milan" because of middleware 1
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})