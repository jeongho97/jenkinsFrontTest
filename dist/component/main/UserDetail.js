import React from "react";
import { useSelector } from "react-redux";
const UserDetail = () => {
    const selectedUser = useSelector((state) => state.paper.selectedUser);
    return (React.createElement("div", null,
        React.createElement("img", { src: selectedUser.img, alt: selectedUser.name }),
        React.createElement("table", null,
            React.createElement("tr", null,
                React.createElement("th", null, "\uC774\uB984"),
                React.createElement("th", null, "\uC544\uC774\uB514")),
            React.createElement("tr", null,
                React.createElement("td", null, selectedUser.name),
                React.createElement("td", null, selectedUser.id)))));
};
export default UserDetail;
