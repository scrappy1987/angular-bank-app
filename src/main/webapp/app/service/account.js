"use strict";

(function () {

    
    function AccountService (accountDal,$log) {

        this.getAccounts = function()
        {
        	$log.log("AccountService getAccounts");
        	return accountDal.getAccounts();
        };
        
        this.removeAccounts = function(account)
        {
        	$log.log("AccountService removeAccounts");
        	return accountDal.deleteAccount(account);
        };
        
    }
    
    


      
        
  
    
    
    angular.module("accountApp").service("accountService", ['accountDal','$log', AccountService]);

}());