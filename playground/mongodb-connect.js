//const MongoClient = require('mongodb').MongoClient;

// use destructuring stead
// can make new object ids using the object created
const {MongoClient, ObjectID} = require('mongodb');

// can incorporate anywhere without using mondo DB on the backend
// var obj = new ObjectID();
// console.log(obj);

// object destructuring - pulls properties into vars
// var user = {name: 'veronika', age: 37};
// var {name} = user;  // pulls off just the one property into a var
// console.log(name);

// URL (production:heroku), callback
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err)
  {
    return console.log('Inable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // // whatever you want to name it, document and callback
  // db.collection('Todos').insertOne({
  //   text:'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  //
  // });

  // whatever you want to name it, document and callback
  // db.collection('Users').insertOne({ // document
  //   name: 'Veronika',
  //   age: 37,
  //   location: 'Boulder,CO',
  // }, (err, result) => {             // callback
  //   if (err) {
  //     return console.log('Unable to insert user', err)
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  //   // console.log(result.ops[0]._id);  // accesses one id and returns JUST ID
  //   // console.log(result.ops[0]._id.getTimestamp());   // gets timestamp for the doc created
  // });

  db.close();
});
