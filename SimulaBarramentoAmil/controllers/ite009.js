module.exports = function(app) {

        app.post('/ite009/faleConosco', function(req, res) {

            var response = {
                ite009Response:{
                    codResponse: "ITE009-0000"
                }
            };

            console.log('Request ITE - 009 : ' + JSON.stringify(req.body));
            console.log(JSON.stringify(req.body));

            if(req.body.ite009Request.cpf == undefined){
                response.ite009Response.codResponse = "ITE009-0001";
                response.ite009Response.descCodResponse = "Mensagem Invalida";
                console.log("cpf invalido *******");
            }else if (req.body.ite009Request.tipo == undefined) {
                response.ite009Response.codResponse = "ITE009-0001";
                response.ite009Response.descCodResponse = "Mensagem Invalida";
                console.log("tipo invalido *******");
            }else if (req.body.ite009Request.nome == undefined) {
                response.ite009Response.codResponse = "ITE009-0001";
                response.ite009Response.descCodResponse = "Mensagem Invalida";
                console.log("nome invalido *******");
            }else{
                response.ite009Response.numProtocolo = "12345678"
                response.ite009Response.codResponse = "ITE009-0000"
                response.ite009Response.descCodResponse = "Mensagem Valida";
            }

            res.send(response);
        });
};
