import { call, put, takeLatest } from "redux-saga/effects";

import { getUsers, loadaddcomment, loadcomment } from "./comment";
import { defaultAxios } from "./AxiosApi";
import { AxiosResponse } from "axios";

function* getComment(data: any) {
    try {
        console.log(data.payload);
        console.log(data.payload);
        const response: AxiosResponse<any, any> = yield call(defaultAxios, "comment/id", "post", data.payload);

        yield put(getUsers(response.data));
    } catch (error) {
        console.error(error);
    }
}

function* addcomment(data: any) {
    try {
        const response: AxiosResponse<any, any> = yield call(defaultAxios, "comment", "post", data.payload);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

export function* watchGetComment() {
    yield takeLatest(loadaddcomment, addcomment);
    yield takeLatest(loadcomment, getComment);
}
