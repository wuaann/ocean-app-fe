import { all } from 'redux-saga/effects';
import {authSaga} from "../features/auth/authSaga";
import {postSaga} from "../features/post/postSaga";

export default function* rootSaga() {
    yield all([ authSaga(), postSaga() ]);
}