'use strict';

angular.module('myApp.calculation', [])
    .service('Calculator',  ['$http', '$log', function ($http, $log) {
       this.http =    $http;
        this.url = 'https://jsonplaceholder.typicode.com/posts/1';

        this.payment = function (loanAmount, downPayment, interestRate) {
            //just for showing how to call a service.
            this.http.get(this.url).then(
                function(response){
                    $log.log(response.data);
                },
                function(errResponse){
                    $log.error('Error while updating user' - errResponse);
                    //return $q.reject(errResponse);
                }
            );

            return loanAmount * downPayment * interestRate;

        };
    }])

    .controller('CalculationCtrl', ['Calculator', function (Calculator) {
        this.calResult = 0;
        this.loanAmount = 0;
        this.downPayment = 0;
        this.interestRate = 0;

        this.calculate = function () {
            this.calResult = Calculator.payment(this.loanAmount, this.downPayment, this.interestRate);
        };
    }])
    .directive('validationp', function () {
        return {
           restrict : 'A',
           template : "TEST directive"
        };
    });
