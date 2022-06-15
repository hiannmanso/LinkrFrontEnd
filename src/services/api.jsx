import axios from "axios";

const URL = "http://localhost:5000/";

async function postLogin(body) {
    return await axios.post(`${URL}signin`, body);
}

async function postSignUp(objeto) {

    try {
        const resposta = await axios.post(`${URL}signup`,objeto);
        const {data} = resposta;
        console.log("registered!");
        return data;
    }
    catch(err) {
        console.log(err.resposta);
        return null;
    }
    
}

const api = {
    postLogin,
    postSignUp
};

export default api;

