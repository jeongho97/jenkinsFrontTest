import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Modal } from "reactstrap";
import { insertBoard } from "../../app/board";
import { BsCameraFill } from "react-icons/bs";
import "./BoardAdd.css";
import { useNavigate } from "react-router-dom";

type form = {
  content: string;
  img: any;
  file: any;
};
const BoardAdd = ({ isOpen, modalClose }: { isOpen: any; modalClose: any }) => {
  console.log("BoardAdd", modalClose);
  const navigate = useNavigate();
  const [form, setForm] = useState<form>({
    content: "",
    img: "img/gallery.jpg",
    file: "",
  });
  const dispatch = useDispatch();
  const onChangeFile = (e: { target: { files: any[] } }) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setForm({ ...form, img: reader.result, file });
        resolve();
      };
    });
  };
  const onChangeName = (e: { target: { value: any } }) => {
    const { value } = e.target;
    setForm({ ...form, content: value });
  };
  // const { updateUsers } = useContext(UserContext);

  const onSubmit = () => {
    console.log(form);
    dispatch(insertBoard(form));
    alert("글 작성 완료");
    navigate("/boardMain");
    modalClose();
    window.location.reload();
  };
  return (
    <Modal fullscreen isOpen={isOpen}>
      <ProfileUpdateHeader modalClose={modalClose} onSubmit={onSubmit}></ProfileUpdateHeader>

      <ProfileUpdateBody onChangeName={onChangeName} onChangeFile={onChangeFile} form={form}></ProfileUpdateBody>
    </Modal>
  );
};
export default BoardAdd;

const ProfileUpdateHeader = ({ modalClose, onSubmit }: { modalClose: any; onSubmit: any }) => {
  return (
    <div className="profileUpdateHeader">
      <button className="btn" color="secondary" onClick={modalClose}>
        취소
      </button>
      <b>게시판 작성</b>
      <button className="btn" color="primary" onClick={onSubmit}>
        등록
      </button>
    </div>
  );
};

const ProfileUpdateBody = ({ onChangeFile, onChangeName, form }: { onChangeFile: any; onChangeName: any; form: any }) => {
  return (
    <div>
      <div>
        <input type="file" hidden accept="image/*" id="imgUpload" onChange={(e) => onChangeFile(e)}></input>

        <label htmlFor="imgUpload">
          <BsCameraFill></BsCameraFill>
          사진첩
        </label>
      </div>
      <img className="profileImg" src={form.img}></img>
      <div className="writer">
        <textarea cols={100} rows={10} data-type="content" value={form.content} placeholder="내용을 입력하세요" onChange={(e) => onChangeName(e)}></textarea>
      </div>
    </div>
  );
};
