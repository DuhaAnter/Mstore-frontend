const API_URL = "http://localhost:5000/products/";

import axios from "axios";

export const allproducts = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    //console.log(response.data);
    return response.data.products;
}