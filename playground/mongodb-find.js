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

  // Fetch data
  // db.collection('Todos').find(); // ALL Todos, returns pointer to the Documents
  // db.collection('Todos').find().toArray().then((docs) => { // gets array of documents and promise
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // query based on values, specify in "find()"
  db.collection('Todos').find({completed: false}).toArray().then((docs) => { // gets array of documents and promise
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find({
    _id: new ObjectID('58471f4e605e40e4dfaca860')   // ID is NOT a string, it is an OBJECT
  }).toArray().then((docs) => { // gets array of documents and promise
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // toArray() - cursor in the documentation
  db.collection('Todos').find().count().then((count) => { // gets array of documents and promise
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // query based on values, specify in "find()"
  db.collection('Users').find({name: 'Veronika'}).toArray().then((users) => { // gets array of documents and promise
    console.log('Users');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //db.close();
});
