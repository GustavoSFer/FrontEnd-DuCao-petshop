import axios from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:8080";

const loginUser = async (endpoint, params) => {
    try {
        const { data } = await axios.post((baseUrl + endpoint), null, { params });
    
        return data;

    } catch (e) {
        return e.request.status
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

const getAll = async(endpoint) => {
    try {
        const { data } = await axios.get(baseUrl + endpoint);
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
    getAll,
}
