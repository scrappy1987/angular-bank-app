package com.qa.service.repository;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

import java.util.Collection;

import javax.enterprise.inject.Default;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.apache.log4j.Logger;

import com.qa.domain.Account;
import com.qa.util.JSONUtil;

@Transactional(SUPPORTS)
@Default
public class AccountDBRepository implements AccountRepository {

	private static final Logger LOGGER = Logger.getLogger(AccountDBRepository.class);

	@PersistenceContext(unitName = "primary")
	private EntityManager manager;

	@Inject
	private JSONUtil util;

	@Override
	public String getAllAccounts() {
		LOGGER.info("AccountDBRepository getAllAccounts");
		Query query = manager.createQuery("Select a FROM Account a");
		Collection<Account> accounts = (Collection<Account>) query.getResultList();
		return util.getJSONForObject(accounts);
	}

	@Override
	@Transactional(REQUIRED)
	public String createAccount(String accout) {
		LOGGER.info("AccountDBRepository createAccount");
		Account anAccount = util.getObjectForJSON(accout, Account.class);
		manager.persist(anAccount);
		return "{\"message\": \"account has been sucessfully added\"}";
	}

	@Override
	@Transactional(REQUIRED)
	public String deleteAccount(Long id) {
		LOGGER.info("AccountDBRepository deleteAccount");
		Account accountInDB = findAccount(id);
		if (accountInDB != null) {
			manager.remove(accountInDB);
			return "{\"message\": \"account sucessfully deleted\"}";
		}
		return "{\"message\": \"account not found\"}";

	}

	private Account findAccount(Long id) {
		LOGGER.info("AccountDBRepository findAccount");
		return manager.find(Account.class, id);
	}

	public void setManager(EntityManager manager) {
		this.manager = manager;
	}

	public void setUtil(JSONUtil util) {
		this.util = util;
	}

	@Override
	@Transactional(REQUIRED)
	public String updateAccount(String accout) {
		// TODO Auto-generated method stub
		Account updateAccount = util.getObjectForJSON(accout, Account.class);
		Long id=updateAccount.getId();
		LOGGER.info("AccountDBRepository updateAccount settting new Values for A/C "+updateAccount.getId()+" "+updateAccount.getAccountNumber());
		Account accountInDB = findAccount(id);
		LOGGER.info("AccountDBRepository updateAccount old Account Values for A/C "+accountInDB.getId()+" "+accountInDB.getAccountNumber());
		accountInDB.setAccountNumber(updateAccount.getAccountNumber());
		accountInDB.setFirstName(updateAccount.getFirstName());
		accountInDB.setSecondName(updateAccount.getSecondName());

		
		LOGGER.info("AccountDBRepository updateAccount old Account Values for A/C "+accountInDB.getId()+" "+accountInDB.getAccountNumber());
	
		return "{\"message\": \"account updated\"}";
	}

}
