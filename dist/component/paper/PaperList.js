import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPaper, load } from "../../app/paper";
import { requestGetGift } from "../../app/paper";
import AuthRouter from "../AuthRouter";
import "../front/gi.css";
const PapersList = (props) => {
    const dispatch = useDispatch();
    const papers = useSelector((state) => state.paper.papers);
    const me = useSelector((state) => state.user.me);
    useEffect(() => {
        dispatch(load());
    }, [dispatch]);
    return (React.createElement(React.Fragment, null,
        React.createElement(AuthRouter, null),
        React.createElement("div", { className: "App" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("h1", null, me === null || me === void 0 ? void 0 :
                        me.name,
                        "\uB2D8\uC5D0\uAC8C \uC628 Rollin")),
                React.createElement("div", { className: "row row-cols-5" }, papers === null || papers === void 0 ? void 0 : papers.map((paper, index) => (React.createElement("figure", { key: index, id: paper.nickname, className: "figure col", onClick: (e) => {
                        // alert(`${e.currentTarget.id}님이 보낸 Rollin으로 이동`);
                        dispatch(selectPaper({
                            id: paper.id,
                            userId: paper.userId,
                            content: paper.content,
                            nickname: paper.nickname,
                            giftId: paper.giftId,
                        }));
                        dispatch(requestGetGift({ giftId: paper.giftId }));
                        props.setIsSelect(true);
                    } },
                    React.createElement("figcaption", { className: "figure-caption" },
                        "from ",
                        paper.nickname),
                    React.createElement("img", { className: "img2", src: "img/note.png", alt: paper.nickname, title: paper.nickname })))))))));
};
export default PapersList;
