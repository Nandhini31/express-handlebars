var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');

var expect = chai.expect;

var fileSystem = require('fs');
var mdParser = require('marked')
var path = require ('path');

chai.use(chaiHttp);

describe('App', function() {

  describe('check application is reachable', function() {
    it('responds with status 200', function(done) {
      chai.request('http://localhost:3000')
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('check application is reachable', function() {
    it('responds with status 400 path not found', function(done) {
      chai.request('http://localhost:3000')
        .get('/values')
        .end(function(err, res) {
          expect(res).to.have.status(404);
          done();
        });
    });
  });



});