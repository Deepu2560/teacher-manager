import React from "react";
import "./App.css";
import { Navbar } from "./Components/Pages/Navbar/Navbar";
import { Allroutes } from "./Components/routes";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);

  return (
    <div>
      {state.login.isAuth == true ? <Navbar /> : null}
      <div>
        {state.login.isLoading == true ||
        state.classes.isLoading == true ||
        state.teacher.isLoading == true ? (
          <div>
            <h1>Wait while loading...</h1>
          </div>
        ) : null}
        <Allroutes />
      </div>
    </div>
  );
}

export default App;
