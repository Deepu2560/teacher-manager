import styled from "@emotion/styled";
import "./App.css";
import { Addteacher } from "./Components/Pages/Add_Teacher/addTeacher";
import { TeacherSchedule } from "./Components/Pages/Add_Teacher_schedule/addTeacherSchedule";
import { LogInPageAdmin } from "./Components/Pages/Auth/LogInAdmin";
import { Navbar } from "./Components/Pages/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <LogInPageAdmin /> */}
      <TeacherSchedule />
    </div>
  );
}

export default App;
