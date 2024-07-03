// преобразование типов

let n = 5;
let d: string = n.toString(); // працює як і в js, перетворюємо тип number в  string

let r = new String(n).valueOf(); //  потрібно вказати valueOf(), оскільки new String повверне String з великої літери,
//який є об'єктом і при присвоєні типу string буде помилка

interface IUser {
  name: string;
  email: string;
  login: string;
}
// така запис не валідна в react
const user6 = <IUser>{
  name: "Vlad",
  email: "vlas@gmail.com",
  login: "Vlados",
};

const user8: IUser = {
  name: "Vlad",
  email: "vlas@gmail.com",
  login: "Vlados",
};

interface IAdmin {
  name: string;
  role: number;
}
// таке переобразування типів краще не робити, бо в нас вказано, що в адміні має бути тільки два полю, а туди потрапляє ще поле email  та  login
// const admin: IAdmin = {
//   ...user8,
//   role: 1,
// };

// кращий варіант

function userToAdmin(user8: IUser): IAdmin {
  return {
    name: user8.name,
    role: 2
  };
}
