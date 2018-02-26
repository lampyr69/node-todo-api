const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo.js')
const { User } = require('./models/user.js')

const app = express()
let port = 3000

app.use(bodyParser.json())

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

  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Started on port ${port}`)
})
