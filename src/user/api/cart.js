import axios from "axios";
axios.defaults.withCredentials = true;

//  const API_URL = "http://localhost:5000/cart/";
const API_URL = "https://mstore-backend.vercel.app/cart/";


export const addToCart = async(variantId,quantity)=>{
    const response = await axios.post(API_URL,{variantId,quantity});
    return response.data;
}; 
