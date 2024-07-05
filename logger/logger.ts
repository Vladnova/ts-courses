abstract class MyLogger {
  abstract log(message: string): void;

  printDate(date:Date): void {
    this.log(date.toString())
  }
}

class UserLoger extends MyLogger {
  log(message: string): void {
    console.log(message);
  }

  logWirhDate(m: string): void {
    this.printDate(new Date());
    this.log(m);
  }
}

const l = new UserLoger();

l.logWirhDate("hi");
