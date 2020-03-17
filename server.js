var express = require('express');
var app = express();
app.engine('html', require('ejs').renderFile);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));


var indexRouter = require('./routes/index');

app.use('/', indexRouter);


var server = app.listen(80, function() {
    console.log("Express Server running at http://localhost:80");
});

