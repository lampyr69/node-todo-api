const { ObjectId } = require('mongodb')

const { mongoose } = '../server/db/mongoose.js'
const { Todo } = require('../server/models/todo')

// Todo.remove({})
// const { User } = require('../server/models/user')
//   .then((results) => {
//     console.log(results)
//   })
//   .catch((e) => {
//     console.log(e)
//   })

// Todo.findOneAndRemove
// Todo.findByIdAnRemove

Todo.findByIdAndRemove('5a96e4ab56467d5dbe5699d4')
  .then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2))
  })
  .catch((e) => {
    console.log('Error', e)
  })
