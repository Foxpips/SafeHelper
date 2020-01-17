"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = function (name) { return "Hello " + name; };
exports.safeMap = function (array, action) {
    try {
        return array.map(function (x) { return action(x); });
    }
    catch (e) {
        console.log(e.message);
        return array;
    }
};
// @ts-ignore
String.prototype.cool = function () {
    return this + " so cool";
};
