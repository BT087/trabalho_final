export class Order {
    constructor(data){
        this.id = data.id;
        this.product = data.product;
        this.receiver = data.receiver;
        this.email = data.email;
        this.quantity = data.quantity;
        this.status = data.status;

        return this;
    }

    get value(){
        return {
            id: this.id,
            product: this.product,
            receiver: this.receiver,
            email: this.email,
            quantity: this.quantity,
            status: this.status
        }
    }
}