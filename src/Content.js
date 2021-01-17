import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile.js";

function Content(props) {
  const [contentName, setContentName] = useState("Abdul Haseeb");
  const [contentAge, setContentAge] = useState(223333);

  const changeStates = () => {
    setContentName("content component name changed");
    setContentAge(70000000000);
  };
  return (
    <>
      <div className="Content-Wrapper">
        <h2>This is a content component</h2>
        <button onClick={changeStates}>change content component states</button>
        <p>{contentName + contentAge}</p>
        <Profile name={contentName} age={contentAge} />
      </div>
    </>
  );
}

export default Content;
