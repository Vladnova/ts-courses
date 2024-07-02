"use strict";
function getFullName(userInfo) {
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
const skills = ["Dev", "DevOps", "Testing"];
for (const skill of skills) {
    console.log(skill);
}
skills.filter((s) => s !== "DevOps");
// tuples
const newSkills = ["Dev", 1];
newSkills.push('testing');
console.log(newSkills);
const s = newSkills[0];
const b = newSkills[1];
const c = newSkills[2];
