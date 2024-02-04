import axios from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:8080";

const loginUser = async (endpoint, params) => {
    const { data } = await axios.get((baseUrl + endpoint), { params });

    return data;
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
