
import axiosClient from "./axiosClient";
import {LoginPayload, RegisterPayload} from "../features/auth/authSlice";
import {ListResponse, TokenResponse} from "../models";
import login from "../features/auth/pages/login";

const authApi = {
    login: (data: LoginPayload) : Promise<ListResponse<TokenResponse>> => {
        const url = '/login';
        return axiosClient.post(url, data);
    },
    register: (data:RegisterPayload)  =>{
        const url ="/register";
        return axiosClient.post(url,data);
    }
}

export default authApi;
