const _ = require('lodash')
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
        return res.status(404).send({})
      }
      res.status(200).send({ todo })
    })
    .catch((e) => {
      res.status(400).send({ e })
    })
})

// delete URI
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id

  if (!ObjectID.isValid(id)) {
    res.status(404).send({ name: id })
  } else {
    Todo.findByIdAndRemove(id)
      .then((todo) => {
        if (!todo) {
          res.status(404).send({ id })
        } else {
          res.status(200).send({ todo })
        }
      })
      .catch((e) => {
        res.status(400).send({})
      })
  }
})

// update resources
app.patch('/todos/:id', (req, res) => {
  const id = req.params.id
  const body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({ name: id })
  }
  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(
    id,
    { $set: body },
    {
      new: true
    }
  )
    .then((todo) => {
      if (!todo) {
        return res.status(400).send()
      }
      res.send({ todo })
    })
    .catch((e) => {
      res.status(400).send()
    })
})

// start the web app
app.listen(port, () => {
  console.log(`Started on port ${port}`)
})

module.exports = { app }
