import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Input, InputGroup, InputGroupText, Modal } from "reactstrap";
import { insertBoard } from "../../app/board";
import { BsCameraFill } from "react-icons/bs";
import "./BoardAdd.css";

const BoardAdd = ({ isOpen, modalClose }) => {
  console.log("BoardAdd", modalClose);
  const [form, setForm] = useState({
    content: "",
    img: "img/gallery.jpg",
    file: "",
  });
  const dispatch = useDispatch();
  const onChangeFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise((resolve) => {
      reader.onload = () => {
        setForm({ ...form, img: reader.result, file });
        resolve();
      };
    });
  };
  const onChangeName = (e) => {
    const { value } = e.target;
    setForm({ ...form, content: value });
  };
  // const { updateUsers } = useContext(UserContext);

  const onSubmit = () => {
    console.log(form);
    dispatch(insertBoard(form));
    modalClose();
  };
  return (
    <Modal fullscreen isOpen={isOpen}>
      <ProfileUpdateHeader
        modalClose={modalClose}
        onSubmit={onSubmit}
      ></ProfileUpdateHeader>

      <ProfileUpdateBody
        onChangeName={onChangeName}
        onChangeFile={onChangeFile}
        form={form}
      ></ProfileUpdateBody>
    </Modal>
  );
};
export default BoardAdd;

const ProfileUpdateHeader = ({ modalClose, onSubmit }) => {
  return (
    <div className="profileUpdateHeader">
      <button outline color="secondary" onClick={modalClose}>
        취소
      </button>
      <b>게시판 작성</b>
      <button outline color="primary" onClick={onSubmit}>
        등록
      </button>
    </div>
  );
};

const ProfileUpdateBody = ({ onChangeFile, onChangeName, form }) => {
  return (
    <div>
      <div>
        <input
          type="file"
          hidden
          accept="image/*"
          id="imgUpload"
          onChange={(e) => onChangeFile(e)}
        ></input>

        <label htmlFor="imgUpload">
          <BsCameraFill></BsCameraFill>
          사진첩
        </label>
      </div>
      <img className="profileImg" src={form.img}></img>
      <div className="writer">
        <textarea
          cols="100"
          rows="10"
          type="content"
          value={form.content}
          placeholder="내용을 입력하세요"
          onChange={(e) => onChangeName(e)}
        ></textarea>
      </div>
    </div>
  );
};
