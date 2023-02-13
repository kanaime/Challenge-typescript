"use strict";
exports.__esModule = true;
var assert = require("assert");
// ... Ton code ici ...
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (input) {
        if (this.pin == input) {
            console.log("c'est le bon code");
            return true;
        }
        else {
            console.log("c'est pas le bon code");
            return false;
        }
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer('John Doe', '3579');
console.log(customer);
console.log(customer.verifyPinInput('3579'));
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
