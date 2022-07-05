import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand } from "reactstrap";
import { logout } from "../app/users";
const ProfileNav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Navbar fixed="top" expand="md" light>
      <NavbarBrand href="/">메인으로</NavbarBrand>
      <Collapse navbar>
        <Nav className="me-auto" navbar></Nav>
      </Collapse>
      <NavbarBrand href="/boardMain">게시판</NavbarBrand>
      <NavbarBrand className="btn btn-link" to="/" onClick={submitLogout}>
        로그아웃
      </NavbarBrand>
    </Navbar>
  );
};
export default ProfileNav;
