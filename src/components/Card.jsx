import { useState, useRef, useEffect } from "react";
import image1 from "../img/pascuala.png";
import "./Card.css";


function Card(props) {

  console.dir(props);
  return (
    <>
      <div className="card">
        <img src={image1} alt="TEST" />
        
      </div>
    </>
  );
}

export default Card;
