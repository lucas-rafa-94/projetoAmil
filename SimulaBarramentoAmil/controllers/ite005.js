var response = {
  ite005Response:{
    codResponse: "ITE005-0000"
  }
}

module.exports = function(app) {

        app.post('/ite005/buscaBoleto', function(req, res) {

            console.log('Request ITE - 005 : ' + JSON.stringify(req.body));
            console.log(JSON.stringify(req.body));

            if(req.body.ite005Request.idSisAmil == undefined){
                response.ite005Response.codResponse = "ITE005-0001";
                response.ite005Response.descCodResponse = "Mensagem Invalida";
                console.log("idSisAmil invalido *******");
            }else if (req.body.ite005Request.tpProposta == undefined) {
                response.ite005Response.codResponse = "ITE005-0001";
                response.ite005Response.descCodResponse = "Mensagem Invalida";
                console.log("tpProposta invalido *******");
            }else{
                response.ite005Response.url = "http://127.0.0.1:2000/boleto"
                response.ite005Response.codResponse = "ITE005-0000";
                response.ite005Response.descCodResponse = "Mensagem Valida";
            }
            res.send(response);
        });
};
