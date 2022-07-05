var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { checkLogin } from "../app/users";
const AuthRouter = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin = useSelector((state) => state.user.isLogin);
    const checkIsLoginFunc = () => __awaiter(void 0, void 0, void 0, function* () {
        dispatch(checkLogin());
        isLogin ? toGo() : navigate("/");
    });
    useEffect(() => {
        checkIsLoginFunc();
    }, []);
    const toGo = () => {
        const from = location.pathname || "/profile";
        navigate(from === "/" ? "/profile" : from);
    };
    return React.createElement(React.Fragment, null);
};
export default AuthRouter;
