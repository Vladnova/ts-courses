interface IUsersService {
  users: number;
  getUsersService(): number;
}

class UsersService implements IUsersService {
  users: number = 2000;

  @LogDec
  getUsersService(): number {
    throw new Error("Error!!!");
  }
}

function LogDec(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
): TypedPropertyDescriptor<(...args: any[]) => any> | void {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
  descriptor.value = () => {
    console.log("message");
  };
}

console.log(new UsersService().getUsersService());
