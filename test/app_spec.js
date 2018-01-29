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
    
  describe('Verifying all valid conditions ', () => {
    it('responds with status 200', (done) => {
      chai.request('http://localhost:3000')
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.include('Welcome to Acme Ltd.!')
          expect(err).to.be.null;
          done();
        });
    });

    it('responds with status 200 with valid path', (done) => {
        chai.request('http://localhost:3000')
          .get('/valves')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });

      it('contains the right content', (done) => {
        chai.request('http://localhost:3000')
          .get('/about-page')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res.text).to.include('This is the About page')
            done();        
          });
      });  

      it('contains the right content for a different page', (done) => {
        chai.request('http://localhost:3000')
          .get('/valves')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res.text).to.include('Acme Co. valves are amongst the highest quality in the industry')
            done();        
          });
      }); 

  });

  describe('Checking ', () => {
    it('responds with status 404 path not found', (done) => {
      chai.request('http://localhost:3000')
        .get('/values')
        .end((err, res) => {
          expect(res.text).to.have.string('Error: 404 , Page not found!');
          expect(res).to.have.status(404);
          done();
        });
    });
  });

})
