import axiosClient from "./axiosClient";

import {PostModel} from "../models/postModel";
import {ListResponse} from "../models";

const userApi = {
    getAllPOst: () : Promise<ListResponse<PostModel>> => {
        const url = '/post';
        return axiosClient.get(url);
    },


}
export default userApi
