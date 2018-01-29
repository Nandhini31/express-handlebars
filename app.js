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

app.listen(3000, function () {
  console.log('We are listening on port 3000!')
})


module.exports = app;