"use strict";

(function () {

    
    function AccountService () {

        this.accounts = [
            {
                "id": 1,
                "firstName": "Declan",
                "secondName": "Cordial",
                "accountNumber": "1234",
                "transactions": [
                    {
                        "id": 1,
                        "transactionName": "Asda",
                        "transactionNumber": "11"
                    }
                ]
            },
            {
                "id": 2,
                "firstName": "Niall",
                "secondName": "Mulready",
                "accountNumber": "1235",
                "transactions": [
                    {
                        "id": 2,
                        "transactionName": "Asda",
                        "transactionNumber": "12"
                    }
                ]
            },
            {
                "id": 3,
                "firstName": "Ian",
                "secondName": "Cunningham",
                "accountNumber": "1236",
                "transactions": [
                    {
                        "id": 3,
                        "transactionName": "Asda",
                        "transactionNumber": "13"
                    }
                ]
            },
            {
                "id": 4,
                "firstName": "Brendan",
                "secondName": "Greene",
                "accountNumber": "1237",
                "transactions": [
                    {
                        "id": 4,
                        "transactionName": "Asda",
                        "transactionNumber": "14"
                    }
                ]
            },
            {
                "id": 5,
                "firstName": "Nicholas",
                "secondName": "Tsang",
                "accountNumber": "1238",
                "transactions": [
                    {
                        "id": 5,
                        "transactionName": "Asda",
                        "transactionNumber": "15"
                    }
                ]
            }
        ]

    }
    
    angular.module("accountApp").service("accountService", [AccountService]);

}());