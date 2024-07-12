interface IUsersService2 {
  users: number;
  getUsersService(): number;
}

class UsersService2 implements IUsersService2 {
  users: number = 2000;

  @Catch()
  getUsersService(): number {
    throw new Error("Error!!!");
  }
}

function Catch(rethrow: boolean = false) {
  return (
    target: Object,
    _: string | symbol,
    descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
  ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
    const method = descriptor.value;
    descriptor.value = (...args: any[]) => {
      try {
        return method?.apply(target, args);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
        if (rethrow) {
          throw e;
        }
      }
    };
  };
}

console.log(new UsersService().getUsersService());
