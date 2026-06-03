
import axios from "axios";

const API_URL = "http://localhost:5000/users/";

export const login = async (email, password) => {
    // Axios automatically stringifies the data to JSON
    const response = await axios.post(`${API_URL}login`, { email, password });

    return response.data;

};
export const signup = async (name, email, password) => {

    const response = await axios.post(`${API_URL}`, { name, email, password });
    return response.data;

};
export const forget = async (email) =>{
    const response = await axios.post(`${API_URL}forget-password`,{email});
    return response.data;
};
export const verify = async (email,otpCode) =>{
    const response = await axios.post(`${API_URL}verify-otp`,{email,otpCode});
    return response.data;
};
export const reset = async (email,otpCode,newPassword) =>{
    const response = await axios.post(`${API_URL}reset-password`,{email,otpCode,newPassword});
    return response.data;
};


