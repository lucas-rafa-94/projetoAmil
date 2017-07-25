package SendToBarramentoAmil;

/**
 * Created by lrafael on 24/07/17.
 */
public class ITE003Test {

    public static void main (String []args){

        String body = "{\"ite003Request\":{\"cpf\":\"999.999.999-99\",\"cep\":\"08755-999\",\"token\":\"104bf8d3-d4c1-461c-9139-c565635010a3\"}}";
        System.out.print(ITE003.sendIte003(body));

    }
}
