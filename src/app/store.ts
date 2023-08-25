import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./rootSaga";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/post/postSlice";


const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware)
});



sagaMiddleware.run(rootSaga)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;