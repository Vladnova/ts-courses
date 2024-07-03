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
newSkills.push("testing");
console.log(newSkills);
const s = newSkills[0];
const b = newSkills[1];
const arr = ["test", 2, true, false];
// readOnly
const skills2 = ["dev", 5];
// enums
var statusCode;
(function (statusCode) {
    statusCode[statusCode["SUCCESS"] = 1] = "SUCCESS";
    statusCode[statusCode["IN_PROCESS"] = 2] = "IN_PROCESS";
    statusCode[statusCode["FAILD"] = 3] = "FAILD";
})(statusCode || (statusCode = {}));
const res = {
    message: 'success',
    statusCode: statusCode.SUCCESS
};
// 1 - успішно
// 2 - в процесі
// 3  відхилено
