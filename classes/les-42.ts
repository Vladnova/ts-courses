interface ILogger {
  log(...args): void;
  error(...args): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  error(...args: any[]): void {
    console.log(...args);
  }
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

interface IDel {
  delet(): void;
}

class Userrr implements IPayable, IDel {
  delet(): void {
    throw new Error("Method not implemented.");
  }
  pay(paymentId: number): void {}
  price?: number | undefined;
}
