import axios from "axios";
import BaseUrl from "../Util/BaseUrl";

const baseUrl = BaseUrl();

const createRaca = async (endpoint, body) => {
    try {
        const { data } = await axios.post((baseUrl + endpoint), body);
        
        return data;
    } catch (e) {
        return {
            error: e.message
        }
    }
}

const updateRaca = async(endpoint, body) => {
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

const deleteRaca = async(endpoint) => {
    const { data } = await axios.delete(baseUrl + endpoint);

    return data;
}

export {
    createRaca,
    updateRaca,
    getAll,
    deleteRaca,
}
