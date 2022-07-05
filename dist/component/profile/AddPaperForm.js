import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { load2, select } from "../../app/paper";
import "../front/gi.css";
const AddPaperForm = (props) => {
    const dispatch = useDispatch();
    const seleteduser = useSelector((state) => state.paper.selectedUser);
    const onClickSubmit = () => {
        let form = document.forms[0];
        if (form.nickname.value === "") {
            alert("제목을 입력해 주세요");
        }
        else if (form.content.value === "") {
            alert("내용을 입력해 주세요");
        }
        else {
            console.log(seleteduser.id, form.nickname.value, form.content.value);
            dispatch(load2({
                userId: seleteduser.id,
                nickname: form.nickname.value,
                content: form.content.value,
            }));
            props.setisAdd(true);
            //paper추가 reducer 필요 (nickname + content)
            //   dispatch(third());
        }
    };
    //textarea 높이 자동조정
    const taRef = useRef();
    const handleResizeHeight = () => {
        taRef.current.style.height = "auto";
        taRef.current.style.height = taRef.current.scrollHeight + "px";
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("form", { name: "frm", action: "../bbs", method: "post" },
            React.createElement("h2", null,
                seleteduser.name,
                "\uC5D0\uAC8C Rollin \uB0A8\uAE30\uAE30"),
            React.createElement("input", { type: "hidden", name: "param", value: "writeBbsAf" }),
            React.createElement("input", { type: "hidden", id: "id", name: "id", className: "text", value: seleteduser === null || seleteduser === void 0 ? void 0 : seleteduser.id }),
            React.createElement("div", { className: "mb-3 form-floating" },
                React.createElement("input", { type: "text", className: "text", name: "nickname", placeholder: "\uC775\uBA85\uC73C\uB85C \uC4F8 \uB2C9\uB124\uC784\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694 " })),
            React.createElement("div", { className: "content-wrap mb-3" },
                React.createElement("label", { htmlFor: "content" }),
                React.createElement("textarea", { className: "form-control", cols: 60, rows: 20, name: "content", placeholder: "\uC5EC\uAE30\uC5D0 \uB0B4\uC6A9\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694. ", ref: taRef, onInput: handleResizeHeight })),
            React.createElement("div", { className: "mb-3" },
                React.createElement("button", { type: "button", className: "btn lobutton", onClick: onClickSubmit, style: { margin: 5 } }, "\uAE00\uC791\uC131\uC644\uB8CC"),
                React.createElement(Link, { className: "btn lobutton", to: "/profile", onClick: () => dispatch(select()) }, "\uB4A4\uB85C\uAC00\uAE30")))));
};
export default AddPaperForm;
