import React, { useState } from "react";
import "./App.css";
import Profile from "./Profile.js";

function Content(props) {
  const [contentName, setContentName] = useState("Abdul Haseeb");
  const [contentAge, setContentAge] = useState(223333);

  const students = ["ali", "faraz", "kashan", "hassan"];

  const changeStates = () => {
    setContentName("content component name changed");
    setContentAge(70000000000);
  };

  // const showStudents = () => {
  //   // for (let i = 0; i < students.length; i++) {
  //   //   return <h3>{students[i]}</h3>;
  //   // }

  //   return students.map((element) => {
  //     return <h3>{element}</h3>;
  //   });
  // };

  return (
    <>
      {students.map((element) => {
        return <h3>{element}</h3>;
      })}
      <div className="Content-Wrapper">
        <h2>This is a content component</h2>
        <Profile name={contentName} age={contentAge} />
      </div>
    </>
  );
}

export default Content;
