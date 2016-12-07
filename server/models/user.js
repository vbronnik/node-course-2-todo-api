var mongoose = require('mongoose');

// creating model
var User = mongoose.model('User', {
  email: {
    type: String,
    // Setup validation
    required: true,
    minlength: 1, // requires it to be NON-empty string
    trim: true, // remove leading or trailing spaces
  }
});

module.exports = {User};
