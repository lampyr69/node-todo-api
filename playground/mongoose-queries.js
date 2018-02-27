const { mongoose } = '../server/db/mongoose.js'
const { Todo } = require('../server/models/todo')
const { User } = require('../server/models/user')
const { ObjectId } = require('mongodb')

// const id = '55a950d9c069cae8db23316a6'
// if (!ObjectId.isValid(id)) {
//   console.log('id not valid')
// }
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log('Todos', todos)
// // })

// // Todo.findOne().then((todo) => {
// //   console.log('Todo', todo)
// // })

// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('Id not found')
//     }
//     console.log('TodoBy Id', todo)
//   })
//   .catch((e) => console.log(e))

const id = '5a94386756eedf781ef31044'

if (ObjectId.isValid(id)) {
  User.findById(id)
    .then((user) => {
      if (!user) {
        // Valid Id, but no user found
        return console.log('User not found')
      }
      console.log('Gefundener User', JSON.stringify(user, undefined, 2))
    })
    .catch((err) => {
      console.log('Fehler:', err)
    })
} else {
  console.log('Objekt Id ist ungültig')
}
