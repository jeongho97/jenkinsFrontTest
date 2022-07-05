import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fistload, load3, load5 } from "../../app/users";
import "./gi.css";
const Regi = (props) => {
    const dispatch = useDispatch();
    const idCheck = useSelector((state) => state.user.check);
    console.log(idCheck);
    console.log(idCheck);
    const makeSubmit = () => {
        let form = document.forms[0];
        if (form.userId.value === "") {
            alert("ID를 입력해 주세요");
        }
        else if (form.password.value === "") {
            alert("Password를 입력해 주세요");
        }
        else if (form.name === "") {
            alert("이름을 입력해 주세요");
        }
        else {
            dispatch(load5(form.userId.value));
            if (idCheck === 0) {
                dispatch(load3({
                    userId: form.userId.value,
                    password: form.password.value,
                    name: form.username.value,
                }));
                dispatch(fistload());
                props.setPageSet("login");
            }
            else {
                alert("중복된 아이디 입니다");
            }
        }
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("form", { method: "POST", action: "", name: "frm" },
            React.createElement("img", { src: "img/letter.png", alt: "hi", className: "img2" }),
            React.createElement("h1", null, " Lollin"),
            React.createElement("div", { className: "row form-floating mb-3" },
                React.createElement("input", { className: "form-control", type: "text", name: "userId", placeholder: "id" }),
                React.createElement("label", { htmlFor: "id" }, "ID ")),
            React.createElement("div", { className: "row form-floating mb-3" },
                React.createElement("input", { className: "form-control", type: "password", name: "password", placeholder: "pwd" }),
                React.createElement("label", { htmlFor: "password" }, "Password ")),
            React.createElement("div", { className: "row form-floating mb-3" },
                React.createElement("input", { className: "form-control", type: "text", name: "username", placeholder: "name" }),
                React.createElement("label", { htmlFor: "name" }, "Name ")),
            React.createElement("div", { className: "row" },
                React.createElement("input", { className: "btn lobutton", type: "button", onClick: () => makeSubmit(), value: "\uD68C\uC6D0\uAC00\uC785" }),
                React.createElement("div", { className: "form-text" },
                    "\uC774\uBBF8 \uC544\uC774\uB514\uAC00 \uC788\uC73C\uC2E0\uAE4C\uC694?",
                    " ",
                    React.createElement("button", { className: "btn lobutton", type: "button", onClick: () => props.setPageSet("login") }, "\uB85C\uADF8\uC778"))))));
};
export default Regi;
