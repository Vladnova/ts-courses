class User2 {
  name: string;
  age: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(ageOrName?: string | number) {
    if (typeof ageOrName === "string") {
      this.name = ageOrName;
    } else if (typeof ageOrName === "number") {
      this.age = ageOrName;
    }
  }
}

const user21 = new User2("Vlad");
const user22 = new User2();
const user23 = new User2(30);
