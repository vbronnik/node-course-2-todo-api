var mongoose = require('mongoose');

// tell mongoose to use which promise library (built in)
mongoose.Promise = global.Promise;

// mongoose maintains connection over time, more complex, but easier code
// it does the connection prior to something that requires connection
mongoose.connect('mongodb://localhost:27017/TodoApp');

// export so that others can use
module.exports = {
  mongoose,
};
