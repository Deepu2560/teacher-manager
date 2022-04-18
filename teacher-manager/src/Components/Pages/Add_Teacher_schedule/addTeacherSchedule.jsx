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
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { classesError, classesLoading } from "../../Redux/classes/classAction";

export const TeacherSchedule = () => {
  document.title = "Add Teacher Schedule | Deepanshu Gulia";
  const DIV = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
  `;

  const { isAuth } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (isAuth == false) {
      navigate("/");
    }
  }, []);

  const sampleClassesData = {
    teacher_id: id,
    grade: "",
    section: "",
    subject: "",
    day: "",
  };

  const [classesData, setclassesData] = useState(sampleClassesData);

  const handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;

    setclassesData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // console.log(classesData);
    dispatch(classesLoading());
    axios
      .post("https://teacher-manager.herokuapp.com/classes", classesData)
      .then((res) => {
        let { error } = res.data;

        if (error) {
          dispatch(classesError());
        } else {
          alert("Class added");
          navigate("/Home");
        }
      });
  };

  const { grade, section, subject, day } = classesData;

  return (
    <DIV>
      <h1>Add Teacher Schedule</h1>
      <FormGroup>
        <FormLabel style={{ fontSize: "larger" }}>Teacher Id : {id}</FormLabel>
        <FormLabel style={{ fontSize: "larger" }}>Grade</FormLabel>
        <Select
          name="grade"
          defaultValue={grade}
          onChange={(event) => handleChange(event)}
        >
          <MenuItem value={"1st Grade"}>1st Grade</MenuItem>
          <MenuItem value={"2nd Grade"}>2nd Grade</MenuItem>
          <MenuItem value={"3rd Grade"}>3rd Grade</MenuItem>
          <MenuItem value={"4th Grade"}>4th Grade</MenuItem>
          <MenuItem value={"5th Grade"}>5th Grade</MenuItem>
          <MenuItem value={"6th Grade"}>6th Grade</MenuItem>
          <MenuItem value={"7th Grade"}>7th Grade</MenuItem>
          <MenuItem value={"8th Grade"}>8th Grade</MenuItem>
          <MenuItem value={"9th Grade"}>9th Grade</MenuItem>
          <MenuItem value={"10th Grade"}>10th Grade</MenuItem>
          <MenuItem value={"11th Grade"}>11th Grade</MenuItem>
          <MenuItem value={"12th Grade"}>12th Grade</MenuItem>
        </Select>
        <FormLabel style={{ fontSize: "larger" }}>Section </FormLabel>
        <TextField
          type={"text"}
          placeholder="Enter Section"
          name="section"
          defaultValue={section}
          onChange={(event) => handleChange(event)}
        />
        <FormLabel style={{ fontSize: "larger" }}>Subject </FormLabel>
        <TextField
          type={"text"}
          placeholder="Enter Subject name"
          name="subject"
          defaultValue={subject}
          onChange={(event) => handleChange(event)}
        />
        <FormLabel style={{ fontSize: "larger" }}>Day of week </FormLabel>
        <Select
          name="day"
          defaultValue={day}
          onChange={(event) => handleChange(event)}
        >
          <MenuItem value={"Monday"}>Monday</MenuItem>
          <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
          <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
          <MenuItem value={"Thursday"}>Thursday</MenuItem>
          <MenuItem value={"Friday"}>Friday</MenuItem>
          <MenuItem value={"Saturday"}>Saturday</MenuItem>
          <MenuItem value={"Sunday"}>Sunday</MenuItem>
        </Select>
      </FormGroup>
      <Button
        style={{
          textAlign: "center",
          fontSize: "larger",
          fontWeight: "bolder",
          marginTop: "20px",
        }}
        variant="contained"
        onClick={() => handleSubmit()}
      >
        Add schedule for teacher
      </Button>
    </DIV>
  );
};
