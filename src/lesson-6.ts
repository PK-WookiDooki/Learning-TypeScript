class Coder {
  secondLang!: string;

  constructor(
    public name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.age = age;
    this.music = music;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age} years old!`;
  }
}

const Dave = new Coder("Dave", "Pop", 21);
// Dave.secondLang = "Javascript";
console.log(Dave.getAge());
// console.log(Dave.age);
// console.log(Dave);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I'm expertise in ${this.lang}`;
  }
}

const Alice = new WebDev("Asus", "Alice", 23, "Rock");
console.log(Alice.getLang());
// console.log(Alice.age);
// console.log(Alice.lang);

//--------------------------------------------------------//

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string): string {
    return `${this.name} ${action} ${this.instrument}`;
  }
}

const Chit = new Guitarist("Chitsan Maung", "Guitar");
console.log(Chit.play("playing"));

//--------------------------------------------------------//

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;
  constructor(public name: string) {
    this.id = ++Peeps.count;
    this.name = name;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Felix = new Peeps("Felix");

console.log(Peeps.getCount());
// console.log(John.id);

//--------------------------------------------------------//

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
    } else throw new Error("Params is not an array of string");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil", "Harry"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "Zayn"];
console.log(MyBands.data);
// MyBands.data = ["Vans", 444];
