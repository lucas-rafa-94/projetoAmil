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
            response.ite007Response.listIdPropostaSisAmil = ["1234", "5678"];
            response.ite007Response.listStatusPropostaSisAmil = ["Aprovado", "Reprovado"];
            response.ite007Response.codResponse = "ITE007-0000";
            response.ite007Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });
};
