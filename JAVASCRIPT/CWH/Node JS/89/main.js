const express = require('express')
const blog = require('./routes/blog.js')
const shop = require('./routes/shop.js')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey it's a get request");
    res.send('Hello World!')
}).post('/', (req, res) => {
    console.log("Hey it's a post request");
    res.send('Hello World! post')
}).put('/', (req, res) => {
    console.log("Hey it's a put request");
    res.send('Hello World! put')
})

app.get("/index", (req, res) => {
    res.sendFile("templetes/index.html", {root: __dirname});
})
app.get("/download", (req, res) => {
    res.download("templetes/IMG.png", {root: __dirname});
})
app.get("/api", (req, res) => {
    res.json({a:1, b:2, c:3, d:4});
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})