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

    it('responds with status 200 for valid path', (done) => {
        chai.request('http://localhost:3000')
          .get('/valves')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
          });
      });

      it('contains the right content for the route', (done) => {
        chai.request('http://localhost:3000')
          .get('/about-page')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res.text).to.include('<h1 id="this-is-the-about-page">This is the About page</h1>')
            done();        
          });
      });  

      it('contains the right content for the route', (done) => {
        chai.request('http://localhost:3000')
          .get('/about-page')
          .end((err, res) => {
            expect(err).to.be.null;
            expect(res.text).to.include("<p>Acme Co. is a reputable maker of widgets and is an international brand.</p>\n<p>Thank you for your interest in our services. Please contact us at enquiries@acme.com.</p>")
            done();        
          });
      }); 
  });

  describe('Checking returns error for invalid route', () => {
    it('responds with status 404 path not found', (done) => {
      chai.request('http://localhost:3000')
        .get('/values')
        .end((err, res) => {
          expect(res.text).to.include('Error: 404 , Page not found!');
          expect(res).to.have.status(404);
          done();
        });
    });
  });

})
