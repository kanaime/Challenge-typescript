"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ... Ton code ici ...
class BankCustomer {
    constructor(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    getName() {
        this.name;
    }
    verifyPinInput(input) {
        if (this.pin == input) {
            true;
            console.log('cest bon');
        }
        else {
            false;
            console.log('cest pas bon');
        }
    }
}
// Tests
const customer = new BankCustomer('John Doe', '3579');
console.log(customer);
console.log(customer.verifyPinInput('3579'));
// assert.equal(typeof customer.getName, 'function');
// assert.equal(typeof customer.verifyPinInput, 'function');
// assert.equal(customer.getName(), 'John Doe');
// assert.ok(customer.verifyPinInput('3579'));
