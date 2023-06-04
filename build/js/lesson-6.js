"use strict";
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.music = music;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old!`;
    }
}
const Dave = new Coder("Dave", "Pop", 21);
// Dave.secondLang = "Javascript";
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave);
class WebDev extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I'm expertise in ${this.lang}`;
    }
}
const Alice = new WebDev("Asus", "Alice", 23, "Rock");
console.log(Alice.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} ${this.instrument}`;
    }
}
const Chit = new Guitarist("Chitsan Maung", "Guitar");
console.log(Chit.play("playing"));
//--------------------------------------------------------//
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
        this.name = name;
    }
}
Peeps.count = 0;
const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Felix = new Peeps("Felix");
console.log(Peeps.getCount());
// console.log(John.id);
//--------------------------------------------------------//
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
        }
        else
            throw new Error("Params is not an array of string");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil", "Harry"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Zayn"];
console.log(MyBands.data);
// MyBands.data = ["Vans", 444];
