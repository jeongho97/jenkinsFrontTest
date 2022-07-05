import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IMG_PATH } from "../../app/AxiosApi";
import { load2, updateView } from "../../app/gifts";
import { requestGetGiftName, requestSort } from "../../app/gifts";
import { useNavigate } from "react-router-dom";
import "../front/gi.css";
const Gifts = (props) => {
    const dispatch = useDispatch();
    const allGifts = useSelector((state) => state.gifts.allGifts);
    const myId = localStorage.getItem("loginUser");
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = React.useState("");
    const [sortKey, setSortKey] = useState("default");
    useEffect(() => {
        console.log(sortKey);
        dispatch(requestSort({ allGifts: allGifts, sortKey: sortKey }));
    }, [sortKey, dispatch]);
    const onSubmitSearch = (e) => {
        e.preventDefault();
        console.log(searchKey);
        dispatch(requestGetGiftName(searchKey));
    };
    const onClickImg = (e) => {
        dispatch(load2(Number.parseInt(e.currentTarget.id)));
        dispatch(updateView(Number.parseInt(e.currentTarget.id)));
        // dispatch(load3(myId));
        navigate("/detailGift");
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("div", null,
            React.createElement("div", { className: "row text-center" },
                React.createElement("h1", null, "\uC120\uBB3C\uD558\uAE30")),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start" },
                    React.createElement("form", { className: "container", role: "search", onSubmit: (e) => onSubmitSearch(e) },
                        React.createElement("div", { className: "row" },
                            React.createElement("input", { type: "text", className: "form-control col", placeholder: "Search...", name: "name", onChange: (e) => setSearchKey(e.target.value) }),
                            React.createElement("button", { type: "submit", className: "btn btn-primary col-1" }, "\uAC80\uC0C9")),
                        React.createElement("br", null)))),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "row" },
                    React.createElement("select", { className: "form-select", value: sortKey, onChange: (e) => setSortKey(e.target.value) },
                        React.createElement("option", { value: "default" }, "\uC815\uB82C"),
                        React.createElement("option", { value: "count" }, "\uAD6C\uB9E4\uC21C"),
                        React.createElement("option", { value: "view" }, "\uC870\uD68C\uC21C"),
                        React.createElement("option", { value: "hprice" }, "\uAC00\uACA9\uB192\uC740\uC21C"),
                        React.createElement("option", { value: "lprice" }, "\uAC00\uACA9\uB0AE\uC740\uC21C")))),
            React.createElement("div", { className: "row row-cols-4" }, allGifts === null || allGifts === void 0 ? void 0 : allGifts.map((gift, index) => (React.createElement("figure", { key: index, className: "figure" },
                React.createElement("img", { className: "img-thumbnail col", key: gift.id, src: `${IMG_PATH}${gift.img}`, alt: gift.name, id: gift.id.toString(), 
                    // content={gift.content}
                    // count={gift.count}
                    // name={gift.name}
                    // view={gift.views}
                    onClick: (e) => onClickImg(e) }),
                React.createElement("figcaption", { className: "figure-caption text-center" }, gift.name))))))));
};
export default Gifts;
