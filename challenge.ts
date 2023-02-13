import * as assert  from  'assert';

// ... Ton code ici ...
class BankCustomer{
    private name: string;
    private pin: string;

    constructor(name: string, pin: string){
        this.name = name;
        this.pin = pin;
    }
    public getName(): string {
        return this.name;
    }
    public verifyPinInput(input: string): boolean {
       if(this.pin == input){
        console.log("c'est le bon code");
       return true;
       
       
        
       }
       else{
        console.log("c'est pas le bon code");
        return false;
        
        
       }
    }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');

assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));

