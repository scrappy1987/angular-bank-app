"use strict";

(function () {

    
    function AddAccountService (accountDal,$log) {

        this.addAccounts = function(account)
        {
        	$log.log("AddAccountService addAccounts");
        	return accountDal.saveAccount(account);
        };
        
        
        this.updateAccounts = function(account)
        {
        	$log.log("AddAccountService addAccounts");
        	return accountDal.updateAccount(account);
        };
        
    }
    
    angular.module("accountApp").service("addAccountService", ['accountDal','$log', AddAccountService]);

}());/**
 * 
 */