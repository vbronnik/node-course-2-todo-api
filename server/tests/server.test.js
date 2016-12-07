const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// Create fake todo array for testing GET route
const todos = [{
  text: "First test todo"
}, {
  text: "Second test todo"
}];

// setting up the DB each time before each run
beforeEach((done) => {
  // Remove all elements for POST /todos route testing
  // Todo.remove({}).then(() => done());

  // Insert items from an array for GET and POST /todos route testing
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos); // return to allow for .then
  }).then(() => {
    done();
  }), (err) => {
    if (err) {
      console.log('Unable to insert many', err);
      done(err);
    }
  }
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test Todo text';

    request(app)
      .post('/todos')
      .send({text}) // send the data
      .expect(200) // expect good response
      .expect((res) => { //expect the body aka response
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => { // instead of calling done, need to handle err and res
        if (err) {
          return done(err); // return error to done
        }

        Todo.find({text}).then((todos) => {
          // added {text} in find to look for just that text for the todo on verification
          expect(todos.length).toBe(1);  // assumption is that there is only one in the DB (clear at top)
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));  // to catch any errors from success case above
      });
  });

  it('should not create a new todo with invalid body data', (done) => {
    var invalidText = ' ';

    request(app)
      .post('/todos')
      .send({text: invalidText})  // .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});
