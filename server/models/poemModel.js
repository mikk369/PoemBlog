const mongoose = require('mongoose');

const poemSchema = mongoose.Schema({
  title: {
    type: String,
    //trim removes white spaces from strings, if spaces are left in
    trim: true,
  },
  text: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

//MODEL
const Poem = mongoose.model('Poem', poemSchema);

module.exports = Poem;
