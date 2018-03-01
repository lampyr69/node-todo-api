const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose
  .connect(process.env.MONGODB_URI)
  .then((arg) => {
    'Connected to MongoDB'
  })
  .catch((err) => {
    console.log('Error connection to MongoDB', err)
  })

module.exports = { mongoose }
