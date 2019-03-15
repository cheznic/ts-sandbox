"use strict";
var double = function (value) { return value * 2; };
console.log(double(10));
var greet = function (name) {
    if (name === void 0) { name = "default value"; }
    console.log("Hello, " + name);
};
greet();
greet("Anna");
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
var testResults = [3.89, 2.99, 1.38];
var r1 = testResults[0], r2 = testResults[1], r3 = testResults[2];
console.log(r1, r2, r3);
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
//# sourceMappingURL=exercise2.js.map