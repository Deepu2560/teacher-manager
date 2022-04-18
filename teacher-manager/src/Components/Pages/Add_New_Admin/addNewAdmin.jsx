import React, { useEffect, useState } from "react";
import { FormGroup, FormLabel, Button, Input } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginError,
  loginLoading,
  signupSuccess,
} from "../../Redux/Login/loginAction";
import { useNavigate, useNavigationType } from "react-router";

export const Addnewadmin = () => {
  document.title = "Add New Admin form | Deepanshu Gulia";

  const Div = styled.div`
    width: 80%;
    margin: auto;
  `;

  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth == false) {
      navigate("/");
    }
  }, []);

  const samplelogin = {
    name: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
  };

  const [userData, setuserData] = useState(samplelogin);

  const handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;

    setuserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // console.log(userData);
    dispatch(loginLoading());
    axios
      .post("https://teacher-manager.herokuapp.com/admin/register", userData)
      .then((res) => {
        let { error, token } = res.data;

        if (error) {
          dispatch(loginError());
          alert("ERROR! check all input carefully");
        } else {
          //   console.log(res.data);
          dispatch(signupSuccess());
          navigate("/Home");
        }
      })
      .catch((err) => {
        dispatch(loginError());
        alert("ERROR! 404 error. TRY AGAIN LATER");
      });
  };

  const { username, password, name, email, mobile } = userData;
  return (
    <div className="main-div">
      <h1 style={{ textAlign: "center" }}>LOG IN AS ADMIN</h1>
      <p style={{ textAlign: "center" }}>
        Provide our login credential below. This is only for Admin
      </p>
      <FormGroup>
        <FormLabel style={{ fontSize: "larger" }}>Name</FormLabel>
        <Input
          type={"text"}
          placeholder="Enter person name here"
          name="name"
          defaultValue={name}
          onChange={(event) => handleChange(event)}
        />
        <FormLabel style={{ fontSize: "larger" }}>Email</FormLabel>
        <Input
          type={"text"}
          placeholder="Enter person email here"
          name="email"
          defaultValue={email}
          onChange={(event) => handleChange(event)}
        />
        <FormLabel style={{ fontSize: "larger" }}>mobile</FormLabel>
        <Input
          type={"text"}
          placeholder="Enter mobile here"
          name="mobile"
          defaultValue={mobile}
          onChange={(event) => handleChange(event)}
        />
        <FormLabel style={{ fontSize: "larger" }}>Username</FormLabel>
        <Input
          type={"text"}
          placeholder="Enter username here"
          name="username"
          defaultValue={username}
          onChange={(event) => handleChange(event)}
        />
        <FormLabel style={{ fontSize: "larger", marginTop: "20px" }}>
          Password
        </FormLabel>
        <Input
          type={"password"}
          placeholder="Enter admin password here"
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
        disabled={!password || !email || !username || !mobile || !name}
        variant="contained"
        onClick={() => handleSubmit()}
      >
        SIGN UP
      </Button>
    </div>
  );
};
