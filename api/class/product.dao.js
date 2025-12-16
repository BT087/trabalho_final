import { createClient } from "@supabase/supabase-js"
import { Product } from "../model/product.js";

export class ProductDAO {
    constructor(url, key){
        this.database = createClient(url, key);

        return this;
    }

    async get(){
        const { data, error } = await this.database.from("product").select("*");

        if(error) throw error;

        return data.map(r => new Product(e));
    }
}