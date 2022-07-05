import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Login from "./Login";
import Join from "./Join";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
export interface FrontProps {
    setPageSet: Dispatch<SetStateAction<string>>;
}
const Front = () => {
    const navigate = useNavigate();
    const [pageSet, setpageSet] = useState("login");
    const isLogin = useSelector((state: RootState) => state.user.isLogin);
    useEffect(() => {
        if (isLogin) navigate("/profile");
    }, [isLogin, navigate]);
    return pageSet === "join" ? <Join setPageSet={setpageSet} /> : <Login setPageSet={setpageSet} />;
};

export default Front;
