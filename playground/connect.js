const { MongoClient, ObjectID } = require('mongodb')

const dbString = 'mongodb://localhost:27017/ToDoApp'

const mongoDB = MongoClient.connect(dbString)
mongoDB
  .then((client) => {
    console.log('Sucess: Connected to MongoDB server')
    const db = client.db('TodoApp')

    db.collection('Todos').insertOne(
      {
        text: 'Something to do 1',
        completed: false
      },
      (err, result) => {
        if (err) {
          return console.log('Unable to insert ToDo', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2))
      }
    )

    client
      .close()
      .then((_) => console.log('Connection successfully closed'))
      .catch((e) => console.log(e))
  })
  .catch((e) => console.log('Unable to connect to mongoDB', e))
