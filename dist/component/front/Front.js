import React, { useState, useEffect } from "react";
import Login from "./Login";
import Join from "./Join";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Front = () => {
    const navigate = useNavigate();
    const [pageSet, setpageSet] = useState("login");
    const isLogin = useSelector((state) => state.user.isLogin);
    useEffect(() => {
        if (isLogin)
            navigate("/profile");
    }, [isLogin, navigate]);
    return pageSet === "join" ? React.createElement(Join, { setPageSet: setpageSet }) : React.createElement(Login, { setPageSet: setpageSet });
};
export default Front;
