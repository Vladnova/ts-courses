var user9 = {
    name: "Vlad",
    email: "vlas@gmail.com",
    login: "Vlados",
};
function logIn(id) {
    if (typeof id === "string") {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isString(x) {
    return typeof x === "string";
}
// переписуємо функцію logIn  з використанням type guard
function logIn2(id) {
    if (isString(id)) {
        console.log(id);
    }
    else {
        console.log(id);
    }
}
function isAdmin(user9) {
    return 'role' in user9;
}
function setRole(user9) {
    if (isAdmin(user9)) {
        user9.role;
    }
    else {
        throw new Error('Користувач не адмін');
    }
}
