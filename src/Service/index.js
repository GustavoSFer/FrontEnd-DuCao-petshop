import axios from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:8080";

const loginUser = async (endpoint, body) => {
    const { data } = await axios.post((baseUrl + endpoint), body);

    return data;
}

const createUser = async (endpoint, body) => {
    console.log("Começar um novo");
    const { data } = await axios.post((baseUrl + endpoint), body);
    console.log("axios" + data);
    return data;
}
export {
    loginUser,
    createUser,
}
