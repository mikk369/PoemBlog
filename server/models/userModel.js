const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please insert email'],
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
