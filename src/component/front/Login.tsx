import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { load7 } from "../../app/users";
import { FrontProps } from "./Front";

const Login: FunctionComponent<FrontProps> = (props: FrontProps) => {
    const dispatch = useDispatch();

    const REST_API_KEY = "02416e0d3d0c35f47f06b0dcd3b560f0";

    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    const LoginClick = () => {
        let form = document.forms[0];
        if (form.userId.value === "") {
            alert("ID를 입력해 주세요");
        } else if (form.password.value === "") {
            alert("Password를 입력해 주세요");
        } else {
            dispatch(
                load7({
                    userId: form.userId.value,
                    password: form.password.value,
                })
            );
        }
    };

    return (
        <div className="App">
            <form className="align-middle" method="get" name="frm" action="/main">
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
                <div className="row">
                    <button className="btn lobutton" type="button" onClick={LoginClick}>
                        로그인
                    </button>
                    <div className="form-text">
                        <h2>아이디가 없으신가요?</h2>
                        <button
                            className="btn lobutton"
                            type="button"
                            style={{
                                margin: 10,
                            }}
                            onClick={() => props.setPageSet("join")}
                        >
                            회원가입
                        </button>
                        <img
                            src="img/kakao_login_medium_narrow.png"
                            alt="kakao"
                            onClick={() => {
                                window.location.href = KAKAO_AUTH_URL;
                            }}
                        ></img>
                    </div>
                </div>
            </form>
        </div>
    );
    //         <div className="row form-floating mb-3">
    //           <input className="form-control" type="password" name="password" placeholder="pwd" />
    //           <label htmlFor="password">Password </label>
    //         </div>
    //         <div className="row">
    //           <Link to="/profile" className="btn btn-outline-primary" type="button">
    //             로그인
    //           </Link>
    //           <div className="form-text">
    //             아이디가 없으신가요?
    //             <button className="btn btn-sm btn-link" type="button" onClick={() => dispatch(second())}>
    //               회원가입
    //             </button>
    //           </div>
    //         </div>
    //       </form>
    //     </div>
    //   );
};

export default Login;
