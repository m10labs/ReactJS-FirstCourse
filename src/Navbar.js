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

  const showTabs = () => {
    return props.tabs.map((element) => {
      return <h3>{element}</h3>;
    });
  };

  return (
    <div className="Navbar-wrapper">
      {showTabs()}
      <button onClick={changeState}>Click me</button>
    </div>
  );
}

export default Navbar;
