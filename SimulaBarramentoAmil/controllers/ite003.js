module.exports = function(app) {

        app.get('/venda-online/api/corretor/:cpf/validacep/:cep', function(req, res) {

            var response = {
                ite003Response:{
                    codResponse: "ITE003-0000"
                }
            };

            console.log(req.headers);
            console.log('Request ITE - 003 : ' + JSON.stringify(req.params));

            if(req.header('authorization') === "Bearer 104bf8d3-d4c1-461c-9139-c565635010a3") {

                if (req.params.cep == undefined) {
                    response.ite003Response.codResponse = "ITE003-0001";
                    response.ite003Response.descCodResponse = "Mensagem Invalida";
                    console.log("cep invalido *******");
                } else if (req.params.cpf == undefined) {
                    response.ite003Response.codResponse = "ITE003-0001";
                    response.ite003Response.descCodResponse = "Mensagem Invalida";
                    console.log("cpf invalido *******");
                } else {
                    response.ite003Response.nomeCorretor = "Teste Amil"
                    response.ite003Response.codResponse = "ITE003-0000";
                    response.ite003Response.descCodResponse = "Mensagem Valida";
                }
                res.send(response);
            }else{
                res.send(response);
            }

        });
};
