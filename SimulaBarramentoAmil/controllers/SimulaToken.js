/**
 * Created by lrafael on 17/07/17.
 */
module.exports = function(app) {

    app.post('/auth/oauth/v2/token', function(req, res) {

        var responseOk = {
            "access_token": "104bf8d3-d4c1-461c-9139-c565635010a3",
            "token_type": "Bearer",
            "expires_in": 3600,
            "scope": "oraclecommerce"
        }

        var responseFalse = {
            "codResponse": "Authorization Invalid"
        }

        console.log(req.headers);
        console.log(req.query);

        if(req.header('authorization') === "Basic ZGRlODU1MWUtMTFmYy00MTRiLWJmZmUtNzZmMmY0NGVmZDJjOjE5MDhkNDBiLTRkMmYtNGM2NS1hOWMzLTBlOGVmMTA2M2ZmZg=='" && req.query.scope === "oraclecommerce" && req.query.grant_type === "client_credentials" ) {
            console.log(responseOk);
            res.send(responseOk);
        }else{
            console.log(responseFalse);
            res.send(responseFalse);
        }
    });
};

