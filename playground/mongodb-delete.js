const dbString = 'mongodb://localhost:27017/ToDoApp'

const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(dbString, (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server')
  }
  console.log('Sucess: Connected to MongoDB server')

  const db = client.db('TodoApp')

  // delete many
  // db
  //   .collection('Todos')
  //   .deleteMany({ name: 'Eat lunch' })
  //   .then((result) => {
  //     console.log('Result', result)
  //   })

  // delete one
  // db
  //   .collection('Todos')
  //   .deleteOne({ text: 'Eat lunch' })
  //   .then((result) => {
  //     console.log('Result', result)
  //   })

  // findOneAndDelete
  // db
  //   .collection('Todos')
  //   .findOneAndDelete({ text: 'Eat lunch' })
  //   .then((result) => {
  //     console.log('Result', result)
  //   })

  //5a93c0ee8251fb42e46cf3f1
  // Challenge
  // delete by id
  db
    .collection('Users')
    .findOneAndDelete({
      _id: new ObjectID('5a93c0ee8251fb42e46cf3f1')
    })
    .then((result) => {
      console.log('Delete Record', result)
    })
    .catch()

  db
    .collection('Users')
    .deleteMany({ name: 'Alexander Lampert' })
    .then((result) => {
      console.log('Result', result)
    })

  // client.close()
})
