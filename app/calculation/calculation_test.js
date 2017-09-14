'use strict';

describe('myApp.calculation module', function () {

    var calculationService, httpBackend, ctrl;
    beforeEach(module('myApp.calculation'));

    beforeEach(inject(function (_Calculator_, $httpBackend) {
        calculationService = _Calculator_;
        httpBackend = $httpBackend;
    }));

    beforeEach(inject(function ($controller) {
        ctrl = $controller('CalculationCtrl');
    }));
    describe('calculation controller', function () {

        it('should ....', inject(function ($controller) {
            //spec body

            expect(ctrl).toBeDefined();
            expect(calculationService).toBeDefined();


        }));

        it('check initial values', inject(function ($controller) {

            expect(ctrl.calculationResult).toEqual(0);
            expect(ctrl.loanAmount).toEqual(0);
            expect(ctrl.downPayment).toEqual(0);
            expect(ctrl.interestRate).toEqual(0);

            ctrl.interestRate = 2;
            ctrl.loanAmount = 2;
            ctrl.downPayment = 2;
            ctrl.calculate()
            expect(ctrl.calculationResult).toEqual(8);

            expect(calculationService.payment(2,2,2)).toEqual(8);

        }));


    });
});

