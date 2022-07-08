import { useSelector } from "react-redux";
import { IMG_PATH } from "../../app/AxiosApi";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectAllBoards } from "../../app/board";
import { inputBoardId, loadcomment } from "../../app/comment";
import { Navigate, useNavigate } from "react-router-dom";
const Board = () => {
  const navigate = useNavigate();
  const Boards = useSelector((state) => state.boards.allBoards);
  const dispatch = useDispatch();
  const onClickImg = (e) => {
    dispatch(inputBoardId(e));
    navigate("/commentmain");
  };

  const onClickdetail = (e, index) => {
    dispatch(
      loadcomment({
        id: e,
      })
    );

    love[index] = detailcomment2;
  };

  const [love, setlove] = useState("");

  const detailcomment2 = useSelector((state) => state.comment.comment);

  useEffect(() => {
    setlove(Array(Boards?.length).fill(undefined));
  }, [Boards]);

  console.log(love);
  console.log(Boards?.length);

  return (
    <div className="container">
      <div className="box5">
        {Boards?.map((board, index) => {
          return (
            <figure key={index}>
              <div className="test">
                <div className="profilerow">
                  <img className="profileImg3" src={`${board.userImg}`}></img>
                </div>
                <div className="profilerow2">
                  <figcaption className="figure-caption text-right">{board.userName}</figcaption>
                </div>
              </div>
              <img
                className="profileImg2"
                key={board.id}
                src={`${IMG_PATH}${board.img}`}
                alt={board.content}
                id={board.id}
                content={board.content}
                onClick={() => onClickImg(board)}
              ></img>

              <figcaption className="figure-caption text-center">{board.content}</figcaption>
              <button className="btn" onClick={() => onClickdetail(Boards[index].id, index)}>
                댓글 미리보기
              </button>

              {love[index] !== undefined ? (
                <ul>
                  <li>{love[index][0].comment}</li>
                  <li>{love[index][1].comment}</li>
                  <li>{love[index][2].comment}</li>
                </ul>
              ) : null}
            </figure>
          );
        })}
      </div>
    </div>
  );
};
export default Board;
