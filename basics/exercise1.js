"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Charles",
    account: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.account.deposit(3000);
console.log(myself);
var addNumbers = function (x, y) {
    return x + y;
};
console.log(addNumbers(44, 11));
var multiplyNumbers = function (x, y) { return x * y; };
console.log(multiplyNumbers(3, 22));
//# sourceMappingURL=exercise1.js.map