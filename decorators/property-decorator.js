var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var UsersService3 = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _users_decorators;
    var _users_initializers = [];
    return _a = /** @class */ (function () {
            function UsersService3() {
                this.users = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _users_initializers, 2000));
            }
            UsersService3.prototype.getUsersService = function () {
                throw new Error("Error!!!");
            };
            return UsersService3;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _users_decorators = [Max(100)];
            __esDecorate(null, null, _users_decorators, { kind: "field", name: "users", static: false, private: false, access: { has: function (obj) { return "users" in obj; }, get: function (obj) { return obj.users; }, set: function (obj, value) { obj.users = value; } }, metadata: _metadata }, _users_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
function Max(max) {
    return function (target, propertyKey) {
        console.log(target);
        console.log(propertyKey);
        var value;
        var setter = function (newValue) {
            if (newValue > max) {
                console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u043D\u0435 \u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u0431\u0456\u043B\u044C\u0448\u0438\u043C \u0437\u0430 ".concat(max));
            }
            else {
                value = newValue;
            }
        };
        var getter = function () {
            return value;
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}
var usersServices = new UsersService3();
usersServices.users = 1;
console.log(usersServices.users);
usersServices.users = 101;
console.log(usersServices.users);
