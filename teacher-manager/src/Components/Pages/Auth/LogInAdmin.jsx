import React, { useEffect, useState } from "react";
import { FormGroup, FormLabel, Button, Input } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginError,
  loginLoading,
  loginSuccess,
} from "../../Redux/Login/loginAction";
import { useNavigate } from "react-router";

export const LogInPageAdmin = () => {
  document.title = "Admin Log-In Page | Deepanshu Gulia";
  const Div = styled.div`
    width: 80%;
    margin: auto;
  `;

  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const samplelogin = {
    username: "",
    password: "",
  };

  const [userData, setuserData] = useState(samplelogin);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setuserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // console.log(userData);
    dispatch(loginLoading());
    axios
      .post("https://teacher-manager.herokuapp.com/admin/login", userData)
      .then((res) => {
        let { error, token } = res.data;

        if (error) {
          dispatch(loginError());
        } else {
          dispatch(loginSuccess(token));
          navigate("/Home");
        }
      });
  };

  const { username, password } = userData;
  return (
    <Div>
      <h1 style={{ textAlign: "center" }}>LOG IN AS ADMIN</h1>
      <p style={{ textAlign: "center" }}>
        Provide our login credential below. This is only for Admin
      </p>
      <FormGroup>
        <FormLabel style={{ fontSize: "larger" }}>Username</FormLabel>
        <Input
          type={"text"}
          placeholder="Enter admin username provided by school"
          name="username"
          defaultValue={username}
          onChange={(event) => handleChange(event)}
        />
        <FormLabel style={{ fontSize: "larger", marginTop: "20px" }}>
          Password
        </FormLabel>
        <Input
          type={"password"}
          placeholder="Enter admin password Provided by school"
          name="password"
          defaultValue={password}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>
      <Button
        style={{
          textAlign: "center",
          fontSize: "larger",
          fontWeight: "bolder",
          margin: "auto",
          marginTop: "20px",
        }}
        variant="contained"
        onClick={() => handleSubmit()}
      >
        LOG IN
      </Button>
    </Div>
  );
};
