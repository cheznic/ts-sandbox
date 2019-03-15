"use strict";
function echo(data) {
    return data;
}
console.log(echo("Charles"));
console.log(echo(27));
console.log(echo({ name: "Charles", age: 27 }));
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Charles"));
console.log(betterEcho(27));
console.log(betterEcho({ name: "Charles", age: 27 }));
var testResults = [1.94, 2.33];
testResults.push(-2.78);
console.log("First item:", testResults.reverse().pop());
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["apple", "pear"]);
var echo2 = echo;
console.log(echo2("Sally"));
var Multiplier = (function () {
    function Multiplier(val1, val2) {
        this.v1 = val1;
        this.v2 = val2;
    }
    Multiplier.prototype.calc = function () {
        return this.v1 * this.v2;
    };
    Multiplier.prototype.print = function (label) {
        console.log(label + ":", this.calc());
    };
    return Multiplier;
}());
(new Multiplier(3, 4)).print("result");
var MyMap = (function () {
    function MyMap() {
        this.a = new Array();
    }
    MyMap.prototype.put = function (key, value) {
        this.a.push([key, value]);
    };
    MyMap.prototype.get = function (key) {
        for (var i = 0; i < this.a.length; i++) {
            if (this.a[i][0] == key)
                return this.a[i][0];
        }
        return null;
    };
    MyMap.prototype.clear = function () {
        this.a.length = 0;
    };
    MyMap.prototype.print = function () {
        for (var i = 0; i < this.a.length; i++) {
            console.log(this.a[i]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.put('apples', 5);
numberMap.put('bananas', 10);
numberMap.print();
var stringMap = new MyMap();
stringMap.put('name', "Max");
stringMap.put('age', "27");
stringMap.print();
var ES5Map = (function () {
    function ES5Map() {
        this.map = {};
    }
    ES5Map.prototype.put = function (key, item) {
        this.map[key] = item;
    };
    ES5Map.prototype.get = function (key) {
        return this.map[key];
    };
    ES5Map.prototype.clear = function () {
        this.map = {};
    };
    ES5Map.prototype.values = function () {
        var a = new Array();
        for (var key in this.map) {
            a.push(this.map[key]);
        }
        return a;
    };
    ES5Map.prototype.keys = function () {
        var a = new Array();
        for (var key in this.map) {
            a.push(key);
        }
        return a;
    };
    ES5Map.prototype.print = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return ES5Map;
}());
var nm = new ES5Map();
nm.put('pears', 5);
nm.put('cookies', 10);
nm.print();
console.log('values:', nm.values());
console.log('keys:', nm.keys());
var sm = new ES5Map();
sm.put('name', "Charles");
sm.put('age', "53");
sm.print();
console.log('values:', sm.values());
console.log('keys:', sm.keys());
//# sourceMappingURL=app.js.map