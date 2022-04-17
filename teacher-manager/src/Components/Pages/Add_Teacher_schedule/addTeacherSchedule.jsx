import React from "react";
import styled from "@emotion/styled";
import {
  FormGroup,
  FormLabel,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";

export const TeacherSchedule = () => {
  const DIV = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
  `;
  return (
    <DIV>
      <h1>Add Teacher Schedule</h1>
      <FormGroup>
        <FormLabel style={{ fontSize: "larger" }}>Teacher Id</FormLabel>
        <TextField type={"text"} placeholder="Enter Teacher Name" />
        <FormLabel style={{ fontSize: "larger" }}>Grade</FormLabel>
        <TextField type={"text"} placeholder="Enter Grade" />
        <FormLabel style={{ fontSize: "larger" }}>Section </FormLabel>
        <TextField type={"text"} placeholder="Enter Section" />
        <FormLabel style={{ fontSize: "larger" }}>Subject </FormLabel>
        <TextField type={"text"} placeholder="Enter Subject name" />
      </FormGroup>
      <Button>Save</Button>
    </DIV>
  );
};
