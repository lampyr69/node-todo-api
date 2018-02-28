const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo.js')
const { User } = require('./models/user.js')

const app = express()
const port = process.env.PORT || 3000

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

  //console.log(`Request:${req.body.text}`)
})

app.get('/todos', (req, res) => {
  Todo.find()
    .then((todos) => {
      res.send({ todos, code: 'Some useful information' })
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

//
app.get('/todos/:id', (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({})
  }

  Todo.findById(id)
    .then((todo) => {
      if (!todo) {
        res.status(404).send({})
      }

      res.status(200).send({ todo })
    })
    .catch((e) => {
      res.status(400).send({})
    })
})

// delete URI
app.delete('/todos/:id', (req, res) => {
  // get the id
  const id = req.params.id
  console.log('Got id', id)

  if (!ObjectID.isValid(id)) {
    console.log('Id is not valid', id)
    return res.status(404).send({})
  }

  Todo.findByIdAndRemove(id)
    .then((todo) => {
      if (!todo) {
        console.log('Id valid but not found')
        return res.status(404).send({})
      }
      res.status(200).send(todo)
    })
    .catch((e) => {
      res.status(400).send({})
    })
})

// start the web app
app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

module.exports = { app }
