import axios from "axios";
//credentials
axios.defaults.withCredentials = true;
//api link
const API_URL = `${import.meta.env.VITE_API_URL}order`;

// calls
export const createOrder = async (orderData) => {
    const response = await axios.post(API_URL, orderData);
    return response.data;
};
export const getAllOrders = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};