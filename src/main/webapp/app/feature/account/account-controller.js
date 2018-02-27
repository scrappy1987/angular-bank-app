(function() {

    var AccountController =  function(accountService, $log) {
        
    	var vm = this;
        
        vm.isHidden = false;
        
        vm.accounts = accountService.accounts;
        
        vm.hideTable = function()
        {
        	vm.isHidden = !vm.isHidden
        	$log.log("In the account controller the value of accounts is ");
        	$log.log(JSON.stringify(vm.accounts));
        };
            
    };

    angular.module('accountApp').controller('accountController', ['accountService','$log', AccountController]);
}());