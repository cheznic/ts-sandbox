"use strict";
var x;
(function (x) {
    var PI = Math.PI;
    var circ;
    (function (circ) {
        function calcCircumference(diameter) {
            return diameter * PI;
        }
        circ.calcCircumference = calcCircumference;
        function calcArea(radius) {
            return PI * radius * radius;
        }
        circ.calcArea = calcArea;
    })(circ = x.circ || (x.circ = {}));
})(x || (x = {}));
var x;
(function (x) {
    var rect;
    (function (rect) {
        function calcPerimeter(width, length) {
            return (width * 2) + (length * 2);
        }
        rect.calcPerimeter = calcPerimeter;
        function calcArea(width, length) {
            return width * length;
        }
        rect.calcArea = calcArea;
    })(rect = x.rect || (x.rect = {}));
})(x || (x = {}));
var r = x.rect;
var c = x.circ;
console.log("calculate circumference: " + c.calcCircumference(3));
console.log("calculate area of a circle: " + c.calcArea(5));
console.log("calculate rectangle perimeter: " + r.calcPerimeter(3, 4));
console.log("calculate area of a rectangle: " + r.calcArea(5, 4));
