import { call, put, takeLatest } from "redux-saga/effects";
import { getPapersFail, load2 } from "./paper";
import { defaultAxios } from "./AxiosApi";
import { getUsers, getUserById, login, load3, load4, load5, load7, checkLogin } from "./users";
import { APIload, APIload2, APIload3, putAPI, putKaokaoID } from "./Auths";

function* getKakaoAPI(data) {
    try {
        const data2 = yield window.Kakao.API.request({
            url: data.payload,
        });

        yield put(putAPI(data2));
        const response = yield call(defaultAxios, "/user/kaologin", "post", {
            userId: data2.id,
        });

        if (response.data.length > 0) {
            yield put(putKaokaoID(response.data[0]));
            localStorage.setItem("loginUser", response.data[0].id);
            //window.location.href = "profile";
        } else {
            yield call(defaultAxios, "/user", "post", {
                userId: data2.id,
                password: data2.id,
                name: data2.properties.nickname,
                img: data2.properties.profile_image,
            });
            const response = yield call(defaultAxios, "/user/kaologin", "post", {
                userId: data2.id,
            });
            localStorage.setItem("loginUser", response.data[0].id);
            //window.location.href = "profile";
        }
    } catch (error) {
        console.log(error);
    }
}

function* getKakao(data) {
    try {
        const response = yield call(defaultAxios, "/user/kaologin", "post", data.payload);
        yield put(putKaokaoID(response.data));
    } catch (error) {
        console.error(error);
    }
}

function* postKakao(data) {
    try {
        yield call(defaultAxios, "/user", "post", data.payload);
        alert("회원가입이 완료되었습니다");
    } catch (error) {
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
