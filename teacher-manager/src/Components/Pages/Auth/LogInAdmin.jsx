import React from "react";
import { FormGroup, FormLabel, Button, TextField } from "@mui/material";
import styled from "@emotion/styled";

export const LogInPageAdmin = () => {
  const Div = styled.div`
    width: 80%;
    margin: auto;
  `;
  return (
    <Div>
      <h1 style={{ textAlign: "center" }}>LOG IN AS ADMIN</h1>
      <p style={{ textAlign: "center" }}>
        Provide our login credential below. This is only for Admin
      </p>
      <FormGroup>
        <FormLabel style={{ fontSize: "larger" }}>Email</FormLabel>
        <TextField
          type={"text"}
          placeholder="Enter admin email provided by school"
        />
        <FormLabel style={{ fontSize: "larger", marginTop: "20px" }}>
          Password
        </FormLabel>
        <TextField
          type={"password"}
          placeholder="Enter admin password Provided by school"
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
      >
        LOG IN
      </Button>
    </Div>
  );
};
