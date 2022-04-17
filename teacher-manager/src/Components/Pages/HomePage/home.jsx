import styled from "@emotion/styled";
import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@mui/material";

export const Homepage = () => {
  const Div = styled.div`
    width: 90%;
    margin: auto;
  `;
  return (
    <Div>
      <h1>Teacher's List</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ border: "1px solid gray" }}>ID</TableCell>
            <TableCell style={{ border: "1px solid gray" }}>Name</TableCell>
            <TableCell style={{ border: "1px solid gray" }}>Gender</TableCell>
            <TableCell style={{ border: "1px solid gray" }}>Age</TableCell>
            <TableCell style={{ border: "1px solid gray" }}>Open</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Div>
  );
};
