interface IUsersService3 {
  users: number;
  getUsersService(): number;
}

class UsersService3 implements IUsersService3 {
  @Max(100)
  users: number = 2000;

  getUsersService(): number {
    throw new Error("Error!!!");
  }
}

function Max(max: number) {
  return (target: Object, propertyKey: string | symbol) => {
    console.log(target);
    console.log(propertyKey);
    let value: number;

    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log(`Значення не може бути більшим за ${max}`);
      } else {
        value = newValue;
      }
    };

    const getter = function (): number {
      return value;
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

const usersServices = new UsersService3();

usersServices.users = 1;

console.log(usersServices.users);

usersServices.users = 101;
console.log(usersServices.users);
