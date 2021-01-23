import React, { useState } from "react";
import ProfileDP from "./assets/profilePicture.png";
import "./App.css";

function Profile(props) {
  // {
  //   name: "Content Abdul Haseeb",
  //   age: 233333
  // }

  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  const [isImageShown, setIsIamgeShown] = useState(false);

  const ChangeName = () => {
    setName("my new name is changed");
    setAge("my age is 22");
  };

  const ShowProfile = () => {
    setIsIamgeShown(!isImageShown);
  };

  return (
    <div className="Profile-wrapper">
      <h3>props name: {props.name}</h3>
      <h3>props age: {props.age}</h3>
      {isImageShown && <img src={ProfileDP} alt="my profile picture" />}
      <p onClick={ChangeName}>name: {name}</p>
      <button onClick={ShowProfile}>{isImageShown ? "Hide" : "Show"} Profile</button>
    </div>
  );
}

export default Profile;
