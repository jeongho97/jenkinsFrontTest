import React, { useEffect } from "react";
import { paperState, select } from "../../app/paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import AuthRouter from "../AuthRouter";
import { userState } from "../../app/users";
import "../front/gi.css";
import ProfileNav from "../ProfileNav";
const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user: userState = useSelector((state: RootState) => state.user);
  const paper: paperState = useSelector((state: RootState) => state.paper);
  // useEffect(() => {
  //   dispatch(load7());
  // }, []);
  useEffect(() => {
    //console.log(myId, selectedUser.id);
    if (paper.selectedUser !== undefined) {
      //console.log(paper.selectedUser.id, user);
      if (paper.selectedUser?.id === user.me?.id) {
        navigate("/paper");
      } else {
        navigate("/add");
      }
    }
  }, [paper]);
  return (
    <>
      <AuthRouter />
      <ProfileNav />
      <div className="App ">
        <div>
          <div className="row text-center">
            <h1>Rollin에 오신것을 환영해요</h1>
          </div>
          <div className="row row-cols-4">
            {user.users?.map((user, index) => (
              <figure key={index} className="figure">
                <figcaption className="figure-caption text-center">{user.name}</figcaption>
                <img
                  className="img2"
                  key={user.id}
                  src={user.img}
                  alt={user.name}
                  id={user.id.toString()}
                  title={user.userId}
                  onClick={(e) => {
                    // alert(e.currentTarget.id);
                    dispatch(
                      select({
                        id: user.id,
                        name: user.name,
                        userId: user.userId,
                        img: user.img,
                      })
                    );
                  }}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default UserList;
