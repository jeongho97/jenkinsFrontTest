import Board from "./Board";
import { BsPencil } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import BoardAdd from "./BoardAdd";
import { useState } from "react";

const BoardMain = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <div>
        <BsPencil onClick={modalOpen}></BsPencil>
        글작성하러가기
        <Board></Board>
      </div>
      <BoardAdd isOpen={isOpen} modalClose={modalClose}></BoardAdd>
    </>
  );
};
export default BoardMain;
