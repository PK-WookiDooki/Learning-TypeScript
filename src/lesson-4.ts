type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];

interface Teacher {
  name: string;
  age?: number;
  subjects: string | string[];
}

type userId = stringOrNumber;

//literal type
let myName: "Dave";

//union type
let userName: "Genos" | "Pyae" | "Amy";
userName = "Genos";

let add = function (c: number, d: number): number {
  return c + d;
};

const log = (message: any): void => {
  console.log(message);
};

// type mathFunction = (a: number, b: number) => number;

interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (a, b) {
  return a * b;
};
// console.log(multiply(3, 4));

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};

// log(addAll(2, 3));

//default params value
const sumAll = (a: number = 10, b: number, c: number = 5) => {
  return a + b + c;
};

// log(sumAll(2, 3, 4));
// log(sumAll(undefined, 5));
// log(sumAll(2, 3));

//Rest Parameters
const total = (a: number, ...numbs: number[]): number => {
  return a + numbs.reduce((prev, cv) => prev + cv, 0);
};
//first para is for 'a'
// log(total(3, 33, 2, 1, 1));

const createError = (errMsg: string) => {
  throw new Error(errMsg);
};

const infinte = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

//custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

log(isNumber(2))

//use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return createError("This should never happen");
};

log(numberOrString("Hello"));
