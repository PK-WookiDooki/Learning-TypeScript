"use strict";
//Type Assertion
//convert to more or less specific
let a = "Hello";
let b = a; //less specific
let c = a; //more specific
let d = "world";
let e = "word";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "concat");
//this one actually return string with 'concat'
let nextVal = addOrConcat(2, 3, "concat");
// console.log(typeof nextVal);
// 10 as string;
//double type casting (or) forecasting
10;
//the DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
// img.src;
// myImg.src;
//getting DOM element from HTML (original JS Code)
// const year = document.getElementById("year");
// const thisYear = new Date().getFullYear();
// year.setAttribute("dateTime", thisYear);
// year.textContent = thisYear;
// //1st variation
// const year: HTMLElement | null ;
// year = document.getElementById("year");
// let thisYear: string;
// thisYear = new Date().getFullYear().toString();
// if (year) {
//   year.setAttribute("dateTime", thisYear);
//   year.textContent = thisYear;
// }
//2nd variation
const year = document.getElementById("year");
let thisYear = new Date().getFullYear().toString();
year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;
