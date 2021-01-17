import React, { useState } from "react";
import "./App.css";

function Navbar(props) {
  // {
  //   tabs: ["home", "about us", "contact us"];
  // }

  const [home, setHome] = useState("My state home page");

  // let home = "My Home page";

  const changeState = () => {
    setHome("My state has been changed");
  };

  return (
    <div className="Navbar-wrapper">
      <h3>{props.tabs[0]}</h3>
      <h3>{props.tabs[1]}</h3>
      <h3>{props.tabs[2]}</h3>
      <button onClick={changeState}>Click me</button>
    </div>
  );
}

export default Navbar;
