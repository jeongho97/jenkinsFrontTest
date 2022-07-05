import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IMG_PATH } from "../../app/AxiosApi";
import { selectAllBoards } from "../../app/board";

const Board = () => {
  const Boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();
  const selectMy = () => {
    dispatch(selectAllBoards());
  };
  const onClickImg = () => {
    console.log("dsd");
  };

  useEffect(() => {
    selectMy();
  }, []);
  return (
    <div className="container">
      <div className="row text-center">
        <h1>게시판</h1>
      </div>
      <div className="row row-cols-1">
        {Boards?.map((board, index) => (
          <figure key={index} className="figure">
            <img
              className="img-thumbnail col"
              key={board.id}
              src={`${IMG_PATH}${board.img}`}
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
