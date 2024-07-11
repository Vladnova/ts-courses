var ads = "name";
var userV = {
    name: 'Vlad',
    age: 30
};
function getValueUser(obj, key) {
    return obj[key];
}
console.log(getValueUser(userV, 'name'));
console.log(getValueUser(userV, 'age'));
