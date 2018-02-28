const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose
  .connect('mongodb://localhost:27017/TodoApp')
  .then((arg) => {
    'Connected to MongoDB'
  })
  .catch((err) => {
    console.log('Error connection to MongoDB', err)
  })

module.exports = { mongoose }
