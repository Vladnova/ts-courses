class User6 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Users5 extends Array<User6> {
  searchByName(name: string) {
    return this.filter((u) => u.name === name);
  }
}

new Users5();

class UserList {
  users: User6[];
}

class Payment6 {
  data: Date;
}

class UserWithPayment {
  user: User6;
  payment: Payment6;

  constructor(user: User6, payment: Payment6) {
    this.user = user;
    this.payment = payment;
  }
}
