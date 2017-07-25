package SendToBarramentoAmil;

/**
 * Created by lrafael on 25/07/17.
 */
public class ITE005Test {
    public static void main (String []args) throws Exception{

        String body = "{\"ite005Request\":{\"tipoProposta\":\"BOLPME\",\"idProposta\":\"345678\",\"token\":\"34845ced-af64-4aa1-bc51-1063e1922acc\"}}";
        System.out.print(ITE005.sendIte005(body));

    }
}
