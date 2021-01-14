import React from "react";
import "./App.css";
import Profile from "./Profile.js";

function Content() {
  return (
    <>
      <div className="Content-Wrapper">
        <h2>This is a content component</h2>
        <Profile />
      </div>
    </>
  );
}

export default Content;
