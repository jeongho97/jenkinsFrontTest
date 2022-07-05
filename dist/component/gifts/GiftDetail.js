import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertGift, postEmail } from "../../app/gifts";
import { IMG_PATH } from "../../app/AxiosApi";
import { Form, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../front/gi.css";
const GiftDetail = () => {
    var _a, _b, _c, _d;
    const detailGift = useSelector((state) => state.gifts.detailGift);
    const receiversInfo = useSelector((state) => state.gifts.receiversInfo);
    const receiver = useSelector((state) => state.paper.selectedUser);
    const me = useSelector((state) => state.user.me);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = () => {
        console.log("onSubmit, form:", form);
        dispatch(insertGift(Object.assign(Object.assign({}, form), { giftId: detailGift.gift.id })));
        dispatch(postEmail({
            address: me.userId,
            title: "구매한 내역입니다",
            giftName: detailGift.gift.name,
            giftContent: detailGift.gift.content,
            giftPrice: Number(detailGift.gift.price),
            message: receiver.name + "님에게 보낸 상품 내역입니다",
        }));
        navigate("/profile");
    };
    const [form, setForm] = useState({
        nickname: "",
        userId: 0,
        content: "",
    });
    const onChangeSelect = (e) => {
        const { value } = e.target;
        console.log("onChangeSelect, e.target.value:", value);
        setForm(Object.assign(Object.assign({}, form), { userId: Number(value) }));
    };
    const onChangeContent = (e) => {
        const { value } = e.target;
        // console.log("content:", value);
        setForm(Object.assign(Object.assign({}, form), { content: value }));
    };
    const onChangeNickName = (e) => {
        const { value } = e.target;
        console.log("nickname value", value);
        setForm(Object.assign(Object.assign({}, form), { nickname: value }));
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("div", null,
            React.createElement("div", { className: "row text-center" },
                React.createElement("h1", null, "\uC120\uBB3C \uC0C1\uC138 \uD398\uC774\uC9C0")),
            React.createElement("div", { className: "detailGiftDesc" },
                React.createElement("img", { className: "detailGiftImg", key: (_a = detailGift.gift) === null || _a === void 0 ? void 0 : _a.id, src: `${IMG_PATH}${(_b = detailGift.gift) === null || _b === void 0 ? void 0 : _b.img}`, alt: (_c = detailGift.gift) === null || _c === void 0 ? void 0 : _c.name }), (_d = detailGift.gift) === null || _d === void 0 ? void 0 :
                _d.content),
            React.createElement(Form, null,
                "\uB2C9\uB124\uC784",
                " ",
                React.createElement(Input, { type: "text", name: "nickname", id: "nickname", onChange: (e) => onChangeNickName(e) }),
                React.createElement("br", null),
                "\uBC1B\uB294\uC0AC\uB78C : ",
                receiver.name,
                React.createElement("br", null),
                React.createElement("br", null),
                "\uBA54\uC2DC\uC9C0",
                React.createElement(Input, { type: "textarea", id: "content", onChange: (e) => onChangeContent(e) }),
                React.createElement("br", null),
                React.createElement(Button, { color: "info", onClick: onSubmit }, "\uC120\uBB3C\uD558\uAE30"),
                React.createElement(Button, { color: "info", onClick: () => {
                        navigate("/add");
                    } }, "\uCDE8\uC18C")))));
};
export default GiftDetail;
