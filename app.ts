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

const skills: string[] = ["Dev", "DevOps", "Testing"];

for (const skill of skills) {
  console.log(skill);
}

skills.filter((s) => s !== "DevOps");
