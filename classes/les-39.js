var PaymentStatuses;
(function (PaymentStatuses) {
    PaymentStatuses[PaymentStatuses["Holded"] = 0] = "Holded";
    PaymentStatuses[PaymentStatuses["Procssed"] = 1] = "Procssed";
    PaymentStatuses[PaymentStatuses["Reversed"] = 2] = "Reversed";
})(PaymentStatuses || (PaymentStatuses = {}));
var Payment = /** @class */ (function () {
    function Payment(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatuses.Holded;
    }
    Payment.prototype.getPaymenttLifeTime = function () {
        return new Date().getTime() - this.createdAt.getTime();
    };
    Payment.prototype.unholdPayment = function () {
        if (this.status === PaymentStatuses.Procssed) {
            throw new Error("Платіж не можу бути повернений");
        }
        this.status = PaymentStatuses.Reversed;
        this.updatedAt = new Date();
    };
    return Payment;
}());
var payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
var time = payment.getPaymenttLifeTime();
console.log(time);
