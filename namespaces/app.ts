/// <reference path="./cMath.ts"/>
/// <reference path="./rMath.ts"/>

// when importing namespaces from other files in this way you must compile with 
// the --outFile option:
//    tsc --watch --outFile app.js 

// namespace alias syntax
import r = x.rect;
import c = x.circ;

console.log(`calculate circumference: ${c.calcCircumference(3)}`);
console.log(`calculate area of a circle: ${c.calcArea(5)}`);
console.log(`calculate rectangle perimeter: ${r.calcPerimeter(3, 4)}`);
console.log(`calculate area of a rectangle: ${r.calcArea(5, 4)}`);
