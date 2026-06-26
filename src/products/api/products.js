const API_URL = `${import.meta.env.VITE_API_URL}products/`;



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