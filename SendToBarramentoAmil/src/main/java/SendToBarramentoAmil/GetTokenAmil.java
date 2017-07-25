package SendToBarramentoAmil;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.core.util.MultivaluedMapImpl;
import org.json.JSONObject;

/**
 * Created by lrafael on 25/07/17.
 */
public class GetTokenAmil {
    public static String getTokenAmil() throws Exception{

        String output = "";
        JSONObject jsonObject = null;
        try {

            Client client = Client.create();

            WebResource webResource = client
                    .resource("https://api-hom.amil.com.br/auth/oauth/v2/token?scope=oraclecommerce&grant_type=client_credentials");
            MultivaluedMapImpl map = new MultivaluedMapImpl();
            map.add("scope","oraclecommerce");
            map.add("grant_type","client_credentials");

            ClientResponse response = webResource.type("application/x-www-form-urlencoded")
                    .header("Authorization", "Basic ZGRlODU1MWUtMTFmYy00MTRiLWJmZmUtNzZmMmY0NGVmZDJjOjE5MDhkNDBiLTRkMmYtNGM2NS1hOWMzLTBlOGVmMTA2M2ZmZg=='")
                    .post(ClientResponse.class);

            int res = response.getStatus();
            output = response.getEntity(String.class);
            jsonObject = new JSONObject(output);

            return jsonObject.getString("access_token");
        }catch (Exception e){
            throw e;
        }

    };

}
