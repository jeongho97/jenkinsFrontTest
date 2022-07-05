import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { fistload, load3, load5 } from "../../app/users";
import { FrontProps } from "./Front";
import "./gi.css";

const Regi: FunctionComponent<FrontProps> = (props) => {
  const dispatch = useDispatch();
  const idCheck = useSelector((state: RootState) => state.user.check);
  console.log(idCheck);
  console.log(idCheck);

  const makeSubmit = () => {
    let form = document.forms[0];
    if (form.userId.value === "") {
      alert("ID를 입력해 주세요");
    } else if (form.password.value === "") {
      alert("Password를 입력해 주세요");
    } else if (form.name === "") {
      alert("이름을 입력해 주세요");
    } else {
      dispatch(load5(form.userId.value));

      if (idCheck === 0) {
        dispatch(
          load3({
            userId: form.userId.value,
            password: form.password.value,
            name: form.username.value,
          })
        );
        dispatch(fistload());
        props.setPageSet("login");
      } else {
        alert("중복된 아이디 입니다");
      }
    }
  };

  return (
    <div className="App">
      <form method="POST" action="" name="frm">
        <img src="img/letter.png" alt="hi" className="img2"></img>
        <h1> Lollin</h1>

        <div className="row form-floating mb-3">
          <input className="form-control" type="text" name="userId" placeholder="id" />
          <label htmlFor="id">ID </label>
        </div>
        <div className="row form-floating mb-3">
          <input className="form-control" type="password" name="password" placeholder="pwd" />
          <label htmlFor="password">Password </label>
        </div>
        <div className="row form-floating mb-3">
          <input className="form-control" type="text" name="username" placeholder="name" />
          <label htmlFor="name">Name </label>
        </div>
        <div className="row">
          <input className="btn lobutton" type="button" onClick={() => makeSubmit()} value="회원가입" />
          <div className="form-text">
            이미 아이디가 있으신까요?{" "}
            <button className="btn lobutton" type="button" onClick={() => props.setPageSet("login")}>
              로그인
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Regi;
