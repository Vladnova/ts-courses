var PaymentAPI = /** @class */ (function () {
    function PaymentAPI() {
        this.data = [{ id: 1, sum: 1 }, { id: 2, sum: 2 }];
    }
    PaymentAPI.prototype.getPaymentDetails = function (id) {
        return this.data.find(function (d) { return d.id === id; });
    };
    return PaymentAPI;
}());
var PaymentAccessProxy = /** @class */ (function () {
    function PaymentAccessProxy(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    PaymentAccessProxy.prototype.getPaymentDetails = function (id) {
        if (this.userId === 1) {
            return this.api.getPaymentDetails(id);
        }
        console.log('Failed to get payment details');
    };
    return PaymentAccessProxy;
}());
var proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetails(2));
