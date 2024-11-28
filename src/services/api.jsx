import axios from "axios";
const BASE_URL = 'http://localhost:3000'
// const BASE_URL = 'https://dummyjson.com'

export const api = axios.create({
    baseURL: BASE_URL, 
    headers: {
        'Content-Type': 'application/json'},
        withCredentials: true
    }
);

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
        credentials: 'include'
})