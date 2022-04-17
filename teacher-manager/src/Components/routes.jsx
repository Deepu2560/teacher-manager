import { Routes, Route } from "react-router-dom";
import { LogInPageAdmin } from "./Pages/Auth/LogInAdmin";
import { Homepage } from "./Pages/HomePage/home";
import { Addteacher } from "./Pages/Add_Teacher/addTeacher";
import { TeacherSchedule } from "./Pages/Add_Teacher_schedule/addTeacherSchedule";
import { Addnewadmin } from "./Pages/Add_New_Admin/addNewAdmin";
import { ShowteacherData } from "./Pages/Teacher_schedule/teacher_schedule";

export const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LogInPageAdmin />} />
      <Route path="/Home" element={<Homepage />} />
      <Route path="/add-new-admin" element={<Addnewadmin />} />
      <Route path="/add-teacher" element={<Addteacher />} />
      <Route path="/classes/:id" element />
      <Route path="/add-teacher-schedule/:id" element={<TeacherSchedule />} />
      <Route path="/Show-teacher-schedule/:id" element={<ShowteacherData />} />
    </Routes>
  );
};
