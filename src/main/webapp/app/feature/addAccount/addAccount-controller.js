"use strict";

(function() {

    var AddAccountController =  function(addAccountService, $log, $stateParams,$state,$timeout,$interval) {
        $log.log("AddAccountController  Controller Created");
    	var vm = this;
        vm.message;
    	vm.isHidden = true;
    	vm.progress=0;
    	
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
                	vm.message=results.message;
                	redirect();
                 }, function (error) {
                     vm.error = true;
                     vm.message = error;
                     redirect();
                 });
         };
         
         
         
         function updateAccount(){
        	 $log.log("inside updateAccount");
        	 var account={id:vm.accountId,firstName:vm.firstName,secondName:vm.lastName,accountNumber:vm.accountNumber};
      
        	 addAccountService.updateAccounts(account).then(function (results) {
              vm.message=results.message;
              redirect();
            
              
                 }, function (error) {
                     vm.error = true;
                     vm.message = error;
                     redirect();
                 });
         };
         
         
      
         
         function redirect(){
        	 vm.isHidden = false;	
        	 $interval(function(){
    			 vm.progress=vm.progress+.5;
    			 vm.progressStyle={width:''+vm.progress+'%'};
    		 }, 10, [200]);
        	 
        	  $timeout(function () { $state.go("account"); }, 3000);
        	 
         };
         
         
         
    };

    angular.module('accountApp').controller('addAccountController', ['addAccountService','$log','$stateParams','$state','$timeout','$interval', AddAccountController]);
}());