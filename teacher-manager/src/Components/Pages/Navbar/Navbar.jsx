import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logoutSuccess, loginLoading } from "../../Redux/Login/loginAction";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(loginLoading());
    dispatch(logoutSuccess());
    navigate("/");
  };
  return (
    <div id="navbar-main">
      <Button onClick={() => navigate("/Home")}>Home</Button>
      <ButtonGroup variant="outlined">
        <Button onClick={() => navigate("/add-new-admin")}>
          Add new admin
        </Button>
        <Button onClick={() => navigate("/add-teacher")}>Add teacher</Button>
        <Button onClick={() => handleLogout()}>Log out</Button>
      </ButtonGroup>
    </div>
  );
};
