// use destructuring stead
// can make new object ids using the object created
const {MongoClient, ObjectID} = require('mongodb');


// URL (production:heroku), callback
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err)
  {
    return console.log('Inable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // Updating Documents
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58472bc7605e40e4dfacab20')
  // }, { // use mongodb update operators
  //   $set : {
  //     completed: true
  //   }
  // }, { // use option types, returnOriginal is defaulted to true
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58471be5ecef5555873c3639')
  }, {
    $set: {
      name: 'Veronika'
    }, // change the name
    $inc: {
      age: 1
    }  // increment age by one
  }, { // use option types, returnOriginal is defaulted to true
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
