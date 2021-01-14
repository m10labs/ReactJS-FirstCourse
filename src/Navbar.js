import React, { useState } from "react";
import "./App.css";

function Navbar() {
  const [home, setHome] = useState("My state home page");

  // let home = "My Home page";

  const changeState = () => {
    setHome("My state has been changed");
  };

  return (
    <div className="Navbar-wrapper">
      <h3>{home}</h3>
      <button onClick={changeState}>Click me</button>
    </div>
  );
}

export default Navbar;
