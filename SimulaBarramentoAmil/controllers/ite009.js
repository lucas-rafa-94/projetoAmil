var response = {
  ite009Response:{
    codResponse: "ITE009-0000"
  }
}

module.exports = function(app) {

        app.post('/ite009', function(req, res) {

            console.log('Request ITE - 009 : ' + JSON.stringify(req.body));
            console.log(JSON.stringify(req.body));

            if(req.body.ite009Request.cpf == undefined){
                response.ite009Response.codResponse = "ITE009-0001";
                console.log("cpf invalido *******");
            }else if (req.body.ite009Request.tipo == undefined) {
                response.ite009Response.codResponse = "ITE009-0001";
                console.log("tipo invalido *******");
            }else if (req.body.ite009Request.nome == undefined) {
                response.ite009Response.codResponse = "ITE009-0001";
                console.log("nome invalido *******");
            }else{
                response.ite009Response.numProtocolo = "12345678"
                response.ite009Response.codResponse = "ITE009-0000";
            }

            res.send(response);
        });
};
