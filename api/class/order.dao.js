import { createClient } from "@supabase/supabase-js";
import { Order } from "../model/order.js"

export class OrderDAO {
    constructor(url, key){
        this.database = createClient(url, key);

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