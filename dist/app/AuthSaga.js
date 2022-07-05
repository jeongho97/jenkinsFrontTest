import { call, put, takeLatest } from "redux-saga/effects";
import { getPapersFail } from "./paper";
import { defaultAxios } from "./AxiosApi";
import { APIload, APIload2, APIload3, putAPI, putKaokaoID } from "./Auths";
import { getUserById, login } from "./users";
function* getKakaoAPI(data) {
    try {
        const data2 = yield window.Kakao.API.request({
            url: data.payload,
        });
        console.log(data2);
        // console.log(data2.id);
        // console.log(data2.id);
        // console.log(data2.properties.nickname);
        // console.log(data2.properties.profile_image);
        yield put(putAPI(data2));
        const response = yield call(defaultAxios, "/user/kaologin", "post", {
            userId: data2.id,
        });
        if (response.data.length > 0) {
            yield put(putKaokaoID(response.data[0]));
            const kakaoresponse = yield call(defaultAxios, "/user/Login", "post", {
                userId: data2.id,
                password: data2.id,
            });
            yield put(getUserById(kakaoresponse.data.id));
            yield put(login(true));
            localStorage.setItem("loginUser", kakaoresponse.data.token);
            window.location.href = "profile";
        }
        else {
            yield call(defaultAxios, "/user", "post", {
                userId: data2.id,
                password: data2.id,
                name: data2.properties.nickname,
                img: data2.properties.profile_image,
            });
            const kakaoresponse = yield call(defaultAxios, "/user/Login", "post", {
                userId: data2.id,
                password: data2.id,
            });
            yield put(getUserById(kakaoresponse.data.id));
            yield put(login(true));
            localStorage.setItem("loginUser", kakaoresponse.data.token);
            window.location.href = "profile";
        }
    }
    catch (error) {
        console.log(error);
    }
}
function* getKakao(data) {
    try {
        const response = yield call(defaultAxios, "/user/kaologin", "post", data.payload);
        yield put(putKaokaoID(response.data));
    }
    catch (error) {
        console.error(error);
    }
}
function* postKakao(data) {
    try {
        yield call(defaultAxios, "/user", "post", data.payload);
        alert("회원가입이 완료되었습니다");
    }
    catch (error) {
        alert("아이디가 중복입니다 다시 가입해 주세요");
        yield put(getPapersFail(error));
        console.error(error);
    }
}
export function* watchGetAPI() {
    yield takeLatest(APIload, getKakaoAPI);
    yield takeLatest(APIload2, getKakao);
    yield takeLatest(APIload3, postKakao);
}
