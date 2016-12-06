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

  // deleteMany - result: { n: 3, ok: 1 },
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => { //.then is the success case
  //   console.log(result);
  // });

  // // deleteOne - result: { n: 1, ok: 1 },
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => { //.then is the success case
  //     console.log(result);
  // });

  // findOneAndDelete -- delete and return back the values
  // { lastErrorObject: { n: 1 },
  // value:
  //  { _id: 5847166723831c54e59c9238,
  //    text: 'Something to do',
  //    completed: false },
  // ok: 1 }
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => { //.then is the success case
  //     console.log(result);
  // });

  // can use just callback
  // db.collection('Users').deleteMany({name: 'Veronika'});
  // db.collection('Users').deleteMany({name: 'Veronika'}).then((result) => { //.then is the success case
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id:  new ObjectID('58472d3a605e40e4dfacabd9')
  }).then((result) => { //.then is the success case
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
