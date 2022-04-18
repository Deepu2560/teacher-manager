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
  Select,
  Input,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  teacherLoading,
  teacherError,
  teacherSuccess,
  teacherDelete,
} from "../../Redux/teacher/teacherAction";
import axios from "axios";
import { Link } from "react-router-dom";

export const Homepage = () => {
  document.title = "Home | Deepanshu Gulia";

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
  useEffect(() => getData("all"), []);

  const teachers = useSelector((state) => state.teacher.teacherList);

  const filterData = ({ target }) => {
    let { value } = target;

    getData(value);
  };

  const handlesortData = ({ target }) => {
    let { value } = target;

    getData(value);
  };

  const getData = (prop) => {
    dispatch(teacherLoading());
    axios
      .get(`https://teacher-manager.herokuapp.com/teacher?page=${page}`)
      .then((res) => {
        let { error, teachers } = res.data;

        if (error) {
          dispatch(teacherError());
        } else {
          if (prop == "all") {
            dispatch(teacherSuccess(teachers));
            setteacherdata([...teachers]);
          } else if (prop == "Male" || prop == "Female") {
            let filterData = teachers.filter((elem) => {
              return elem.gender == prop;
            });
            dispatch(teacherSuccess(filterData));
            setteacherdata([...filterData]);
          } else if (prop == "low" || prop == "high") {
            let sortData = teacherdata;

            if (prop == "low") {
              sortData.sort((a, b) => +a.age - +b.age);
            } else {
              sortData.sort((a, b) => +b.age - +a.age);
            }

            dispatch(teacherSuccess(sortData));
            setteacherdata([...sortData]);
          }
        }
      });
  };

  const deleteCity = (id) => {
    axios
      .delete(`https://teacher-manager.herokuapp.com/teacher/${id}`)
      .then((res) => {
        let { error } = res.data;

        if (error) {
          alert("ERROR! something went wrong try again");
          dispatch(teacherError());
        } else {
          alert("Teacher DELETED SUCCESSFULLY");
          dispatch(teacherDelete());
          getData("all");
        }
      });
  };
  return (
    <div className="main-div">
      <h1>Teacher's List</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div>
          <h4 style={{ textAlign: "center", margin: "5px" }}>
            Filter by gender:
          </h4>
          <Select
            style={{ width: "200px", margin: "10px" }}
            defaultValue={""}
            onChange={(event) => filterData(event)}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </div>
        <div>
          <h4 style={{ textAlign: "center", margin: "5px" }}>Sort by age:</h4>
          <Select
            style={{ width: "200px", margin: "10px" }}
            defaultValue={""}
            onChange={(event) => handlesortData(event)}
          >
            <MenuItem value={"low"}>Low - High</MenuItem>
            <MenuItem value={"high"}>High - Low</MenuItem>
          </Select>
        </div>
      </div>
      <Table className="table-display">
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
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          gap: "10px",
          margin: "10px",
        }}
      >
        <Button
          variant="contained"
          disabled={page == 1}
          onClick={() => setpage((prev) => prev - 1)}
        >
          Previous
        </Button>
        <h3>{page}</h3>
        <Button
          variant="contained"
          disabled={teacherdata.length < size}
          onClick={() => setpage((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
