const API_URL = `${import.meta.env.VITE_API_URL}categories`;

import axios from "axios";

export const allCates = async ()=>{
    const response = await axios.get(`${API_URL}`);
    return response.data;
};
export const allSubCatesInACate = async (id)=>{
    const response = await axios.get(`${API_URL}/${id}/subcategories`);
    return response.data;
};