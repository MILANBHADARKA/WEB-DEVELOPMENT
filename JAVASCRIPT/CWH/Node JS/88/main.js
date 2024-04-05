const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))    //this will allow user to see all files that are in public folder

//app.get or app.post or app.put or app.delete (path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Us.')
})

app.get('/contact', (req, res) => {
  res.send('Contact Me.')
})

app.get('/blog', (req, res) => {
  res.send('Blogs')
})
// app.get('/blog/js', (req, res) => {
//   res.send('Hello Javascript')
// })
// app.get('/blog/py', (req, res) => {
//   res.send('Hello Python')
// })

//this is not manintainable code
//so see below


app.get('/blog/:slug', (req,res) => {
    //for this url http://localhost:3000/blog/js?mode=dark&region=in
    console.log(req.params)  //will output { slug: 'js' }
    console.log(req.query);   //will output { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug}`)
})

app.get('/blog/:slug/:second', (req,res) => {
    res.send(`Hello ${req.params.second}`)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})