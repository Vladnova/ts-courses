class Car {
  private _model: string;
  private year: Date;
  protected run: number;

  set model(model: string) {
    this._model = model;
    
  }

  get model() {
    return this._model;
  }
}

console.log(new Car());

class Truck extends Car {
  setModel() {
    this.model;
    this.run;
  }
}


const cer = new Car()

