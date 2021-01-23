import React, { useState } from "react";
import IphoneImg from "./assets/iphone12.jpg";
import "./App.css";
import Card from "./card";

function Content(props) {
  return (
    <div className="Cards-collection-wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Content;
