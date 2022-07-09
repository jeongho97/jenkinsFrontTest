import Board from "./Board";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BoardAdd from "./BoardAdd";

import { selectAllBoards } from "../../app/board";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import "./BoardMain.css";
const BoardMain = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const selectMy = () => {
    dispatch(selectAllBoards());
  };
  useEffect(() => {
    selectMy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const modalClose = () => {
    setIsOpen(false);
  };
  const modalOpen = () => {
    setIsOpen(true);
  };
  console.log(isOpen);
  // const onClickHandler = (e) => {
  //   navigate("/boardAdd");
  // };
  return (
    <div className="box6">
      <div className="profileUpdateHeader">
        <button
          className="btn"
          onClick={() => {
            navigate("/profile");
          }}
        >
          홈으로
        </button>
        <b>자유게시판</b>
        <label onClick={modalOpen}>
          <BsPencil></BsPencil>
          글작성
        </label>
      </div>
      <div>
        <Board></Board>
      </div>
      <BoardAdd isOpen={isOpen} modalClose={modalClose}></BoardAdd>
    </div>
  );
};
export default BoardMain;
