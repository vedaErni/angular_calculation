'use strict';

angular.module('myApp.welcome', ['ngMessages'])
    .controller('WelcomeCtrl', ['$log', WelcomeCtrl])
    .directive('strongPassword', strongPassword);

function WelcomeCtrl($log){

    this.$log = $log;
    this.initialData = 0;

    this.sayHello = function () {
        this.initialData = 1;
    };

    this.myFunc = function () {
        this.initialData++;
        this.$log.log("initial value is :" + this.initialData);
    };
}
function  strongPassword() {
    return {
        restrict : 'A',
        require : 'ngModel',
        link : function (scope, element, attr, ctrl) {
            function customValidator(ngModelValue) {
                if (/[A-Z]/.test(ngModelValue)) {
                    ctrl.$setValidity('uppercaseValidator', true);
                } else {
                    ctrl.$setValidity('uppercaseValidator', false);
                }

                if (/[0-9]/.test(ngModelValue)) {
                    ctrl.$setValidity('numberValidator', true);
                } else {
                    ctrl.$setValidity('numberValidator', false);
                }

                if (ngModelValue.length === 6) {
                    ctrl.$setValidity('sixCharactersValidator', true);
                } else {
                    ctrl.$setValidity('sixCharactersValidator', false);
                }

                return ngModelValue;
            }
            ctrl.$parsers.push(customValidator);
        }
    };
}



