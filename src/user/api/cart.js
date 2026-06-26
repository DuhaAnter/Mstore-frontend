import axios from "axios";
axios.defaults.withCredentials = true;

 const API_URL = `${import.meta.env.VITE_API_URL}cart/`


export const addToCart = async(variantId,quantity)=>{
    const response = await axios.post(API_URL,{variantId,quantity});
    return response.data;
}; 
