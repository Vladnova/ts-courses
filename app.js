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
const skills = ['Dev', 'DevOps'];
for (const skill of skills) {
    console.log(skill);
}
