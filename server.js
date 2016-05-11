var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'dist')));

app.get('/api/tweets', function (req, res) {
  // Get a new token from the Twitter API
  // Import an HTTP library
  // Make a request for the tweets with '#nekoatsume'
  // Send the response back to client
  // Weep softly into a pillow while contemplating the universe
  res.json({hello: 'world'});
});

app.post('/blue', function (req, res) {
  console.log(req.body)
  res.send('HI')
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
