import { useSelector } from "react-redux";
import { IMG_PATH } from "../../app/AxiosApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectAllBoards } from "../../app/board";
import { inputBoardId } from "../../app/comment";
import { Navigate, useNavigate } from "react-router-dom";
const Board = () => {
  const navigate = useNavigate();
  const Boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();
  const onClickImg = (e) => {
    dispatch(inputBoardId(e));
    navigate("/commentmain");
  };

  return (
    <div className="container">
      <div className="box5">
        {Boards?.map((board, index) => (
          <figure key={index}>
            <div className="test">
              <div className="profilerow">
                <img className="profileImg3" src={`${board.userImg}`}></img>
              </div>
              <div className="profilerow2">
                <figcaption className="figure-caption text-right">
                  {board.userName}
                </figcaption>
              </div>
            </div>
            <br></br>
            <img
              className="profileImg2"
              key={board.id}
              src={`${IMG_PATH}${board.img}`}
              alt={board.content}
              id={board.id}
              content={board.content}
              onClick={() => onClickImg(board.id)}
            ></img>
            <figcaption className="figure-caption text-center">
              {board.content}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};
export default Board;
