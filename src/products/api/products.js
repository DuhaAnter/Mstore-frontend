const API_URL = "http://localhost:5000/products/";

import axios from "axios";

export const allproducts = async () => {
    const response = await axios.get(API_URL);
    //console.log(response.data);
    return response.data.products;
}