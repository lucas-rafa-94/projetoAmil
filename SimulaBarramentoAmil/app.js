var express = require('express');
var app = express();

var ite003 = require('./controllers/ite003');
var port = process.env.PORT || 3000;

ite003(app);

app.listen(port);

console.log("Simula Barramento Amil running in PORT " + port);
