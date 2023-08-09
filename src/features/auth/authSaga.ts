import {authActions, LoginPayload} from "./authSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {put, take,all, fork, call, } from 'redux-saga/effects';
import {TokenResponse, } from "../../models";
import authApi from "../../api/authApi";
// import userApi from "../../api/uerApi";


// function* FetchCurrentUser() {
//
//     try {
//         const data: User = yield call(userApi.getCurrentUser);
//         yield put(authActions.setCurrentUser(data));
//     } catch (error:any) {
//         console.log(error.message)
//     }
// }
function* handleLogin(payload: LoginPayload) {
    try {
        const data: TokenResponse = yield call(authApi.login, payload);
        if (data) {
            yield put(authActions.loginSuccess(data.access_token["token"]));
        }
        localStorage.setItem('accessToken', data.access_token["token"]);
        yield put(authActions.getCurrentUser());

    } catch (error: any) {
        yield put(authActions.loginFailed(error.message));
    }
}
function* handleLogout() {
    localStorage.removeItem('accessToken');
    yield put(authActions.logout)
}


// function* watchGetCurrentUser() {
//     yield takeLatest(authActions.getCurrentUser.type, FetchCurrentUser);
// }
function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem('accessToken'));
        if (isLoggedIn) {
            yield take(authActions.logout.type);
            yield call(handleLogout)
        }
        const action: PayloadAction<LoginPayload> = yield take(authActions.login.type);
        yield fork(handleLogin, action.payload)
    }

}



export function* authSaga() {

    yield all([
        call(watchLoginFlow),
        // call(watchGetCurrentUser),
    ]);
}