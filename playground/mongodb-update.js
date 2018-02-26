const dbString = 'mongodb://localhost:27017/ToDoApp'

const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect(dbString, (err, client) => {
  if (err) {
    return console.log('unable to connect to MongoDB server')
  }
  console.log('Sucess: Connected to MongoDB server')

  const db = client.db('TodoApp')

  db
    .collection('Users')
    .findOneAndUpdate(
      {
        _id: new ObjectID('5a93be90131cf86d262382f8')
      },
      {
        $set: { name: 'Tim Yngvi' },
        $inc: { age: 1 }
      },
      { returnOriginal: false }
    )
    .then((result) => {
      console.log('Delete Record', result)
    })
    .catch((err) => {
      console.log(('Error:', err))
    })

  // client.close()
})
