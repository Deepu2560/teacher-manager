import "./App.css";
import { Addteacher } from "./Components/Pages/Add_Teacher/addTeacher";
import { TeacherSchedule } from "./Components/Pages/Add_Teacher_schedule/addTeacherSchedule";
import { LogInPageAdmin } from "./Components/Pages/Auth/LogInAdmin";
import { Navbar } from "./Components/Pages/Navbar/Navbar";
import { Homepage } from "./Components/Pages/HomePage/home";

function App() {
  return (
    <div>
      <Navbar />
      {/* <LogInPageAdmin /> */}
      {/* <TeacherSchedule /> */}
      {/* <Addteacher /> */}
      <Homepage />
    </div>
  );
}

export default App;
