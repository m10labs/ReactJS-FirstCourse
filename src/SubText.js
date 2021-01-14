import React from "react";
import "./App.css";

function SubText() {
  const name = "Abdul";

  return (
    <div className="subtext-wrapper">
      <h1>My Name</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default SubText;
