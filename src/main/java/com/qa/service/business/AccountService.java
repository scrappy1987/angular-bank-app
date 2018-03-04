package com.qa.service.business;

public interface AccountService {

	String getAllAccounts();

	String addAccount(String account);
	String updateAccount(String account);

	String deleteAccount(Long id);

}