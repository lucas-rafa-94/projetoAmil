var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var ite003 = require('./controllers/ite003');
var ite005 = require('./controllers/ite005');
var ite009 = require('./controllers/ite009');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

ite003(app);
ite005(app);
ite009(app);

app.listen(port);

console.log("Simula Barramento Amil running in PORT " + port);
