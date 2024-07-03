class Userr {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const vasya = new Userr("Vasya");

vasya.name = "VASYA";

class Admins {
  role: number;
}

const admins = new Admins();

admins.role = 5
