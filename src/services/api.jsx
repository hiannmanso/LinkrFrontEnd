import axios from "axios";

const URL = "localhost:5000/";

function postLogin(body) {
    return axios.post(`${URL}signin`, body);
}

const api = {
    postLogin
};

export default api;

