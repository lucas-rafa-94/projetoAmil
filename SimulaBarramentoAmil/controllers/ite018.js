/**
 * Created by lrafael on 05/07/17.
 */
module.exports = function(app) {

    app.post('/ite018/dadosEndereco', function(req, res) {

        var response = {
            ite018Response:{
                codResponse: "ITE018-0000"
            }
        };

        console.log('Request ITE - 018 : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite018Request.cep == undefined){
            response.ite018Response.codResponse = "ITE018-0001";
            response.ite018Response.descCodResponse = "Mensagem Invalida";
            console.log("cepf invalido *******");
        }else{
            response.ite018Response.rua = "Rua Teste";
            response.ite018Response.bairro = "Bairro Teste";
            response.ite018Response.cidade = "Cidade Teste";
            response.ite018Response.estado = "SP";
            response.ite018Response.codResponse = "ITE018-0000";
            response.ite018Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });
};

