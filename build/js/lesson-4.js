"use strict";
//literal type
let myName;
//union type
let userName;
userName = "Genos";
let add = function (c, d) {
    return c + d;
};
const log = (message) => {
    console.log(message);
};
let multiply = function (a, b) {
    return a * b;
};
// console.log(multiply(3, 4));
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// log(addAll(2, 3));
//default params value
const sumAll = (a = 10, b, c = 5) => {
    return a + b + c;
};
// log(sumAll(2, 3, 4));
// log(sumAll(undefined, 5));
// log(sumAll(2, 3));
//Rest Parameters
const total = (a, ...numbs) => {
    return a + numbs.reduce((prev, cv) => prev + cv, 0);
};
//first para is for 'a'
// log(total(3, 33, 2, 1, 1));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinte = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
log(isNumber(2));
//use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This should never happen");
};
log(numberOrString("Hello"));
