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
let myTuple: [string, number, boolean] = ["John", 21, true];

//declaring custom type
// type Guitarist = {
//   name: string;
//   active: boolean;
//   albums: (string | number)[];
// };

// let avi: Guitarist = {
//   name: "Avicii",
//   active: true,
//   albums: ["The Night", 1990],
// };

//another way to declare type
interface Teacher {
  name: string;
  age?: number;
  subjects: string | string[];
}

let john: Teacher = {
  name: "John",
  age: 31,
  subjects: ["Math", "English"],
};
console.log(john);

//Enums
enum Grade {
  A = 1,
  B,
  C,
  D,
  F,
}

console.log(Grade.F);
