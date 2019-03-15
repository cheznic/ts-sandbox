import { PI as pi, circumference as circ, circ_area as ca } from "./math/circ";
import { rect_area as ra, perimeter as perim } from "./math/rect";

// to use modules you must install systemJS
//     npm install systemjs --save
let diameter = 4;
let radius = 2;
let width = 5;
let length = 3.5;

console.log(`circumference of a circle with a diameter of ${diameter}: ${circ(diameter)}`);
console.log(`the value of pi: ${pi}`);
console.log(`the area of a circle with radius of ${radius}: ${ca(radius)}`);
console.log(`the perimeter of a ${width}x${length} rectangle: ${perim(width, length)}`);
console.log(`the area of a ${width}x${length} rectangle: ${ra(width, length)}`);
