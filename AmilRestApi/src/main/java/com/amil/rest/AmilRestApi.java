package com.amil.rest;

import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.StreamingOutput;
import org.apache.commons.io.IOUtils;
import org.json.JSONObject;
@Path("/")
public class AmilRestApi {
	@POST
	@Path("/base64toPDF")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response base64toPDF(InputStream json) throws Exception {
		String jsonStr = IOUtils.toString(json, "UTF-8"); 
		final JSONObject jsonObject = new JSONObject(jsonStr);
		StreamingOutput fileStream = new StreamingOutput() {
				public void write(java.io.OutputStream output) throws IOException, WebApplicationException {
				try {
				    byte[] data = Base64.getDecoder().decode(jsonObject.getString("pdf"));
					output.write(data);
					output.flush();
                } catch (Exception e) {
					throw new WebApplicationException();
                }finally{
                    try {
                        output.close();
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            }
		};
		return Response.ok(fileStream, MediaType.APPLICATION_OCTET_STREAM)
				.header("content-disposition", "attachment; filename = teste.pdf").build();
	}
}
