"use strict";
let strArr = ["One", "Two", "Three"];
let guitars = ["Start", "Les Paul", 5150];
let mixData = ["EVH", 2001, true];
// strArr[0] = "Five";
strArr.push("Six");
// console.log(strArr);
guitars[3] = "Sony";
// console.log(guitars);
let testArr = [];
testArr[0] = 23;
testArr.push("Hello");
// console.log(testArr);
//exact array(length) with defined type
let myTuple = ["John", 21, true];
let john = {
    name: "John",
    age: 31,
    subjects: ["Math", "English"],
};
console.log(john);
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["F"] = 5] = "F";
})(Grade || (Grade = {}));
console.log(Grade.F);
