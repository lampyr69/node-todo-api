//import { ifError } from 'assert'

//const MongoClient = require('mongodb').MongoClient
const dbString = 'mongodb://localhost:27017/ToDoApp'

const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(dbString, (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server')
  }

  console.log('Sucess: Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne(
  //   {
  //     text: 'Something to do 1',
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert ToDo', err)
  //     }

  //     console.log(JSON.stringify(result.ops, undefined, 2))
  //   }
  // )

  // db.collection('Users').insertOne(
  //   {
  //     name: 'Alexander Lampert',
  //     age: 50,
  //     location: 'Heidelberg'
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert User', err)
  //     }

  //     console.log(JSON.stringify(result.ops, undefined, 2))
  //   }
  // )

  client.close()
})
