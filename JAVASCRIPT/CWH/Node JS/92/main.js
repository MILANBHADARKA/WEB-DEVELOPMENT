const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {

    let siteN = "Addidas"
    let serchT = "search now"
    let arr = ["one", "two", "three", "four", "five"]

  res.render("index", {siteName: siteN, searchText: serchT, arr: arr})
})

app.get('/blog/:slug', (req, res) => {

    let blogT = req.params.slug
    let blogC = "This is my blog"

  res.render("blogspot", {blogTitle: blogT, blogContent: blogC})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})