import React from "react";
import myImage from "./liverpool.jpg";

const App = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <div>
      <h1 style={{ myStyle }}>Thilak</h1>
      <p>
        I am a hard-working and driven individual who isn't afraid to face a
        challenge. I'm passionate about my work and I know how to get the job
        done. I would describe myself as an open and honest person who doesn't
        believe in misleading other people and tries to be fair in everything I
        do.
      </p>
      <img src={myImage} alt="My Image" />
    </div>
  );
};

export default App;
