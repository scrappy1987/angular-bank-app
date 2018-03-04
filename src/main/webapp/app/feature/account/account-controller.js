"use strict";

(function() {

	var AccountController = function(accountService, $log, $state,$timeout) {
		$log.log("AccountController  Controller Created");
		var vm = this;
		vm.isHidden = true;
		vm.showTransaction = false;
		vm.setTransactions= function(id){
			vm.showTransaction=!vm.showTransaction;
			vm.showTransactionId=id;
			$log.log("The t id's are "+vm.showTransactionId+" and "+id)
		}
		vm.alertDisplay = function() {
			vm.isHidden = true;
		};

		function init() {
			accountService.getAccounts().then(function(results) {
				vm.accounts = results;
				$log.log("In the account controller the value of the result promise is ");
				$log.log(JSON.stringify(vm.accounts));
			}, function(error) {
				vm.error = true;
				vm.errorMessage = error;
			});
		}

		init();

		vm.setid = function(id) {
			vm.activeAccountId = id;
			$log.log("The account id at setID sage is: " + vm.activeAccountId);

		};

		vm.removeAccount = function() {

			removeAccount();
		};

		function removeAccount() {
			vm.isHidden = true;
			var account = {
				id : vm.activeAccountId
			};
			$log.log("The account id at remove account sage is: " + vm.activeAccountId);
			accountService.removeAccounts(account).then(function(results) {
				vm.message = results.message;
				vm.isHidden = false;
				init();
				$timeout(function () { vm.isHidden = true; }, 3000)
				;
			}, function(error) {
				vm.error = true;
				vm.message = error;
				vm.isHidden = false;
				$timeout(function () { vm.isHidden = true; }, 3000)
			});

		}
		;

		vm.updateAccount = function(account) {

			$state.go("addAccount", {
				accountId : account.id,
				accountFirstName : account.firstName,
				accountSecondName : account.secondName,
				accountNumber : account.accountNumber,
				accountAction : "update"
			});
		};

	};

	angular.module('accountApp').controller('accountController', [ 'accountService', '$log', '$state','$timeout', AccountController ]);
}());