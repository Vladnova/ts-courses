enum PaymentStatuses {
  Holded,
  Procssed,
  Reversed,
}

class Payment {
  id: number;
  status: PaymentStatuses = PaymentStatuses.Holded;
  createdAt: Date = new Date();
  updatedAt: Date;

  constructor(id: number) {
    this.id = id;
  }

  getPaymenttLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment(): void {
    if (this.status === PaymentStatuses.Procssed) {
      throw new Error("Платіж не можу бути повернений");
    }
    this.status = PaymentStatuses.Reversed;
    this.updatedAt = new Date();
  }
}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymenttLifeTime();
console.log(time);
