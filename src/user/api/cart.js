import axios from "axios";
axios.defaults.withCredentials = true;

const API_URL = `${import.meta.env.VITE_API_URL}cart/`


export const addToCart = async (variantId, quantity) => {
    const response = await axios.post(API_URL, { variantId, quantity });
    return response.data;
};
export const viewCart = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
export const updateCartItem = async (id, quantity) => {
    const response = await axios.patch(`${API_URL}${id}`, { quantity });
    return response.data;
};
export const removeCartItem = async (id) => {
    const response = await axios.delete(`${API_URL}${id}`);
    return response.data;
};
export const validateCpn = async (code) => {
    const response = await axios.post(`${API_URL}coupon`, { code });
    return response.data;
};