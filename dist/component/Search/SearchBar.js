import React, { useState } from "react";
import "./SearchBar.css";
const SearchBar = () => {
    const [searchKey, setSearchKey] = useState({ searchKey: "" });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setSearchKey(Object.assign(Object.assign({}, searchKey), { [name]: value }));
    };
    const onSubmitSearch = () => {
        alert("hi");
    };
    return (React.createElement("form", { className: "searchBar", onSubmit: onSubmitSearch },
        React.createElement("input", { type: "text", placeholder: "\uAC80\uC0C9", name: "name", onChange: (e) => onChangeHandler(e) }),
        React.createElement("button", { type: "submit" })));
};
export default SearchBar;
