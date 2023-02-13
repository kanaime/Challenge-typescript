class Person {
    
    private name: string;
    private age: number;
    constructor(myName: string, myAge: number){
        this.name = myName;
        this.age = myAge;
    }
    tellMyName(): string{
        return 'I am '+ this.name;
        
    }
    tellMyAge(): string {
        return 'I am '+ this.age + ' years old';
    }
    tellEverithing(){
        console.log(this.tellMyName(),',',  this.tellMyAge());
    }
}

const person1 = new Person('John', 40);
const person2 = new Person('Mary', 35);
var table = [person1,person2];
table.forEach(element => {
    element.tellEverithing();
});
// person1.tellEverithing();
// person2.tellEverithing();

