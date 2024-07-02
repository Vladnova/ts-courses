function getFullName(userInfo: { firstName: string; surname: string }): string {
  return `${userInfo.firstName} ${userInfo.surname} `;
}

const user = {
  firstName: "Dmytro",
  surname: "Dorosh",
  city: "Lviv",
  age: 30,
};

getFullName(user);
