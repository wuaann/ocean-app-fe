import {ListResponse,PostModel} from "../../models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";


export interface PostState{
    errorData: string;
    isLoading: boolean;
    listPost: ListResponse<PostModel>
}

const initialState: PostState = {
    errorData: "",
    isLoading:false ,
    listPost:{
        data:[],
        paging:{
            page: 0,
            limit: 0,
            total: 0,
            cursor: "",
            next_cursor: "string"
        }
    }
}



const postSlice = createSlice({
    name:'post',
    initialState,
    reducers:{

        getAllPost(state){
            state.isLoading = true

        },

        getAllPostSuccess(state, action:PayloadAction<ListResponse<PostModel>>){
            state.isLoading = false
            state.listPost = action.payload
        },

        getAllPostFail(state, action:PayloadAction<string>){
            state.isLoading = false
            state.errorData = action.payload
        }
    }
})

export const postActions = postSlice.actions
export const selectListPost = (state:RootState) => state.post.listPost;

const postReducer = postSlice.reducer;

export default postReducer