"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('Tooooot');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
car.accelerate(10);
car.accelerate(10);
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
var Shape = (function () {
    function Shape(length, width) {
        this.width = 0;
        this.length = 0;
        this.length = length;
        this.width = width;
    }
    return Shape;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(6, 5);
console.log(rectangle.area());
var Human = (function () {
    function Human() {
        this._firstName = "";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(Human.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firstName = name;
            }
            else {
                this._firstName = "default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Human;
}());
var man = new Human();
man.firstName = "Joe";
console.log(man.firstName);
man.firstName = "Joe Ma Ma";
console.log(man.firstName);
//# sourceMappingURL=exercise4.js.map