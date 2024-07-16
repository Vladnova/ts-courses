interface IInsurance {
    id: string;
    status: string;

    setVehicle(vehicle: any): void

    submit(): Promise<boolean>
}

class TFInsurance implements IInsurance {
    id: string;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle
    }

    async submit(): Promise<boolean> {
        const res = await fetch('', {
            method: 'POST',
            body: JSON.stringify({vehicle: this.vehicle})
        }), data = await res.json();
        return data.isSuccess;
    }
}

class ABInsurance implements IInsurance {
    id: string;
    status: string;
    private vehicle: any;

    setVehicle(vehicle: any): void {
        this.vehicle = vehicle
    }

    async submit(): Promise<boolean> {
        const res = await fetch('some url', {
            method: 'POST',
            body: JSON.stringify({vehicle: this.vehicle})
        }), data = await res.json();
        return data.yes;
    }
}

abstract class InsuranceFactory {
    db: any;

    abstract createInsurance(): IInsurance;

    saveInsurance(ins: IInsurance) {
        this.db.save(ins.id, ins.status)
    }

}

class TFInsuranceFactory extends InsuranceFactory {
    createInsurance(): TFInsurance {
        return new TFInsurance();
    }
}

class ABInsuranceFactory extends InsuranceFactory{
    createInsurance(): ABInsurance {
       return  new ABInsurance();
    };
}

const tfInsurance = new TFInsuranceFactory();
const ins = tfInsurance.createInsurance();
tfInsurance.saveInsurance(ins);