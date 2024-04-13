import axios from "axios";
import BaseUrl from "../Util/BaseUrl";

const baseUrl = BaseUrl();

const saveAgenda = async (endpoint, params) => {
    try {
        const { data } = await axios.post((baseUrl + endpoint), null, { params });
    
        return data;

    } catch (e) {
        return e.request.status
    }
}

export default saveAgenda;
