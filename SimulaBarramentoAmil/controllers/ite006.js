/**
 * Created by lrafael on 04/07/17.
 */

module.exports = function(app) {

    app.post('/ite006/estado', function(req, res) {

        var response = {
            ite006Response:{
                codResponse: "ITE006-0000"
            }
        }

        var listEstado =
             [
                "Sao Paulo",
                "Rio de Janeiro",
                "Minas Gerais"
            ];

        console.log('Request ITE - 006 Estados : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite006Request.produto == undefined){
            response.ite006Response.codResponse = "ITE006-0001";
            response.ite006Response.descCodResponse = "Mensagem Invalida";
            console.log("produto invalido *******");
        }else{
            response.ite006Response.listEstado = listEstado;
            response.ite006Response.codResponse = "ITE006-0000";
            response.ite006Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });

    app.post('/ite006/municipio', function(req, res) {
        var response = {
            ite006Response:{
                codResponse: "ITE006-0000"
            }};


            var listMunicipio = [
                "Sao Paulo",
                "Rio de Janeiro",
                "Belo Horizonte"
            ]
        ;

        console.log('Request ITE - 006 Municipios : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite006Request.estado == undefined){
            response.ite006Response.codResponse = "ITE006-0001";
            response.ite006Response.descCodResponse = "Mensagem Invalida";
            console.log("estado invalido *******");
        }else{
            response.ite006Response.listMunicipio = listMunicipio;
            response.ite006Response.codResponse = "ITE006-0000";
            response.ite006Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });

    app.post('/ite006/regiao', function(req, res) {
        var response = {
            ite006Response:{
                codResponse: "ITE006-0000"
            }};

        var listRegiao = [
                "Regiao 1",
                "Regiao 2",
                "Regiao 3"
            ];

        console.log('Request ITE - 006 Municipios : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite006Request.municipio == undefined){
            response.ite006Response.codResponse = "ITE006-0001";
            response.ite006Response.descCodResponse = "Mensagem Invalida";
            console.log("municipio invalido *******");
        }else{
            response.ite006Response.listRegiao = listRegiao;
            response.ite006Response.codResponse = "ITE006-0000";
            response.ite006Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });

    app.post('/ite006/bairro', function(req, res) {

        var response = {
            ite006Response:{
                codResponse: "ITE006-0000"
            }};

        var listBairro = [
                "Bairro 1",
                "Bairro 2",
                "Bairro 3"
            ];

        console.log('Request ITE - 006 Bairros : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite006Request.regiao == undefined){
            response.ite006Response.codResponse = "ITE006-0001";
            response.ite006Response.descCodResponse = "Mensagem Invalida";
            console.log("regiao invalido *******");
        }else{
            response.ite006Response.listBairro = listBairro;
            response.ite006Response.codResponse = "ITE006-0000";
            response.ite006Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });

    app.post('/ite006/especialidade', function(req, res) {

        var response = {
            ite006Response:{
                codResponse: "ITE006-0000"
            }};


        var listEspecialidade = [
                "Especialidade 1",
                "Especialidade 2",
                "Especialidade 3"
            ];

        console.log('Request ITE - 006 Municipios : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite006Request.bairro == undefined){
            response.ite006Response.codResponse = "ITE006-0001";
            response.ite006Response.descCodResponse = "Mensagem Invalida";
            console.log("regiao invalido *******");
        }else{
            response.ite006Response.listEspecialidade = listEspecialidade;
            response.ite006Response.codResponse = "ITE006-0000";
            response.ite006Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });

    app.post('/ite006/redeCredenciada', function(req, res) {
        var response = {
            ite006Response:{
                codResponse: "ITE006-0000"
            }};

        var listRedeCredenciada = [{
               "nome": "Nome Fantasia",
                "logradouro" : "logradouro",
                "numero" : 1234,
                "complemento": "Apartamento 999",
                "bairro": "Bairro Teste",
                "cidade": "Cidade Teste",
                "telefone": "99119988738",
                "equipamento":["equip 1", "equip 2"],
                "etiqueta":["etiqueta 1", "etiqueta 2"]

        },{
                "nome": "Nome Fantasia",
                "logradouro" : "logradouro",
                "numero" : 1234,
                "complemento": "Apartamento 999",
                "bairro": "Bairro Teste",
                "cidade": "Cidade Teste",
                "telefone": "99119988738",
                "equipamento":["equip 1", "equip 2"],
                "etiqueta":["etiqueta 1", "etiqueta 2"]

            }];

        console.log('Request ITE - 006 Municipios : ' + JSON.stringify(req.body));
        console.log(JSON.stringify(req.body));

        if(req.body.ite006Request.produto == undefined){
            response.ite006Response.codResponse = "ITE006-0001";
            response.ite006Response.descCodResponse = "Mensagem Invalida";
            console.log("produto invalido *******");
        }else{
            response.ite006Response.listRedeCredenciada = listRedeCredenciada;
            response.ite006Response.codResponse = "ITE006-0000";
            response.ite006Response.descCodResponse = "Mensagem Valida";
        }
        res.send(response);
    });
};
