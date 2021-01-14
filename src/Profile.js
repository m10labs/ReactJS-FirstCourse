import React, { useState } from "react";
import "./App.css";

function Profile() {
  const [name, setName] = useState("Abdul Haseeb");
  const [age, setAge] = useState(22);

  const ChangeName = () => {
    setName("my new name is changed");
    setAge("my age is 22");
  };

  return (
    <div className="Profile-wrapper">
      <h2>This is a profile component</h2>
      <p onClick={ChangeName}>name: {name}</p>
      <p>age: {age}</p>
      <p>qualifation</p>
    </div>
  );
}

export default Profile;
