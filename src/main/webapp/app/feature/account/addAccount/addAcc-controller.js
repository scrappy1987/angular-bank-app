"use strict";

(function() {
	
    var AddAccountController =  function(accountService, $log) {
 	var vm = this;
   vm.currentFirstN;
   vm.currentSecondN;  
   vm.currentAccountN;      
    
        $log.log("Account controller created now");
         
         vm.getInputs = function()
         {
         	$log.log("inputs being added");
         	vm.currentFirstN = document.getElementById('accountFname').value;
  	 		vm.currentSecondN = document.getElementById('accountSname').value;
   			vm.currentAccountN = document.getElementById('accountNum').value;
   			$log.log(vm.currentAccountN);
   			
   			vm.herro = {firstName: vm.currentFirstN,
        				secondName: vm.currentSecondN,
        				accountNumber: vm.currentAccountN};
   			
         
         }
         vm.init = function() {vm.getInputs();
        	accountService.saveAccount(vm.herro).then(function (results) {
        	
        	
        	console.log(vm.currentFirstN);
        	
        	
        	console.log(vm.herro);
           	vm.accounts = results;
           	
           	
           	$log.log("In the account controller the value of the result promise is ");
        	$log.log(JSON.stringify(vm.accounts));
        	
        	
            }, function (error) {
                vm.error = true;
                vm.errorMessage = error;
            });
            $log.log(vm.herro);
       }
       
      
     };

    angular.module('accountApp').controller('addAccountController', ['accountService','$log', AddAccountController]);
}());