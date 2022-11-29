const mongoose = require('mongoose');

const poemSchema = mongoose.Schema({
  userId: {
    type: String,
  },
  title: {
    type: String,
    //trim removes white spaces from strings, if spaces are left in
    trim: true,
    required: [true, 'A poem must have a Title'],
    maxlength: [30, 'Poem name must have less or equal 30 characters'],
    minlength: [1, 'Poem name must have more or equal than 1 characters'],
  },
  Text: {
    type: String,
    required: [true, 'A poem must have a content'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//MODEL
const Poem = mongoose.model('Poem', poemSchema);

module.exports = Poem;
