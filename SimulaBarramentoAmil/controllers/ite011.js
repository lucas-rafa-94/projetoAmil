/**
 * Created by lrafael on 06/07/17.
 */

module.exports = function(app) {

    app.post('/ite011/consultaCPF', function(req, res) {

        var response = {
            ite011Response:{
                codResponse: "ITE011-0000"
            }
        };

        console.log('Request ITE - 011 : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite011Request.cpf == undefined){
            response.ite011Response.codResponse = "ITE011-0001";
            response.ite011Response.descCodResponse = "Mensagem Invalida";
            console.log("cpf invalido *******");
      }else{
            response.ite011Response.nome = "Teste Amil"
            response.ite011Response.dataNascimento = "11/07/1994";
            response.ite011Response.nomeMae = "Nome mãe";
            response.ite011Response.endereco = "Endereco teste";
            response.ite011Response.codResponse = "ITE011-0000";
            response.ite011Response.descCodResponse = "Mensagem Valida";

        }

        res.send(response);
    });

    app.post('/ite011/consultaCNPJ', function(req, res) {

        var response = {
            ite011Response:{
                codResponse: "ITE011-0000"
            }
        };

        console.log('Request ITE - 011 : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite011Request.cnpj == undefined){
            response.ite011Response.codResponse = "ITE011-0001";
            response.ite011Response.descCodResponse = "Mensagem Invalida";
            console.log("cpf invalido *******");
        }else{
            response.ite011Response.nome = "Teste Amil"
            response.ite011Response.razaoSocial = "Razao Social";
            response.ite011Response.fantasia = "Nome Fantasia";
            response.ite011Response.mei = "2341241";
            response.ite011Response.dataAbertura = "11/11/2016";
            response.ite011Response.ativa= "OK";
            response.ite011Response.codResponse = "ITE011-0000";
            response.ite011Response.descCodResponse = "Mensagem Valida";

        }

        res.send(response);
    });
};
