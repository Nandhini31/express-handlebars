var express = require('express')
var expressHandlebars = require('express-handlebars')

var app = express()

var fs = require('fs');
var mdParser = require('marked')
var path = require ('path');

app.engine('handlebars',expressHandlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')
app.set('views', path.join(__dirname, 'views/layouts'));


app.get('/', function (req, res) {
  res.send('Welcome to Acme Ltd.!')
})

app.get('/:id', function(req, res) {
  fs.readFile('content/' + req.params.id + '/index.md', 'utf8', function (err,content) {
  if (err) {
      res.status(404).send('Error: 404 , Page not found!');
  }
  else {
      var parsedContent = mdParser(content)
      console.log("PARSED CONTENT",parsedContent)
      res.render('main',{body:parsedContent})
      }
  });
  });

app.listen(3000, function () {
  console.log('We are listening on port 3000!')
})


module.exports = app;