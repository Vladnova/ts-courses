"use strict";
function getFullName(firstName, surname) {
    return `${firstName} ${surname}`;
}
const getFullNameArrow = (firstName, surname) => {
    return `${firstName} ${surname}`;
};
console.log(getFullName('Vlad', 'Novalenko'));
