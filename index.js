var express = require('express');
var hb = require('express-handlebars');
const PORT = 3000;
var app = express();

var hbs = hb.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
    foo: function () { return 'FOO!'; },
    bar: function () { return 'BAR!'; }
  }
});

// For enabling view caching vs compile and render again
app.enable("view cache");

app.engine('handlebars', hb({defaultLayout: 'main'}));
// Setting the app's "view engine" setting will make that value the default file extension used for looking up views.
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home');
});

app.get('/test', function (req, res) {
  res.render('test', {
    showTitle: true,

    // Override `foo` helper only for this rendering.
    helpers: {
      foo: function () { return 'foo.'; }
    }
  });
});

app.listen(PORT, function () {
  console.log("server is listening on port " + PORT);
});
