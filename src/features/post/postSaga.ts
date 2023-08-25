import {all, call, put, takeLatest} from "redux-saga/effects";
import {ListResponse, PostModel} from "../../models";
import {postActions} from "./postSlice";
import postApi from "../../api/postApi";

function* handleFetchListPost(){
    try {
        const data: ListResponse<PostModel> = yield call(postApi.getAllPOst)

        yield  put(postActions.getAllPostSuccess(data))
    }catch (e:any) {
        yield put(postActions.getAllPostFail(e.message));
    }
}

function* watchFetchListPostFlow(){
  yield takeLatest(postActions.getAllPost.type, handleFetchListPost)
}

export function* postSaga(){

    yield all(
        [
            call(watchFetchListPostFlow)
        ]
    )
}   