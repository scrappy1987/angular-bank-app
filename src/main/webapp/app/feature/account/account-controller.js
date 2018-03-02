"use strict";

(function() {

    var AccountController =  function(accountService, $log,$state) {
        $log.log("AccountController  Controller Created");
    	var vm = this;
        
        vm.isHidden = false;
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        };
        
        function init() {
        	accountService.getAccounts().then(function (results) {
           	vm.accounts = results;
           	$log.log("In the account controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.accounts));
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
       }
       
       init();
       
       vm.removeAccount =function(accountId){
    	   var account={id:accountId};
    	   accountService.removeAccounts(account).then(function (results) {
              	vm.accounts = results;
              	 init();
              	$log.log("In the account controller the value of the result promise is ");
           	$log.log(JSON.stringify(vm.accounts));
               }, function (error) {
                   vm.error = true;
                   vm.errorMessage = error;
               });
    	   
       };
       
       
       vm.updateAccount= function(account){
    	   
    	   $state.go("addAccount",{accountId:account.id,accountFirstName:account.firstName,accountSecondName:account.secondName,accountNumber:account.accountNumber,accountAction:"update"});
    	
       };
       
            
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log','$state', AccountController]);
}());