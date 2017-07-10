/**
 * Created by lrafael on 05/07/17.
 */
module.exports = function(app) {

    app.post('/ite019/consultaPRC', function(req, res) {

        var response = {
            ite019Response:{
                codResponse: "ITE019-0000"
            }
        };

        console.log('Request ITE - 019 : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite019Request.codProduto == undefined){
            response.ite019Response.codResponse = "ITE019-0001";
            response.ite019Response.descCodResponse = "Mensagem Invalida";
            console.log("cod Produto invalido *******");
        }else{
            response.ite019Response.codPRC = "12345";
            response.ite019Response.codResponse = "ITE019-0000";
            response.ite019Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });
};

