import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import "moment/locale/ko";
import "./gi.css";
import { loadaddcomment, loadaddlove, loadcomment } from "../../app/comment";
import { checkLogin } from "../../app/users";
import { useNavigate } from "react-router-dom";

const CommentScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const BoardId = useSelector((state: any) => state.comment.BoardNum);

    const detailcomment: any = useSelector((state: any) => state.comment.comment);
    const [comment, setcomment] = useState("");
    const [child, setChild] = useState("");
    const [load, setload] = useState("");
    const [love, setlove] = useState([]);
    const [answer, setanswer] = useState([]);

    console.log(detailcomment?.length);

    useEffect(() => {
        dispatch(
            loadcomment({
                id: BoardId.id,
            })
        );
    }, [load, love]);

    useEffect(() => {
        setlove(Array(detailcomment?.length).fill(false));
        setanswer(Array(detailcomment?.length).fill(false));
    }, []);

    const checkIsLoginFunc = async () => {
        dispatch(checkLogin());
    };

    useEffect(() => {
        checkIsLoginFunc();
    }, []);

    const username: any = useSelector((state: any) => state.user.me);

    const onClicklove = (index: any, item: any) => {
        const like: any = love;
        like[index] = !like[index];
        const like2: any = [...love, like];

        dispatch(
            loadaddlove({
                id: item.id,
                like2: item.like2 + 1,
            })
        );
        setlove(like2);
    };

    const onClickanswer = (index: any) => {
        const like: any = answer;
        like[index] = !like[index];
        const like2: any = [...answer, like];
        setanswer(like2);
    };
    const onChangecomment = (e: any) => {
        setcomment(e.target.value);
    };
    const onChangeChild = (e: any) => {
        setChild(e.target.value);
    };
    const onSubmit = () => {
        console.log("commey", comment);
        dispatch(
            loadaddcomment({
                userId: username.name,
                boardId: BoardId,
                img: "asdkosad",
                comment: comment,
                ref2: detailcomment ? detailcomment.length : 0,
            })
        );
        setload(comment);
        alert("댓글 작성이 완료되었습니다");
    };
    const onSubmitChild = (item: any) => {
        console.log("item", item);
        dispatch(
            loadaddcomment({
                userId: username.name,
                boardId: BoardId,
                img: "asdkosad",
                comment: child,
                ref2: item.ref2,
                seq: 1,
            })
        );
        setload(child);
        alert("댓글 작성이 완료되었습니다");
    };

    return (
        <div className="App2">
            <div>
                <div>
                    <button
                        onClick={() => {
                            navigate("/boardmain");
                        }}
                    >
                        이전으로
                    </button>

                    <div className="Maincon7">
                        <img src={BoardId.img} className="img5"></img>
                        <text>{BoardId.content}</text>
                        <text className="rightf2">{moment(BoardId.date).format("MM월DD일")} </text>
                    </div>

                    {detailcomment?.map((item: any, index: any) => (
                        <div key={index} className="Maincon">
                            <div> {item.seq === 1 ? <img src="play.png" className="img4"></img> : null}</div>

                            <img src="img_640x640.jpg" className="img3"></img>
                            <div className="box3">
                                <div className="box2">
                                    <text className="leftbox">{item.userId}</text>
                                    <text className="leftbox2">{item.comment}</text>
                                </div>
                                <div className="box2">
                                    <text className="lowfont">{moment(item.date).format("MM월DD일")} </text>
                                    <text className="lowfont2">좋아요 {item.like2}개 </text>
                                    <text className="lowfont2" onClick={() => onClickanswer(index)}>
                                        댓글
                                    </text>
                                </div>
                                {answer[index] ? (
                                    <div className="box4">
                                        <input className="Maincon5" onChange={onChangeChild}></input>
                                        <button className="Maincon6" onClick={() => onSubmitChild(item)}>
                                            댓글
                                        </button>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                            <div className="rightfl">
                                {love[index] ? (
                                    <img src="heartR.png" className="img4" onClick={() => onClicklove(index, item)}></img>
                                ) : (
                                    <img src="heart.png" className="img4" onClick={() => onClicklove(index, item)}></img>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="Maincon2">
                    <input onChange={onChangecomment} className="Maincon3"></input>
                    <button onClick={onSubmit} className="Maincon4">
                        댓글
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CommentScreen;
