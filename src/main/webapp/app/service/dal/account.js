"use strict";

(function () {

    function AccountDal (dal,$log) {
		$log.log("dal gett accounts");
        this.getAccounts = function () {
            return dal.http.GET("rest/account/json");
        };

        this.saveAccount = function (accountToSave) {
        $log.log(accountToSave);
            return dal.http.POST("rest/account/json", accountToSave);
        };

        this.updateAccount = function (accountToUpdate) {
            return dal.http.PUT("rest/account/json/", accountToUpdate);
        };

        this.deleteAccount = function (accountToDelete) {
            return dal.http.DELETE("/rest/account/json/", accountToDelete);
        };
    }
    
    angular.module("accountApp").service("accountDal", ["dal",'$log', AccountDal]);
}());