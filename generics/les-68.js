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
var List = /** @class */ (function () {
    function List(items) {
        this.items = items;
    }
    return List;
}());
var ExtendedListClass = /** @class */ (function (_super) {
    __extends(ExtendedListClass, _super);
    function ExtendedListClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtendedListClass.prototype.first = function () {
        this.items[0];
    };
    return ExtendedListClass;
}(List));
// mixins
function ExtendedList(Base) {
    return /** @class */ (function (_super) {
        __extends(ExtendedList, _super);
        function ExtendedList() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExtendedList.prototype.first = function () {
            return this.items[0];
        };
        return ExtendedList;
    }(Base));
}
var list = ExtendedList(List);
var res4 = new list(['first', 'second']);
console.log(res4.first());
