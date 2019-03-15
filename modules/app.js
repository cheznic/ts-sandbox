"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circ_1 = require("./math/circ");
var rect_1 = require("./math/rect");
var diameter = 4;
var radius = 2;
var width = 5;
var length = 3.5;
console.log("circumference of a circle with a diameter of " + diameter + ": " + circ_1.circumference(diameter));
console.log("the value of pi: " + circ_1.PI);
console.log("the area of a circle with radius of " + radius + ": " + circ_1.circ_area(radius));
console.log("the perimeter of a " + width + "x" + length + " rectangle: " + rect_1.perimeter(width, length));
console.log("the area of a " + width + "x" + length + " rectangle: " + rect_1.rect_area(width, length));
//# sourceMappingURL=app.js.map