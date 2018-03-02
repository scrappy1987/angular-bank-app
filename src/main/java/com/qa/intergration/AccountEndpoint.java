package com.qa.intergration;

import javax.inject.Inject;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.apache.log4j.Logger;

import com.qa.service.business.AccountService;

@Path("/account")
public class AccountEndpoint {

	private static final Logger LOGGER = Logger.getLogger(AccountEndpoint.class);

	@Inject
	private AccountService service;

	@Path("/json")
	@GET
	@Produces({ "application/json" })
	public String getAllAccounts() {
		LOGGER.info("AccountEndpoint + getAllAccounts");
		return service.getAllAccounts();
	}

	@Path("/json")
	@POST
	@Produces({ "application/json" })
	public String addAccount(String account) {
		LOGGER.info("AccountEndpoint + addAccount");
		return service.addAccount(account);
	}

	@Path("/json")
	@PUT
	@Produces({ "application/json" })
	public String updateAccount(String account) {
		LOGGER.info("AccountEndpoint + UpdateAccount");
		return service.updateAccount(account);
	}
	
	
	@Path("/json/{id}")
	@DELETE
	@Produces({ "application/json" })
	public String deleteAccount(@PathParam("id") Long id) {
		//Long myId= Long.parseLong(id);
		LOGGER.info("AccountEndpoint + deleteAccount");
		return service.deleteAccount(id);

	}
	
	
	

	public void setService(AccountService service) {
		LOGGER.info("AccountEndpoint + setService");
		this.service = service;
	}

}
