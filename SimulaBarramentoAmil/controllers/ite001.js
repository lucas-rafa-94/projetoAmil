/**
 * Created by lrafael on 05/07/17.
 */
module.exports = function(app) {

    app.post('/ite001/areaComercializacao', function(req, res) {

        var response = {
            ite001Response:{
                codResponse: "ITE001-0000"
            }
        };

        console.log('Request ITE - 001 : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite001Request.cep == undefined){
            response.ite001Response.codResponse = "ITE001-0001";
            response.ite001Response.descCodResponse = "Mensagem Invalida";
            console.log("cep invalido *******");
        }else{
            response.ite001Response.codUnidade = "unidade";
            response.ite001Response.codFilial= "filial";
            response.ite001Response.localizacao = "localizacao";
            response.ite001Response.codResponse = "ITE001-0000";
            response.ite001Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });
};

