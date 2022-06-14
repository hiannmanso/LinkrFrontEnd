import axios from "axios";

const URL = "localhost:5000/";

async function postLogin(body) {
    return await axios.post(`${URL}signin`, body);
}

const api = {
    postLogin
};

export default api;

