const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app');

/**
 *** Testing get all POSTS endpoint
 */
describe('GET /api/post', function() {
  this.timeout(10000);
  it('respond with json containing a list of posts', function(done) {
    request(app)
      .get('/api/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done);
  });
});

/**
 *** Testing post words endpoint
 */
describe('POST /api/posts', function() {
  let data = {
    text: 'testesttesttt'
  };
  it('respond with 200 created', function(done) {
    request(app)
      .post('/api/posts')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end(err => {
        if (err) return done(err);
        done();
      });
  });
});

/**
 *** Testing post not valid words endpoint
 */
describe('POST /api/posts', function() {
  let data = {
    text: '1'
  };
  it('respond with 400 not valid', function(done) {
    request(app)
      .post('/api/posts')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(400)
      .expect('{"text":"El texto debe ser de 10 a 300 caracteres"}')
      .end(err => {
        if (err) return done(err);
        done();
      });
  });
});
