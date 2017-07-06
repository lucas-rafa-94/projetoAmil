/**
 * Created by lrafael on 06/07/17.
 */
module.exports = function(app) {

    app.post('/ite004/validaCodCorretora', function(req, res) {

        var response = {
            ite004Response:{
                codResponse: "ITE004-0000"
            }
        };

        console.log('Request ITE - 004 : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite004Request.cep == undefined){
            response.ite004Response.codResponse = "ITE004-0001";
            response.ite004Response.descCodResponse = "Mensagem Invalida";
            console.log("cep invalido *******");
        }else if (req.body.ite004Request.cpf == undefined) {
            response.ite004Response.codResponse = "ITE004-0001";
            response.ite004Response.descCodResponse = "Mensagem Invalida";
            console.log("cpf invalido *******");
        }else{
            response.ite004Response.corretora = "Teste Amil";
            response.ite004Response.supervisores = ["Super 1, Super 2"];
            response.ite004Response.cpfSupervisores = ["12345, 56789"];
            response.ite004Response.codResponse = "ITE004-0000";
            response.ite004Response.descCodResponse = "Mensagem Valida";
        }

        res.send(response);
    });
};
