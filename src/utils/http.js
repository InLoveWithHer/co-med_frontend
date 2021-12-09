import axios from "axios";

export default axios.create({
    baseURL: 'https://comed-backend.herokuapp.com/api/',
    responseType: 'json',
    withCredentials: true
});