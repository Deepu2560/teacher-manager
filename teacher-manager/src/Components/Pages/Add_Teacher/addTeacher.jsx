import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import {
  FormGroup,
  FormLabel,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import {
  teacherError,
  teacherLoading,
} from "../../Redux/teacher/teacherAction";

export const Addteacher = () => {
  document.title = "Add Teacher Form | Deepanshu Gulia";
  const DIV = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
  `;

  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth == false) {
      navigate("/");
    }
  }, []);

  const sampleteacherdata = {
    name: "",
    gender: "",
    age: "",
  };

  const [teaceherData, setteaceherData] = useState(sampleteacherdata);

  const handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;

    setteaceherData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // console.log(teaceherData);
    dispatch(teacherLoading());
    axios
      .post("https://teacher-manager.herokuapp.com/teacher", teaceherData)
      .then((res) => {
        let { error, teachers } = res.data;

        if (error) {
          dispatch(teacherError());
          alert("ERROR! check all input carefully");
        } else {
          //   console.log(res.data);
          let { _id } = teachers;
          navigate(`/add-teacher-schedule/${_id}`);
        }
      })
      .catch((err) => {
        dispatch(classesError());
        alert("ERROR! 404 error. TRY AGAIN LATER");
      });
  };

  const { name, gender, age } = teaceherData;

  return (
    <div className="main-div">
      <h1>Add Teacher</h1>
      <FormGroup>
        <FormLabel style={{ fontSize: "larger" }}>Nmae</FormLabel>
        <TextField
          type={"text"}
          placeholder="Enter Teacher Name"
          name="name"
          defaultValue={name}
          onChange={(event) => handleChange(event)}
        />
        <FormLabel style={{ fontSize: "larger" }}>Gender</FormLabel>
        <Select
          placeholder="Enter"
          name="gender"
          defaultValue={gender}
          onChange={(event) => handleChange(event)}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
        </Select>
        <FormLabel style={{ fontSize: "larger" }}>Age</FormLabel>
        <TextField
          autoFocus
          type={"number"}
          placeholder="Enter teacher age"
          name="age"
          defaultValue={age}
          onChange={(event) => handleChange(event)}
        />
      </FormGroup>
      <Button
        style={{
          textAlign: "center",
          fontSize: "larger",
          fontWeight: "bolder",
          marginTop: "20px",
        }}
        disabled={!name || !gender || !age}
        variant="contained"
        onClick={() => handleSubmit()}
      >
        Add schedule for teacher
      </Button>
    </div>
  );
};
