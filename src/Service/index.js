import axios from "axios";

const baseUrl = process.env.BASE_URL || "http://localhost:3001";

const loginUser = async (endpoint, body) => {
    const { data } = await axios.post((baseUrl + endpoint), body);

    return data;
}

export {
    loginUser,
}
