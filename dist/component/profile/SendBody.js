import React from "react";
import Gifts from "../gifts/Gifts";
import AddPaperForm from "./AddPaperForm";
import AuthRouter from "../AuthRouter";
import { useNavigate } from "react-router-dom";
const SendBody = () => {
    const navigate = useNavigate();
    const [isSelect, setIsSelect] = React.useState(false);
    const [addType, setAddType] = React.useState("");
    const [isAdd, setisAdd] = React.useState(false);
    React.useEffect(() => {
        if (isAdd)
            navigate("/profile");
    }, [isAdd, navigate]);
    return (React.createElement(React.Fragment, null,
        React.createElement(AuthRouter, null),
        !isSelect || isAdd ? (React.createElement("div", { className: "App" },
            React.createElement("div", { id: "content", className: "center-block" },
                React.createElement("button", { type: "button", className: "btn lobutton", style: {
                        margin: 50,
                        height: 200,
                        width: 200,
                        background: "#99CCFF",
                    }, onClick: () => {
                        setIsSelect(true);
                        setAddType("paper");
                    } }, "\uD3B8\uC9C0\uC4F0\uAE30"),
                React.createElement("button", { type: "button", className: "btn lobutton", style: {
                        margin: 50,
                        height: 200,
                        width: 200,
                        background: "#99CCFF",
                    }, onClick: () => {
                        setIsSelect(true);
                        setAddType("gift");
                    } }, "\uC120\uBB3C\uBCF4\uB0B4\uAE30")))) : addType === "paper" ? (React.createElement(AddPaperForm, { setisAdd: setisAdd })) : (React.createElement(Gifts, { setisAdd: setisAdd }))));
};
export default SendBody;
