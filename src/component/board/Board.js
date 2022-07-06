import { useSelector } from "react-redux";
import { IMG_PATH } from "../../app/AxiosApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectAllBoards } from "../../app/board";
const Board = () => {
  const Boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();
  const selectMy = () => {
    dispatch(selectAllBoards());
  };
  useEffect(() => {
    selectMy();
  }, []);
  const onClickImg = () => {
    console.log("dsd");
  };

  return (
    <div className="container">
      <div className="row text-center">
        <h1>게시판</h1>
      </div>
      <div className="box">
        {Boards?.map((board, index) => (
          <figure key={index}>
            {/* <figcaption className="figure-caption text-right">
              {board.userId}
            </figcaption> */}
            <img
              className="profileImg2"
              key={board.id}
              src={`${IMG_PATH}${board.img}`}
              alt={board.content}
              id={board.id}
              content={board.content}
              onClick={(e) => onClickImg(e)}
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
