interface UserV {
  name: string;
  age: number;
}

type KeysOfUser = keyof UserV;

const ads: KeysOfUser = "name";

const userV:UserV = {
    name:'Vlad',
    age: 30
}


function getValueUser<T, K extends keyof T>(obj:T, key:K):T[K]{
    return obj[key]
}

console.log(getValueUser(userV, 'name')) 
console.log(getValueUser(userV, 'age')) 