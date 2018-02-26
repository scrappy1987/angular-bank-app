package com.qa.service.repository;

public interface AccountRepository {

	String getAllAccounts();

	String createAccount(String accout);

	String deleteAccount(Long id);

}