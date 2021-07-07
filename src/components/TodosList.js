import React, { useState } from "react";
import "./TodosList.css";
import TodosItem from "./TodosItem";

function TodosLlist() {
  const [inputList, setInputList] = useState("");
  const [Item, setItem] = useState([]);

  const inputChange = (e) => {
    setInputList(e.target.value);
  };

  const buttonClick = (e) => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };

  const deleteListItem = (id) => {
    console.log("Deleting....");

    setItem((oldItem) => {
      return oldItem.filter((arrayElem, index) => {
        return id != index;
      });
    });
  };

  return (
    <div>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="+ Add a Item"
            onChange={inputChange}
            value={inputList}
          />
          <button onClick={buttonClick}> + </button>

          <ol>
            {Item.map((itemVal, index) => {
              return (
                <TodosItem
                  text={itemVal}
                  key={index}
                  id={index}
                  onSelect={deleteListItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TodosLlist;

// rfce
