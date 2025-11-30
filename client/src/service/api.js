import axios from "axios";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:8000";   // ✅ Backend URL

export const authenticateSignup = async (userData) => {
    try {
        return await axios.post(`${URL}/signup`, userData);
    } catch (error) {
        console.log("❌ Signup API Error:", error);
        return error.response;
    }
};

export const authenticateLogin = async (userData) => {
    try {
        return await axios.post(`${URL}/login`, userData);
    } catch (error) {
        console.log("❌ Login API Error:", error);
        return error.response;
    }
};

export const getProducts = async () => {
    try {
        let response = await axios.get(`${URL}/products`);
        return response.data;
    } catch (error) {
        console.log("❌ getProducts API Error:", error);
    }
};

export const getProductById = async (id) => {
    try {
        let response = await axios.get(`${URL}/product/${id}`);
        return response.data;
    } catch (error) {
        console.log("❌ getProductById API Error:", error);
    }
};

