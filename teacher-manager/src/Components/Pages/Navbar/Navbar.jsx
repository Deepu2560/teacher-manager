import { Button, ButtonGroup } from "@mui/material";
import React from "react";

export const Navbar = () => {
  return (
    <div id="navbar-main">
      <Button>Home</Button>
      <ButtonGroup variant="outlined">
        <Button>Add teacher</Button>
        <Button>Log out</Button>
      </ButtonGroup>
    </div>
  );
};
