"use strict";
var x;
(function (x) {
    function calcPeremeter(width, length) {
        return width * length;
    }
    x.calcPeremeter = calcPeremeter;
})(x || (x = {}));
