import React, { useState } from "react";
import "./Accordine.css";

const Event = () => {
  const [name, setName] = useState("");
  const [firstName, lastName] = useState();

  const inputEvent = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const submit = () => {
    lastName(name);
  };

  return (
    <>
      <div className="div">
        <h1>Hello {firstName} </h1>
        <input
          type="text"
          id="form"
          placeholder="Enter your Name"
          onChange={inputEvent}
        />
        <br />
        <button onClick={submit}>Click Me😎</button>
      </div>
    </>
  );
};

export default Event;
