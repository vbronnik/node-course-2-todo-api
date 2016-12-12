const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// sample existing id to use for queries
var id = '58476f506f01525ae5ce3b97';
// var id = '68476f506f01525ae5ce3b97'; // ID doesnt exist but VALID
// var id = '58476f506f01525ae5ce3b9711'; // ID doesnt exist and INVALID (bad length)

var userId = '5847437e67655e57c4988f5f';

// Verify if object ID is valid first
 // if (!ObjectID.isValid(id)) {
 //   console.log('ID not valid');
 // }

 // Verify if object ID is valid first
  if (!ObjectID.isValid(userId)) {
    console.log('ID not valid');
  }

// query for array of documents
// query object
// Todo.find({
//   _id: id,
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// query for single document
// use this if you are looking for just one
// return will NOT be an empty array
// Todo.findOne({
//   _id: id,
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// query by ID
// Todo.findById(id).then((todo) => {
//   // handle error case where ID doesnt exist
//   if (!todo)
//   {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => {
//   if (e) {
//     console.log(e);
//   }
// });  // catches an INVALID ID

User.findById(userId).then((user) => {
  // handle error case where ID doesnt exist
  if (!user)
  {
    // return to stop the execution
    return console.log('User ID not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  if (e) {
    console.log(e);
  }
});
