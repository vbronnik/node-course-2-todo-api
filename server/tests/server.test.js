const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// setting up the DB each time before each run
// Remove all elements
beforeEach((done) => {
  Todo.remove({}).then(() => done());
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

        Todo.find().then((todos) => {
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
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
