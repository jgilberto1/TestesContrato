const Joi = require('joi');
const request = require('supertest');
const joiAssert = require('joi-assert');
const URL = 'https://jsonplaceholder.typicode.com/';
const PATH = 'posts/1/comments';

describe('GET /posts/1/comments', () => {
  it('retorna lista de posts', done => {
    const postsList = Joi.array().items(Joi.object().keys({
      postId: Joi.number(),
      id: Joi.number(),
      name: Joi.string(),
      email: Joi.string(),
      body: Joi.string()
    }));

    request(URL)
      .get(PATH)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        joiAssert(res.body, postsList);
        done(err);
      });
  });
});