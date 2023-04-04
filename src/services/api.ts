import axios from "axios";

export const API = axios.create({
    baseURL: 'http://10.0.0.14:3000'
})