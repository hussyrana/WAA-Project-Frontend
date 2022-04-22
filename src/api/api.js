import axios from "axios";

const BASE_URL = 'http://10.200.9.191:8089';
const userData = JSON.parse(localStorage.getItem('data'));

export default axios.create({
    baseURL:BASE_URL,
    headers:{
        authorization: `Bearer ${userData.jwt}`
    }
})
