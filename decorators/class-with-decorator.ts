interface IUserServiceEx2 {
  users: number;
  getUsers(): number;
}

// @nullUserEx2
@threeUserEx3()
class UserServiceEx2 implements IUserServiceEx2 {
  users: number = 1500;
  getUsers(): number {
    return this.users;
  }
}

// function nullUserEx2(target: Function) {
//   target.prototype.users = 0;
// }

function threeUserEx3() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        // @ts-ignore
        this.users = 3
      }
    };
  }; 

}



console.log(new UserServiceEx2().getUsers());


// function classDecoratorFactory() {
//   return function <T extends { new (...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//       constructor(...args: any[]) {
//         super(...args);
//         console.log(`Decorator parameters: ${param1}, ${param2}`);
//         console.log(`Class ${constructor.name} is instantiated`);
//       }
//     };
//   };
// }

// @classDecoratorFactory()
// class MyClass {
//   constructor() {
//     console.log("Executing MyClass constructor");
//   }

//   myMethod() {
//     console.log("Executing myMethod");
//   }
// }