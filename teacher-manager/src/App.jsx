import React from "react";
import "./App.css";
import { Navbar } from "./Components/Pages/Navbar/Navbar";
import { Allroutes } from "./Components/routes";
import { useSelector } from "react-redux";

function App() {
  const { isAuth, isLoading } = useSelector((state) => state.login);

  return (
    <div>
      {isAuth == true ? <Navbar /> : null}
      <div>
        {isLoading == true ? (
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
