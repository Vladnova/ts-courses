interface IUserServiceEx3 {
  users: number;
  getUsers(): number;
}

// @nullUserEx5
@setUsers(2)
// @threeUserEx4
class UserServiceEx3 implements IUserServiceEx3 {
  users: number;
  getUsers(): number {
    return this.users;
  }
}

function nullUserEx5(target: Function) {
  target.prototype.users = 0;
}

function threeUserEx4<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    users = 3;
  };
}

function setUsers(users: number) {
  return (target: Function) => {
    target.prototype.users = users;
  };
}

console.log(new UserServiceEx3().getUsers());
