var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json()); // return is an object that will be passed to express

// setup a route for resource creation
// later GET /todos/_id
app.post('/todos', (req, res) => {
  //console.log(req.body);

  // Create a new object setting to the POST/ request
  var todo = new Todo({
    text: req.body.text,
  });

  // Save the model or error out
  todo.save().then((doc) => {
    res.send(doc); // 200 status is provided by express by default
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {

  // gets all the todos
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});


app.listen(3000, () => {
  console.log(`Started on port 3000`);
});

module.exports = {app};




// Examples:
//
// var newTodo = new Todo({
//   text: 'Cook dinner', // dont have to specify all since we did NOT require any of them
// });

// Saved todo { __v: 0, text: 'Cook dinner', _id: 58473b13a90d51575d848ac2 }
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (err) => {
//   console.log('Unable to save todo');
// });

// var otherTodo = new Todo({
//   // if you use 35 or true in there, they will complete and be wrapped in quotes as text
//   // does not always follow validation specified in the object definition
//   // this is due to typecasting done by mongoose
//   text: 'Cook breakfast',
//   complete: true,
//   completedAt: 123,
// });

// {
//   "__v": 0,
//   "text": "Cook breakfast",
//   "complete": true,
//   "completedAt": 123,
//   "_id": "58473dcee96d43578f1909f4"
// }
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to save todo');
// });
//
//
// var newUser = new User({
//   email: 'vbronnik@gmail.com',
// });
//
// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to save user');
// });
