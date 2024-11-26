import axios from "axios";
const BASE_URL = 'http://localhost:3000'

export const api = axios.create({
    baseURL: BASE_URL
});

// api.interceptors.request.use((config) => {
//     const token = localStorage.getItem("Access Token");

//     if (token) {
//         config.headers['Authorization'] = `Bearer ${token}`
//     }

//     return config;
// }, (error =>{
//     return Promise.reject(error);
// }))

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{
        'Content-Type': 'application/json'},
        withCredentials: true
})