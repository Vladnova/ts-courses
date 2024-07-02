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
// arry types
const skills: string[] = ["Dev", "DevOps", "Testing"];

for (const skill of skills) {
  console.log(skill);
}

skills.filter((s) => s !== "DevOps");

// tuples

const newSkills: [string, number] = ["Dev", 1];

newSkills.push("testing");
console.log(newSkills);
const s = newSkills[0];
const b = newSkills[1];

const arr: [string, number, ...boolean[]] = ["test", 2, true, false];

// readOnly

const skills2: readonly [string, number] = ["dev", 5];

// enums

enum statusCode {
  SUCCESS = 1,
  IN_PROCESS,
  FAILD
}

const res = {
  message: 'success',
  statusCode: statusCode.SUCCESS
}



// 1 - успішно
// 2 - в процесі
// 3  відхилено