"use strict";

(function () {

    
    function AccountService ($log,accountDal) {
$log.log("Account get functions is being called");
        this.getAccounts = function()
        {
        	return accountDal.getAccounts();
        };
        
        $log.log("Account get functions is being called");
        this.saveAccount = function(accountToSave)
        {
        $log.log("Account has been passed to be created");
        	return accountDal.saveAccount(accountToSave);
        };
        
    }
    
    angular.module("accountApp").service("accountService", ['$log','accountDal', AccountService]);

}());