package SendToBarramentoAmil;


import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import org.json.JSONObject;

/**
 * Created by lrafael on 24/07/17.
 */
public class ITE003 {

    public static String sendIte003(String body) throws Exception{

        String output = "";
        String auth = "";

        try {

            JSONObject jsonObject = new JSONObject(body).getJSONObject("ite003Request");
            auth = "Bearer " + jsonObject.getString("token");

            Client client = Client.create();

            WebResource webResource = client
                    .resource("https://api-hom.amil.com.br/venda-online/api/corretor/" + jsonObject.getString("cep") + "/validacep/" + jsonObject.getString("cpf"));

            ClientResponse response = webResource.type("application/x-www-form-urlencoded")
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .header("Authorization", auth)
                    .get(ClientResponse.class);

            int res = response.getStatus();
            output = response.getEntity(String.class);
        }catch (Exception e){
            throw e;
        }
      return output;
    };

}
