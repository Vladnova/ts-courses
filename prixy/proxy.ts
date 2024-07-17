interface IPaymentAPI {
    getPaymentDetails(id: number): IPayment | undefined;
}

interface IPayment {
    id: number;
    sum: number;
}


class PaymentAPI implements IPaymentAPI {
    private data = [{id: 1, sum: 1}, {id: 2, sum: 2}];

    getPaymentDetails(id: number): IPayment | undefined {
        return this.data.find(d => d.id === id);
    }
}

class PaymentAccessProxy implements IPaymentAPI{
    constructor(private api:PaymentAPI, private userId:number) {}

    getPaymentDetails(id: number): IPayment | undefined {
        if(this.userId === 1){
            return this.api.getPaymentDetails(id);
        }
        console.log('Failed to get payment details');
    }

}

const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);

console.log(proxy.getPaymentDetails(2));


