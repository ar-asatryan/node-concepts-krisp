const express = require("express");
const app = express();

const posts = [
  {
    username: "john",
    age: 15
  }, {
    username: "george",
    age: 23
  }
]

app.use(logger)

app.get('/', (req, res, next) => {
  console.log("HOME PAGE");
  res.send("HOME PAGE ...")
  next()
})

app.get('/users', auth, (req, res, next) => {
    console.log("USERS logging ...");
    res.send("USERS PAGE ...")
    next()
})

app.get( '/posts', (req, res, next) => {
    console.log("Logging POSTS....");
    res.status(200).json(posts)
    next()
})



function logger (req, res, next) {

  console.log("Logging...")
  next()

}

function auth (req, res, next) {

  console.log("Auth  Users...")
  next()

}

module.exports = app;