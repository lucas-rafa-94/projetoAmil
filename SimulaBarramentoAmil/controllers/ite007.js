/**
 * Created by lrafael on 06/07/17.
 */
module.exports = function(app) {

    app.post('/ite007/statusProposta', function(req, res) {

        var response = {
            ite007Response:{
                codResponse: "ITE007-0000"
            }
        };
        console.log('Request ITE - 007 : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite007Request.listIdProposta == undefined){
            response.ite007Response.codResponse = "ITE007-0001";
            response.ite007Response.descCodResponse = "Mensagem Invalida";
            console.log("cep invalido *******");
        }else{
            response.ite007Response.listProposta = [{
                "id": "12324",
                "statusSisAmil": "Aprovado",
                "codRetorno": "Ok",
                "msgRetorno": "Mensagem Retorno",
                "marcaOtica": "Marca Otica"
            },
                {
                    "id": "12324",
                    "statusSisAmil": "Aprovado",
                    "codRetorno": "Ok",
                    "msgRetorno": "Mensagem Retorno",
                    "marcaOtica": "Marca Otica"
                }];
            response.ite007Response.codResponse = "ITE007-0000";
            response.ite007Response.descCodResponse = "Mensagem Valida";

            var i = response.ite007Response.listProposta.length;

            for (var i in response.ite007Response.listProposta ){

            }
        }
        res.send(response);
    });
};
