// https://www.npmjs.com/package/mongodb

import Mongoose from "mongoose";
import express from "express";
import todo from "../models/todo.js";

let a = await Mongoose.connect("mongodb://localhost:27017/todo")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})