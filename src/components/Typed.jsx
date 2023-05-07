import React from "react";
import "./typed.css";
import { Typewriter, Cursor } from "react-simple-typewriter";

function Typed() {
  return (
    <div className="container">
      <h1>
        Hi there Welcome to Mike's Profile. <br />
        What i do <br />
        <span style={{ color: "#EF134F" }}>
          <Typewriter
            words={["Frontend", "Backend", "Hosting", "Full-stack !"]}
            loop={true}
            cursor
            cursorStyle=""
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <span style={{ color: "#EF134F" }}>
          <Cursor cursorStyle="|" />
        </span>
      </h1>
    </div>
  );
}

export default Typed;
