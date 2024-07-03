interface IUser {
  name: string;
  email: string;
  login: string;
}

const user9: IUser = {
  name: "Vlad",
  email: "vlas@gmail.com",
  login: "Vlados",
};

interface IAdmin {
  name: string;
  role: number;
}

function logIn(id: number | string) {
  if (typeof id === "string") {
    console.log(id);
  } else {
    console.log(id);
  }
}

function isString(x: string | number): x is string {
  return typeof x === "string";
}

// переписуємо функцію logIn  з використанням type guard
function logIn2(id: number | string) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id);
  }
}


function isAdmin(user9:IUser|IAdmin): user9 is IAdmin {
    return 'role' in user9;
}

function setRole(user9:IUser|IAdmin) {
    if(isAdmin(user9)){
        user9.role
    }else{
        throw new Error('Користувач не адмін')
    }
}