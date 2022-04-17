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

export const Addteacher = () => {
  const DIV = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
  `;
  return (
    <DIV>
      <h1>Add Teacher</h1>
      <FormGroup>
        <FormLabel style={{ fontSize: "larger" }}>Nmae</FormLabel>
        <TextField type={"text"} placeholder="Enter Teacher Name" />
        <FormLabel style={{ fontSize: "larger" }}>Gender</FormLabel>
        <Select defaultValue={""}>
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
        </Select>
        <FormLabel style={{ fontSize: "larger" }}>Age</FormLabel>
        <TextField type={"number"} placeholder="Enter teacher age" />
      </FormGroup>
      <Button>Save</Button>
    </DIV>
  );
};
