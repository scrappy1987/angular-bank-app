package com.qa.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;

@Entity
public class Transaction {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Long id;
	@Size(min = 2, max = 80)
	private String transactionName;
	@Size(min = 2, max = 80)
	private String transactionNumber;

	public Transaction() {

	}

	public Transaction(String transactionName, String transactionNumber) {
		this.transactionName = transactionName;
		this.transactionNumber = transactionNumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTransactionName() {
		return transactionName;
	}

	public void setTransactionName(String transactionName) {
		this.transactionName = transactionName;
	}

	public String getTransactionNumbers() {
		return transactionNumber;
	}

	public void setTransactionNumbers(String transactionNumbers) {
		this.transactionNumber = transactionNumbers;
	}

}
