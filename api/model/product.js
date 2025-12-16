export class Product {
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.description = data.description;
        this.price = data.price;
        this.stock = data.stock;

        return this;
    }

    get value(){
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            description: this.description,
            price: this.price,
            stock: this.stock
        }
    }
}