"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Ellen";
}
var person = {
    firstName: "Charles",
    // age: 22,
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName);
    }
};
// greet({ firstName: "Max", age: 27 });
changeName(person);
greet(person);
person.greet("Nicoletti");
var Person = /** @class */ (function () {
    function Person(firstName) {
        this.lastName = "";
        this.firstName = firstName;
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName);
    };
    return Person;
}());
var guy = new Person("Chucky");
guy.greet("Cheese");
guy.lastName = "Smith";
guy.greet(guy.lastName);
greet(guy);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log("double it: " + myDoubleFunction(10, 20));
var oldPerson = {
    age: 22,
    firstName: "Chas",
    greet: function (lastName) {
        console.log("Hi!");
    }
};
console.log(oldPerson);
