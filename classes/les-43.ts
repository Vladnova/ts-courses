type PaymentStatus1 = "new" | "paid";

class Payment1 {
  id: number;
  status: PaymentStatus1 = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

class PersistedPayment extends Payment1 {
  databaseId: number;
  paidAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {
    // save
  }

  override pay(date?: Date) {
    super.pay();
    if (date) {
      this.paidAt = date;
    }
  }
}

// new PersistedPayment().
