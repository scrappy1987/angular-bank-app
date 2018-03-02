"use strict";

(function() {

    var AddAccountController =  function(addAccountService, $log, $stateParams) {
        $log.log("AddAccountController  Controller Created");
    	var vm = this;
       
        if($stateParams.accountAction)
        	{
        	vm.buttonName="Update Account";
        	}
        else{
        	 vm.buttonName="Add Account";
        }
        
        vm.accountId=$stateParams.accountId;
        vm.firstName=$stateParams.accountFirstName;
        vm.lastName=$stateParams.accountSecondName;
        vm.accountNumber=$stateParams.accountNumber;
        
        vm.setAction=function(){
        	$log.log("inside SetAction");
        	if($stateParams.accountAction)
        	{
        		updateAccount();
        	}
        	else{
        		
        		addAccount();
        	}
        };
        
        
        
         function addAccount(){
        	 $log.log("inside addAccount");
        	 var account={firstName:vm.firstName,secondName:vm.lastName,accountNumber:vm.accountNumber};
        	 
        	 $log.log("the Account in JSON "+(JSON.stringify(account)));
        	 
        	 addAccountService.addAccounts(account).then(function (results) {
                	vm.result = results;
                	$log.log("In the account controller the value of the result promise is ");
             	$log.log(JSON.stringify("the result of the addAccountService.addAccount : "+vm.result));
                 }, function (error) {
                     vm.error = true;
                     vm.errorMessage = error;
                 });
         };
         
         
         
         function updateAccount(){
        	 $log.log("inside updateAccount");
        	 var account={id:vm.accountId,firstName:vm.firstName,secondName:vm.lastName,accountNumber:vm.accountNumber};
        	 
        	 $log.log("the Account in JSON "+(JSON.stringify(account)));
        	 
        	 addAccountService.updateAccounts(account).then(function (results) {
                	vm.result = results;
                	$log.log("In the account controller the value of the result promise is ");
             	$log.log(JSON.stringify("the result of the addAccountService.addAccount : "+vm.result));
                 }, function (error) {
                     vm.error = true;
                     vm.errorMessage = error;
                 });
         };
         
         
         
         
         
    };

    angular.module('accountApp').controller('addAccountController', ['addAccountService','$log','$stateParams', AddAccountController]);
}());