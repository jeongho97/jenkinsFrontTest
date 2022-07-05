var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
export const IMG_PATH = "http://localhost:8000";
export const defaultAxios = (url, method, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`url : ${url}`);
    return yield axios({
        method,
        url,
        data,
        headers: { "Content-Type": "application/json" },
    });
});
export const AuthAxios = (url, method, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`url : ${url}`);
    return yield axios({
        method,
        url,
        data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("loginUser")}`,
        },
    });
});
