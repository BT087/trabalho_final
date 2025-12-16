const supabase = require("@supabase/supabase-js");
const { Order } = require("../model/order.js");

class OrderDAO {
    constructor(url, key){
        this.database = supabase.createClient(url, key);

        return this;
    }

    async get(){
        const { data, error } = await this.database.from("order").select("*");

        if(error) throw error;

        return data.map(r => new Order(r));
    }

    async post(order){
        const value = order.value;

        const  { data, error } = await this.database.from("order").insert(value).select().single();

        if(error) throw  error;

        return new Order(data);
    }
}

module.exports = {
    OrderDAO
}