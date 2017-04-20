var express = require('express');
var hb = require('express-handlebars');
const PORT = 3000;
var app = express();


app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.listen(PORT, function () {
  console.log("server is listening on port " + PORT);
});
