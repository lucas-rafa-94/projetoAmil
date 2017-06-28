var bodyParser = require('body-parser');

var response = {
  ite003Response:{
    codResponse: "ITE003-0000"
  }
}

module.exports = function(app) {

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        app.post('/ite003', function(req, res) {
            console.log('Request ITE - 003 : ' + JSON.stringify(req.body));
            console.log(JSON.stringify(req.body));

            if(req.body.ite003Request.cep == undefined){
                response.ite003Response.codResponse = "ITE003-0001";
                console.log("cep invalido *******");
            }else if (req.body.ite003Request.cpf == undefined) {
                response.ite003Response.codResponse = "ITE003-0001";
                console.log("cpf invalido *******");
            }else{
                response.ite003Response.nomeCorretor = "Teste Amil"
                response.ite003Response.codResponse = "ITE003-0000";
            }

            res.send(response);
        });
};
