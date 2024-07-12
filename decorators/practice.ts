interface IUserServicePractice {
  users: number;
  getUsersInDatabase(): number;
}

@CreatedAt
class UserGetDB implements IUserServicePractice {
  users: number = 1000;
  getUsersInDatabase(): number {
    return this.users;
  }
}

function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdAt: Date = new Date();
  };
}

type CreatedAt = {
    createdAt:Date
}


console.log((new UserGetDB() as IUserServicePractice & CreatedAt).createdAt)