const expect = require('chai').expect;
const calculator = require('../app/calculator');


describe('test calculate function', function () {
    describe('positive tests', function () {
        it('checking Plus', function () {
            const sum = calculator.calculate('5', '+', '5');
            expect(sum).to.equal(10);
        });

        it('checking Minus', function () {
            const subtraction = calculator.calculate('5', '-', '5');
            expect(subtraction).to.equal(0);
        });

        it('checking Times', function () {
            const times = calculator.calculate('5', '*', '5');
            expect(times).to.equal(25);
        });

        it('checking Division ', function () {
            const div = calculator.calculate('5', '/', '5');
            expect(div).to.equal(1);
        });
    });


    describe('negative tests', function () {
        it('space instead of value', function () {
            const space = calculator.calculate;
            expect(() => space(' ', '+', '5')).to.throw('one of the parameters is not correct');
        });
        
        it('text instead of value', function () {
            const space = calculator.calculate;
            expect(() => space('b', '+', '5')).to.throw('one of the parameters is not correct');
        });


        it('invalid operator', function () {
            const operation = calculator.calculate;
            expect(() => operation('4', '++', '5')).to.throw('one of the parameters is not correct');
        });
    });
});


