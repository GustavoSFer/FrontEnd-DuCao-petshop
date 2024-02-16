import axios from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:8080";

const loginUser = async (endpoint, params) => {
    try {
        const { data } = await axios.post((baseUrl + endpoint), null, { params });
    
        return data;

    } catch (e) {
        return "Error"
    }
}

const createUser = async (endpoint, body) => {
    try {
        const { data } = await axios.post((baseUrl + endpoint), body);
        return data;
    } catch (e) {
        return {
            error: e.message
        }
    }
    
}
export {
    loginUser,
    createUser,
}
