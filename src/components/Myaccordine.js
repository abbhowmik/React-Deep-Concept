import React, { useState } from "react";

const Myaccordine = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="divElement">
        <h2>
          {question}{" "}
          <span onClick={() => setShow(!show)}>{show ? "-" : "+"}</span>
        </h2>
      </div>
      {show && <p>{answer}</p>}
    </>
  );
};

export default Myaccordine;
