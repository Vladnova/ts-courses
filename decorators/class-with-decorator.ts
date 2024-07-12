interface IUserServiceEx2 {
  users: number;
  getUsers(): number;
}

// @nullUserEx2
@threeUserEx3
class UserServiceEx2 implements IUserServiceEx2 {
  users: number = 1500;
  getUsers(): number {
    return this.users;
  }
}

// function nullUserEx2(target: Function) {
//   target.prototype.users = 0;
// }

function threeUserEx3<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}


console.log(new UserServiceEx2().getUsers());