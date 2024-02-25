import axios from "axios";
import BaseUrl from "../Util/BaseUrl";

const baseUrl = BaseUrl();

const login = async (endpoint, params) => {
    try {
        const { data } = await axios.post((baseUrl + endpoint), null, { params });
    
        return data;

    } catch (e) {
        return e.request.status
    }
}

const create = async (endpoint, body) => {
    try {
        const { data } = await axios.post((baseUrl + endpoint), body);
        
        return data;
    } catch (e) {
        return {
            error: e.message
        }
    }
}

const update = async(endpoint, body) => {
    try {
        const { data } = await axios.put((baseUrl + endpoint), body);
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

const deletar = async(endpoint) => {
    const { data } = await axios.delete(baseUrl + endpoint);

    return data;
}

export {
    login,
    create,
    update,
    getAll,
    deletar,
}
