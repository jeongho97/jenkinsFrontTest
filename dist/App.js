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
function App() {
    // const page = useSelector((state) => state.page);
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" }),
        React.createElement(BrowserRouter, null,
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(React.Fragment, null,
                        React.createElement(AuthRouter, null),
                        React.createElement(Front, null)) }),
                React.createElement(Route, { path: "/profile2", element: React.createElement(Profile2, null) }),
                React.createElement(Route, { path: "/oauth/kakao/callback", element: React.createElement(React.Fragment, null,
                        React.createElement(Auth, null)) }),
                React.createElement(Route, { path: "/paper", element: React.createElement(React.Fragment, null,
                        React.createElement(AuthRouter, null),
                        React.createElement(PaperMain, null)) }),
                React.createElement(Route, { path: "/profile", element: React.createElement(UserList, null) }),
                React.createElement(Route, { path: "/add", element: React.createElement(SendBody, null) }),
                React.createElement(Route, { path: "/detailGift", element: React.createElement(GiftDetail, null) })))));
}
export default App;
