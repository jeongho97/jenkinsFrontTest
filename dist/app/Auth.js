var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
const Auth = () => {
    const REST_API_KEY = "02416e0d3d0c35f47f06b0dcd3b560f0";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const CLIENT_SECRET = "[본인 CLIENT SECRET 값]";
    // calllback으로 받은 인가코드
    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();
    const getToken = () => __awaiter(void 0, void 0, void 0, function* () {
        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code: code,
            client_secret: CLIENT_SECRET,
        });
        try {
            // access token 가져오기
            const res = yield axios.post("https://kauth.kakao.com/oauth/token", payload);
            // Kakao Javascript SDK 초기화
            window.Kakao.init(REST_API_KEY);
            // access token 설정
            window.Kakao.Auth.setAccessToken(res.data.access_token);
            navigate("/profile2", { replace: true });
        }
        catch (err) {
            console.log(err);
        }
    });
    useEffect(() => {
        getToken();
    }, []);
    return null;
};
export default Auth;
