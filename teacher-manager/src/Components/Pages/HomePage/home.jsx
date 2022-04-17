import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Button,
  ButtonGroup,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  teacherLoading,
  teacherError,
  teacherSuccess,
} from "../../Redux/teacher/teacherAction";
import axios from "axios";
import { Link } from "react-router-dom";

export const Homepage = () => {
  const Div = styled.div`
    width: 90%;
    margin: auto;
  `;

  const { isAuth } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [teacherdata, setteacherdata] = useState([]);
  const [page, setpage] = useState(1);
  const size = 10;
  useEffect(() => {
    if (isAuth == false) {
      navigate("/");
    }
  }, []);
  useEffect(() => getData(), []);

  const teachers = useSelector((state) => state.teacher.teacherList);

  const getData = () => {
    dispatch(teacherLoading());
    axios
      .get(`https://teacher-manager.herokuapp.com/teacher?page=${page}`)
      .then((res) => {
        let { error, teachers } = res.data;

        if (error) {
          dispatch(teacherError());
        } else {
          dispatch(teacherSuccess(teachers));
          setteacherdata([...teachers]);
        }
      });
  };

  const deleteCity = (id) => {
    axios
      .delete(`https://teacher-manager.herokuapp.com/teacher/${id}`)
      .then(() => getData());
  };
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
            <TableCell style={{ border: "1px solid gray" }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teacherdata.map((elem) => (
            <TableRow key={elem._id}>
              <TableCell>{elem._id}</TableCell>
              <TableCell>{elem.name}</TableCell>
              <TableCell>{elem.gender}</TableCell>
              <TableCell>{elem.age}</TableCell>
              <TableCell>
                <Button variant="outlined">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/Show-teacher-schedule/${elem._id}`}
                  >
                    OPEN
                  </Link>
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => deleteCity(elem._id)}>
                  DELETE
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div style={{ display: "flex", justifyContent: "right", gap: "10px" }}>
        <Button
          variant="outlined"
          disabled={page == 1}
          onClick={() => setpage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <h3>{page}</h3>
        <Button
          variant="outlined"
          disabled={teacherdata.length < size}
          onClick={() => setpage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </Div>
  );
};
