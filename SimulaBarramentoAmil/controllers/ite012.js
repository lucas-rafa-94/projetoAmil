/**
 * Created by lrafael on 06/07/17.
 */
module.exports = function(app) {

    app.post('/ite012/consultaParceiros', function(req, res) {

        var response = {
            ite012Response:{
                codResponse: "ITE012-0000"
            }
        };

        console.log('Request ITE - 012 : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite012Request.tpOferta == undefined){
            response.ite012Response.codResponse = "ITE012-0001";
            response.ite012Response.descCodResponse = "Mensagem Invalida";
            console.log("tpOferta invalido *******");
        }else if (req.body.ite012Request.bin == undefined) {
            response.ite012Response.codResponse = "ITE012-0001";
            response.ite012Response.descCodResponse = "Mensagem Invalida";
            console.log("bin invalido *******");
        }else{
            response.ite012Response.nomeCliente = "Teste Amil";
            response.ite012Response.dataNascimento = "11/07/2016";
            response.ite012Response.codResponse = "ITE012-0000";
            response.ite012Response.descCodResponse = "Mensagem Valida";
        }

        res.send(response);
    });
};
