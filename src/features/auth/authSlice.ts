import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TokenResponse, User} from "../../models";
import {RootState} from "../../app/store";

export interface LoginPayload {
    username: string;
    salted_password: string;
}

export interface AuthState{
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
    token: TokenResponse["access_token"]["token"];
}
const initialState: AuthState ={
    isLoggedIn:false,
    logging: false,
    currentUser: undefined,
    token: localStorage.getItem('accessToken') || '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState ,
    reducers: {
        login(state, action:PayloadAction<LoginPayload>){
            state.logging = true
        },

        loginSuccess(state, action:PayloadAction<TokenResponse["access_token"]["token"]>){
            state.logging = false;
            state.isLoggedIn=true;
            state.token = action.payload
        },

        loginFailed(state, action:PayloadAction<string>){
            state.logging = false;
        },
        setCurrentUser(state,action:PayloadAction<User>){
            state.currentUser = action.payload
        },
        getCurrentUser(state,){
            state.currentUser =undefined;
        },

        logout(state){
            state.isLoggedIn = false;
            state.currentUser = undefined;
            state.token = '';
        },
    }
})

//Action
export const authActions = authSlice.actions;

//Selectors
export const selectIsLoggedIn = (state:RootState) => state.auth.isLoggedIn;
export const selectLogging = (state:RootState) => state.auth.logging;
export const selectCurrentUser = (state:RootState) => state.auth.currentUser;
export const selectToken = (state:RootState) => state.auth.token;


const authReducer = authSlice.reducer;
export default authReducer;