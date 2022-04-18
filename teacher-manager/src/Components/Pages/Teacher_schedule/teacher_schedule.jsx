import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  classesLoading,
  classesError,
  classesSuccess,
} from "../../Redux/classes/classAction";
import axios from "axios";

export const ShowteacherData = () => {
  document.title = "Teacher Schedule | Deepanshu Gulia";
  const Div = styled.div`
    width: 90%;
    margin: auto;
  `;

  const { isAuth } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [classesData, setclassesData] = useState([]);
  useEffect(() => {
    if (isAuth == false) {
      navigate("/");
    }
  }, []);
  useEffect(() => getData(), []);

  const classes = useSelector((state) => state.teacher.classList);

  const getData = () => {
    dispatch(classesLoading());
    axios
      .get(`https://teacher-manager.herokuapp.com/classes/${id}`)
      .then((res) => {
        let { error, classesdata } = res.data;

        if (error) {
          dispatch(classesError());
        } else {
          if (classesData != []) {
            dispatch(classesSuccess(classesdata));
            setclassesData([...classesdata]);
          }
        }
      });
  };

  const deleteSchedule = (id) => {
    dispatch(classesLoading());
    axios
      .delete(`https://teacher-manager.herokuapp.com/classes/${id}`)
      .then(() => {
        let { error } = res.data;

        if (error) {
          dispatch(classesError());
        } else {
          alert("Class Delete");
          setclassesData([...teachers]);
        }
      });
  };

  return (
    <Div>
      <h1>Teacher's List</h1>
      <p>Teacher's Id = {id}</p>
      <Button
        style={{
          textAlign: "center",
          fontSize: "larger",
          fontWeight: "bolder",
          marginBottom: "20px",
        }}
        variant="contained"
        onClick={() => navigate(`/add-teacher-schedule/${id}`)}
      >
        Add schedule for teacher
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ border: "1px solid gray" }}>day</TableCell>
            <TableCell style={{ border: "1px solid gray" }}>grade</TableCell>
            <TableCell style={{ border: "1px solid gray" }}>section</TableCell>
            <TableCell style={{ border: "1px solid gray" }}>subject</TableCell>
            <TableCell style={{ border: "1px solid gray" }}>Delete</TableCell>
          </TableRow>
        </TableHead>
        {classesData == [] ? null : (
          <TableBody>
            {classesData.map((elem) => (
              <TableRow key={elem._id}>
                <TableCell>{elem.day}</TableCell>
                <TableCell>{elem.grade}</TableCell>
                <TableCell>{elem.section}</TableCell>
                <TableCell>{elem.subject}</TableCell>
                <TableCell>
                  <Button
                    style={{
                      textAlign: "center",
                      fontSize: "larger",
                      fontWeight: "bolder",
                      marginTop: "20px",
                    }}
                    variant="contained"
                    onClick={() => deleteSchedule(elem._id)}
                  >
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </Div>
  );
};
