const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = require('should');
const expect = chai.expect;

const fileSystem = require('fs');
const mdParser = require('marked')
const path = require ('path');

chai.use(chaiHttp);


describe('App', () => { 
    
  describe('check application is reachable', () => {
    it('responds with status 200', (done) => {
      chai.request('http://localhost:3000')
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          done();
        });
    });
  });

  describe('check application is reachable', () => {
    it('responds with status 400 path not found', (done) => {
      chai.request('http://localhost:3000')
        .get('/values')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });

})
