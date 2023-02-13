import * as assert  from  'assert';

// ... Ton code ici ...
class BankCustomer{
    private name: string;
    private pin: string;

    constructor(name: string, pin: string){
        this.name = name;
        this.pin = pin;
    }
    public getName(): void {
         this.name;
    }
    public verifyPinInput(input: string): void{
       if(this.pin == input){
        true;
       console.log('cest bon');
       
        
       }
       else{
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

