"use strict";
var x;
(function (x) {
    var PI = 3.1415;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    x.calcCircumference = calcCircumference;
})(x || (x = {}));
