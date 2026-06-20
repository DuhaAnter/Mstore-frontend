// const API_URL = "http://localhost:5000/products/";
// const API_URL = "https://dummyjson.com/products/";
const API_URL = "https://mstore-backend.vercel.app/";



import axios from "axios";

export const allproducts = async () => {
    const response = await axios.get(API_URL);
    //console.log(response.data);
    return response.data.products;
}

export const productById = async (id) => {
    const response = await axios.get(`${API_URL}${id}`);
    return response.data;
}
// export const relatedProducts = async (category) => {
//     const response = await axios.get(`${API_URL}/category/${category}`);
//     return response.data;
// }
export const relatedProducts = async (id) => {
    const response = await axios.get(`${API_URL}category/${id}`);
    return response.data;
}