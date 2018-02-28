const { mongoose } = require('../db/mongoose')

const User = mongoose.model('User', {
  email: {
    type: String,
    minlength: 1,
    trim: true,
    required: true
  }
})

module.exports = {
  User
}
