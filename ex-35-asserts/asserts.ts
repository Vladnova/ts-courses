interface IUser {
    name: string;
  }
  
  const as = {};
  
  assertUser(as);
  as.name = 'Vlad'
  
  function assertUser(obj: unknown): asserts obj is IUser {
    if (typeof obj === "object" && !!obj && "name" in obj) {
      return
    }
    throw new Error('Don`t user')
  }