var express = require('express');
var Datastore = require('nedb');
var db = new Datastore({ filename: 'mood.db' });
var app = express();

app.set('view engine', 'jade');
app.use(express.static('public'));

// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  db.loadDatabase();
  db.find({ }, function(err, docs) {
    console.log(docs);
    var sum = docs
      .map(function(doc) { return doc.value; })
      .reduce(function(a, b) {
        return a + b
      }, 0);
    sum = Math.ceil(sum / docs.length);
    console.log(sum);
    return res.render('index', { icon: sum + '.gif' });
  });
});

app.get('/mood/:mood', function(req, res) {
  var mood = parseInt(req.params.mood);
  db.insert({ value: mood }, function(err, doc) {
    res.send('OK');
  });
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
