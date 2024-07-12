interface IUserServiceEx2 {
  users: number;
  getUsers(): number;
}

class UserService implements IUserServiceEx2 {
  users: number = 1500;
  getUsers(): number {
    return this.users;
  }
}

function nullUserEx2(obj: IUserServiceEx2): IUserServiceEx2 {
  obj.users = 0;
  return obj;
}

function logUser(obj:IUserServiceEx2):IUserServiceEx2 {
    console.log('All users: ' + obj.users)
    return obj
}

console.log(new UserService().getUsers());
console.log(nullUserEx2(new UserService()).getUsers());
console.log(logUser(nullUserEx2(new UserService())))
console.log(nullUserEx2(logUser(new UserService())))
