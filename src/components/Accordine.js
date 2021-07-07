import React, { useState } from "react";
import { data } from "./Data";
import "./Accordine.css";
import Myaccordine from "./Myaccordine";
const Accordine = () => {
  const [Data, setData] = useState(data);

  return (
    <>
      {Data.map((value) => {
        const { id } = value;
        return <Myaccordine key={id} {...value} />;
      })}
    </>
  );
};

export default Accordine;
