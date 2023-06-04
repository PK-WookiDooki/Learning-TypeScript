//Type Assertion

type One = string;
type Two = string | number;
type Three = "Hello";

//convert to more or less specific
let a: One = "Hello";
let b = a as Two; //less specific
let c = a as Three; //more specific

let d = <One>"world";
let e = <string | number>"word";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 3, "concat") as string;

//this one actually return string with 'concat'
let nextVal: number = addOrConcat(2, 3, "concat") as number;
// console.log(typeof nextVal);

// 10 as string;

//double type casting (or) forecasting
10 as unknown as string;

//the DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
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
const year = document.getElementById("year") as HTMLSpanElement;
let thisYear: string = new Date().getFullYear().toString();
year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;
