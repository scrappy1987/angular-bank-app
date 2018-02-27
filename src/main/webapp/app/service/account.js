"use strict";

(function () {

    
    function AccountService (accountDal) {

        this.getAccounts = function()
        {
        	return accountDal.getAccounts();
        };
        
    }
    
    angular.module("accountApp").service("accountService", ['accountDal', AccountService]);

}());