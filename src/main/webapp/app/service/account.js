"use strict";

(function () {

    
    function AccountService ($log, accountDal) {

        this.getAccounts = function()
        {
        	$log.log("AccountService getAccounts");
        	return accountDal.getAccounts();
        };
        
    }
    
    angular.module("accountApp").service("accountService", ['$log','accountDal', AccountService]);

}());