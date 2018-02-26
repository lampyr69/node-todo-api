const dbString = 'mongodb://localhost:27017/ToDoApp'

const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(dbString, (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server')
  }
  console.log('Sucess: Connected to MongoDB server')

  const db = client.db('TodoApp')

  db
    .collection('Todos')
    .find({ _id: new ObjectID('5a916a05142e7b60f5873e0d') })
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2))
    })
    .catch((err) => {
      console.log('unable to get documents', err)
    })

  // db
  //   .collection('Todos')
  //   .find({})
  //   .count()
  //   .then((count) => {
  //     console.log(`Anzahl von Todos: ${count}`)
  //   })
  //   .catch((err) => {
  //     console.log('unable to fetxh todos', err)
  //   })

  db
    .collection('Users')
    .find({ name: 'Tim Lampert' })
    .toArray()
    .then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2))
    })
    .catch((err) => {
      console.log('unable to fetch todos', err)
    })

  client.close()
})
