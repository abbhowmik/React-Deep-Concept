import React, { useState } from "react";
import "./TodosList.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

const IncDec = () => {
  const [num, setNum] = useState(0);

  const incNumber = () => {
    setNum(num + 1);
    console.log("incrementing..." + (num + 1));
  };
  const decNumber = () => {
    if (num > 0) {
      setNum(num - 1);
      console.log("decrementing..." + (num - 1));
    } else {
      alert("Can'nt Decrement more!!");
    }
  };

  return (
    <div className="actual_div">
      <div className="inner_div">
        <br />
        <br />
        <br />
        <h1>{num}</h1>
        <Tooltip title="Delete">
          <Button onClick={decNumber} color="secondary">
            <DeleteIcon />
          </Button>
        </Tooltip>
        <Tooltip title="Add">
          <Button onClick={incNumber} className="btn_green" color="primary">
            <AddIcon />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default IncDec;
