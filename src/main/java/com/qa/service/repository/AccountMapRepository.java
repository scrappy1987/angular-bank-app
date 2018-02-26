package com.qa.service.repository;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Alternative;
import javax.inject.Inject;

import org.apache.log4j.Logger;

import com.qa.domain.Account;
import com.qa.domain.Transaction;
import com.qa.util.JSONUtil;

@ApplicationScoped
@Alternative
public class AccountMapRepository implements AccountRepository {

	private static final Logger LOGGER = Logger.getLogger(AccountRepository.class);

	private final Long INITIAL_COUNT = 1L;
	private Map<Long, Account> accountMap;
	private Long ID;

	@Inject
	private JSONUtil util;

	public AccountMapRepository() {
		this.accountMap = new HashMap<Long, Account>();
		ID = INITIAL_COUNT;
		initAccountMap();
	}

	@Override
	public String getAllAccounts() {
		LOGGER.info("AccountMapRepository + getAllAccounts");
		return util.getJSONForObject(accountMap.values());
	}

	@Override
	public String createAccount(String account) {
		LOGGER.info("AccountMapRepository + createAccount");
		ID++;
		Account newAccount = util.getObjectForJSON(account, Account.class);
		accountMap.put(ID, newAccount);
		return account;
	}

	@Override
	public String deleteAccount(Long id) {
		LOGGER.info("AccountMapRepository + deleteAccount");
		accountMap.remove(id);
		return "{\"message\": \"accout sucessfully removed\"}";
	}

	private void initAccountMap() {
		LOGGER.info("AccountMapRepository + initAccountMap");
		Set<Transaction> transactions = new HashSet<>();
		transactions.add(new Transaction("tesco", "1234"));
		Account account = new Account("Joe", "Bloggs", "1234", transactions);
		accountMap.put(1L, account);
	}

}
