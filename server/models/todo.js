var mongoose = require('mongoose');

// create a model (string name, object)
// automatically lower case and plural in the DB name
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    // Setup validation
    required: true,
    minlength: 1, // requires it to be NON-empty string
    trim: true, // remove leading or trailing spaces
  },
  completed: {
    type: Boolean,
    // adding validators
    default: false,
  },
  completedAt: {
    type: Number,
    // adding validators
    default: null,
  }
});

module.exports = {Todo};
