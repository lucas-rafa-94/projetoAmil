var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var ite003 = require('./controllers/ite003');
var ite005 = require('./controllers/ite005');
var ite009 = require('./controllers/ite009');
var ite006 = require('./controllers/ite006');
var ite018 = require('./controllers/ite018');
var ite001 = require('./controllers/ite001');
var ite011 = require('./controllers/ite011');
var ite004 = require('./controllers/ite004');
var ite012 = require('./controllers/ite012');
var ite007 = require('./controllers/ite007');
var ite019 = require('./controllers/ite019');
var simulaToken = require('./controllers/SimulaToken');


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
ite006(app);
ite018(app);
ite001(app);
ite011(app);
ite004(app);
ite012(app);
ite007(app);
ite019(app);
simulaToken(app);

app.listen(port);

console.log("Simula Barramento Amil running in PORT " + port);
