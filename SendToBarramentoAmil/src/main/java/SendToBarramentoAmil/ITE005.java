package SendToBarramentoAmil;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import org.json.JSONObject;

/**
 * Created by lrafael on 25/07/17.
 */
public class ITE005 {

    public static String sendIte005(String body) throws Exception{

        Client client = null;
        WebResource webResource = null;
        ClientResponse response = null;

        String output = "";
        String auth = "";

        try {

            JSONObject jsonObject = new JSONObject(body).getJSONObject("ite005Request");
            auth = "Bearer " + jsonObject.getString("token");

            client = Client.create();

            webResource = client
                    .resource("https://api-hom.amil.com.br/venda-online/api/boleto/" + jsonObject.getString("tipoProposta")+ "/" + jsonObject.getString("idProposta"));

            response = webResource.type("application/x-www-form-urlencoded")
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .header("Authorization", auth)
                    .get(ClientResponse.class);

            int res = response.getStatus();
            output = response.getEntity(String.class);
            return output;

        }catch (Exception e){
            throw e;
        }finally {
            try {
                if(response != null){
                    response.close();
                }
            }catch (Exception e){
                throw e;
            }
        }

    };

}
