interface IUserService {
  users: number;
  getUsers(): number;
}

class UserService implements IUserService {
  users: number = 1500;
  getUsers(): number {
    return this.users;
  }
}

function nullUser(obj: IUserService): IUserService {
  obj.users = 0;
  return obj;
}

function logUser(obj:IUserService):IUserService {
    console.log('All users: ' + obj.users)
    return obj
}

console.log(new UserService().getUsers());
console.log(nullUser(new UserService()).getUsers());
console.log(logUser(nullUser(new UserService())))
console.log(nullUser(logUser(new UserService())))
