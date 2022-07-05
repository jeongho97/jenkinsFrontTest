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
    img: "",
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
      <b>프로필 수정</b>
      <button outline color="primary" onClick={onSubmit}>
        수정
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
          <img className="profileImg" src={form.img} alt="myProfileImg"></img>
        </label>
      </div>
      <div>
        <input
          type="content"
          value={form.content}
          onChange={(e) => onChangeName(e)}
        ></input>
      </div>
    </div>
  );
};
