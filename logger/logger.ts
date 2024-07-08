abstract class MyLogger {
  abstract log(message: string): void;

  printDate(date:Date): void {
    this.log(date.toString())
  }
}

class UserLogger extends MyLogger {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(m: string): void {
    this.printDate(new Date());
    this.log(m);
  }
}

const l = new UserLogger();


l.logWithDate("hi");
