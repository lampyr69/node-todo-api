const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo.js')
const { User } = require('./models/user.js')

const app = express()
let port = 3000

const requestTime = (req, res, next) => {
  req.requestTime = Date.now()
  next()
}

app.use(bodyParser.json())
app.use(requestTime)

// create new todos by post
app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text
  })

  todo
    .save()
    .then((doc) => {
      // resend the created todo back to the user
      res.status(201).send(doc)
    })
    .catch((err) => {
      res.status(400).send(err)
    })

  console.log(`Time: ${req.requestTime} Request:${req.body.text}`)
})

app.get('/todos', (req, res) => {
  Todo.find()
    .then((todos) => {
      res.send({ todos, code: 'Some useful information' })
    })
    .catch((err) => {
      res.status(400).send(e)
    })
})

// start the web app
app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

module.exports = { app }
