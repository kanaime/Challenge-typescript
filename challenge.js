var Person = /** @class */ (function () {
    function Person(myName, myAge) {
        this.name = myName;
        this.age = myAge;
    }
    Person.prototype.tellMyName = function () {
        return 'I am ' + this.name;
    };
    Person.prototype.tellMyAge = function () {
        return 'I am ' + this.age + ' years old';
    };
    Person.prototype.tellEverithing = function () {
        console.log(this.tellMyName(), ',', this.tellMyAge());
    };
    return Person;
}());
var person1 = new Person('John', 40);
var person2 = new Person('Mary', 35);
var teble = [person1, person2];
teble.forEach(function (element) {
    element.tellEverithing();
});
// person1.tellEverithing();
// person2.tellEverithing();
