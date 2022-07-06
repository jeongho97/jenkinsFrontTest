import React from "react";
import Front from "./component/front/Front";
// import Main from "./component/main/Main";
// import ProfileMain from "./component/profile/ProfileMain";
import UserList from "./component/main/UserList";
import PaperMain from "./component/paper/PaperMain";
import SendBody from "./component/profile/SendBody";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import GiftDetail from "./component/gifts/GiftDetail";
import AuthRouter from "./component/AuthRouter";
import Auth from "./app/Auth";
import Profile2 from "./component/front/Profile2";
import BoardMain from "./component/board/BoardMain";
import BoardAdd from "./component/board/BoardAdd";
import CommentScreen from "./component/comment/CommentScreen";
function App() {
    // const page = useSelector((state) => state.page);
    return (
        <div className={"App"}>
            <header className="App-header"></header>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <AuthRouter />
                                <Front />
                            </>
                        }
                    ></Route>
                    <Route path="/profile2" element={<Profile2 />}></Route>
                    <Route
                        path="/oauth/kakao/callback"
                        element={
                            <>
                                <Auth />
                            </>
                        }
                    ></Route>
                    <Route
                        path="/paper"
                        element={
                            <>
                                <AuthRouter />
                                <PaperMain />
                            </>
                        }
                    ></Route>
                    <Route path="/profile" element={<UserList />}></Route>
                    <Route path="/add" element={<SendBody />}></Route>
                    {/* <Route path="/gifts" element={<Gifts></Gifts>}></Route> */}
                    <Route path="/detailGift" element={<GiftDetail></GiftDetail>}></Route>
                    <Route path="/boardMain" element={<BoardMain></BoardMain>}></Route>
                    <Route path="/commentMain" element={<CommentScreen />}></Route>
                    {/* <Route path="/boardAdd" element={<BoardAdd></BoardAdd>}></Route> */}
                </Routes>
            </BrowserRouter>
            {/* {page.first ? <Main /> : <Front />} */}
        </div>
    );
}

export default App;
