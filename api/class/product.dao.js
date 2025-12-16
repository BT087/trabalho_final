const supabase = require("@supabase/supabase-js");
const { Product } = require("../model/product.js");

class ProductDAO {
    constructor(url, key){
        this.database = supabase.createClient(url, key);

        return this;
    }

    async get(){
        const { data, error } = await this.database.from("product").select("*");

        if(error) throw error;

        return data.map(r => new Product(r));
    }
}

module.exports = {
    ProductDAO
}