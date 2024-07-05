var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyLogger = /** @class */ (function () {
    function MyLogger() {
    }
    MyLogger.prototype.printDate = function (date) {
        this.log(date.toString());
    };
    return MyLogger;
}());
var UserLoger = /** @class */ (function (_super) {
    __extends(UserLoger, _super);
    function UserLoger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserLoger.prototype.log = function (message) {
        console.log(message);
    };
    UserLoger.prototype.logWirhDate = function (m) {
        this.printDate(new Date());
        this.log(m);
    };
    return UserLoger;
}(MyLogger));
var l = new UserLoger();
l.logWirhDate("hi");
