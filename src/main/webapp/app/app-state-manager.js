"use strict";

(function () {

    angular.module('accountApp').config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");

        $stateProvider.state("dashboard", {
            url: "/dashboard",
            templateUrl: "app/feature/dashboard/dashboard.html"
        }).state("account", {
                url: "/account",
                templateUrl: "app/feature/account/account.html"
        })
        .state("addAccount", {
                url: "/addAccount",
                params: {
                    accountId: null,
                    accountFirstName: null,
                    accountSecondName: null,
                    accountNumber: null,
                    accountAction: null
                },
                templateUrl: "app/feature/addAccount/addAccount.html"
        })
    });
}());