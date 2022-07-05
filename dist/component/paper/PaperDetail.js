import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import "../front/gi.css";
const PaperDetail = (props) => {
    const selectedPaper = useSelector((state) => state.paper.selectedPaper);
    const checkGift = useSelector((state) => state.paper.selectedPaper.giftId);
    const gift = useSelector((state) => state.paper.selectedPaper.gift);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    useEffect(() => {
        console.log(checkGift);
        if (checkGift !== undefined && checkGift !== 0) {
            let gift = window.confirm(`동봉된 선물이 있습니다.\n 바로 확인하시겠습니까?`);
            setModalIsOpen(gift);
        }
    }, [checkGift]);
    // const openModal = () => {
    //   setModalIsOpen(true);
    // };
    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (React.createElement("div", { className: "App" },
        React.createElement("div", null,
            React.createElement("h2", null, selectedPaper.nickname),
            React.createElement("textarea", { className: "form-control", cols: 60, rows: 20, name: "content", readOnly: true, defaultValue: selectedPaper.content }),
            React.createElement("div", { className: "mt-3 text-end" },
                gift ? (React.createElement("button", { type: "button", className: "btn btn-outline-primary", onClick: () => setModalIsOpen(true) }, "\uC120\uBB3C \uD655\uC778\uD558\uAE30")) : null,
                React.createElement("button", { className: "btn btn-outline-primary", onClick: () => props.setIsSelect(false) }, "\uBAA9\uB85D\uC73C\uB85C")),
            gift ? (React.createElement(Modal, { isOpen: modalIsOpen, onRequestClose: closeModal, ariaHideApp: false },
                React.createElement("div", { className: "container-sm" },
                    React.createElement("div", { className: "modal-dialog" },
                        React.createElement("div", { className: "modal-content" },
                            React.createElement("div", { className: "modal-header" },
                                React.createElement("h5", null, "\uC120\uBB3C \uD655\uC778")),
                            React.createElement("div", { className: "modal-body" },
                                React.createElement("div", { className: "card" },
                                    React.createElement("img", { src: "...", className: "card-img-top", alt: "..." })),
                                React.createElement("div", { className: "card-body" },
                                    React.createElement("div", { className: "card-title" }, gift.name),
                                    React.createElement("div", { className: "card-text" },
                                        gift.price,
                                        "\uC6D0"),
                                    React.createElement("div", null, gift.content),
                                    React.createElement("div", null, gift.views))),
                            React.createElement("div", { className: "modal-footer" },
                                React.createElement("button", { type: "button", className: "btn lobutton", "data-bs-dismiss": "modal", onClick: closeModal }, "\uB2EB\uAE30"))))))) : null)));
};
export default PaperDetail;
