var UserService = /** @class */ (function () {
    function UserService() {
        this.users = 1500;
    }
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    return UserService;
}());
function nullUser(obj) {
    obj.users = 0;
    return obj;
}
function logUser(obj) {
    console.log('All users: ' + obj.users);
    return obj;
}
console.log(new UserService().getUsers());
console.log(nullUser(new UserService()).getUsers());
console.log(logUser(nullUser(new UserService())));
console.log(nullUser(logUser(new UserService())));
