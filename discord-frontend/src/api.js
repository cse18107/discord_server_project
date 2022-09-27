import axios from "axios";
import { logout } from "./shared/utils/auth";
const apiClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 1000,
});

apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user');

    if(userDetails) {
        const token = JSON.parse(userDetails).token;
        console.log(token);
        config.headers.Authorization = `Bearer ${token}`
        console.log(config);
    }
    return config;
},(err)=> {
    return Promise.reject(err)
})

export const login = async (url, data) => {
        return await apiClient.post(url, data);
};

export const register = async (url,data) => {
  return await apiClient.post(url, data);
};

const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;

    if(responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    }
}
