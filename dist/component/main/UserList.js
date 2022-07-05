import React, { useEffect } from "react";
import { select } from "../../app/paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthRouter from "../AuthRouter";
import "../front/gi.css";
const UserList = () => {
    var _a;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const paper = useSelector((state) => state.paper);
    // useEffect(() => {
    //   dispatch(load7());
    // }, []);
    useEffect(() => {
        var _a;
        //console.log(myId, selectedUser.id);
        if (paper.selectedUser !== undefined) {
            //console.log(paper.selectedUser.id, user);
            if (((_a = paper.selectedUser) === null || _a === void 0 ? void 0 : _a.id) === user.me.id) {
                navigate("/paper");
            }
            else {
                navigate("/add");
            }
        }
    }, [paper]);
    return (React.createElement(React.Fragment, null,
        React.createElement(AuthRouter, null),
        React.createElement("div", { className: "App " },
            React.createElement("div", null,
                React.createElement("div", { className: "row text-center" },
                    React.createElement("h1", null, "Rollin\uC5D0 \uC624\uC2E0\uAC83\uC744 \uD658\uC601\uD574\uC694")),
                React.createElement("div", { className: "row row-cols-4" }, (_a = user.users) === null || _a === void 0 ? void 0 : _a.map((user, index) => (React.createElement("figure", { key: index, className: "figure" },
                    React.createElement("figcaption", { className: "figure-caption text-center" }, user.name),
                    React.createElement("img", { className: "img2", key: user.id, src: user.img, alt: user.name, id: user.id.toString(), title: user.userId, onClick: (e) => {
                            // alert(e.currentTarget.id);
                            dispatch(select({
                                id: user.id,
                                name: user.name,
                                userId: user.userId,
                                img: user.img,
                            }));
                        } })))))))));
};
export default UserList;
