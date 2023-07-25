import axios from 'axios';
import queryString from "query-string";
// import {getToken} from "../utils";
const getToken = () => {
  
}

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    // Modify the request configuration
    config.headers['Authorization'] = `Bearer ${getToken()}`;
    config.headers['content-type'] = "application/json";
    return config;

})
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data.data;
    }
    return response;
}, (error) => {
    return Promise.reject(error.response)
});
export default axiosClient;