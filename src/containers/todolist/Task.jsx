import React, { Component } from "react";

const Task = props => {
  const { text, date, id, active, finishDate, important } = props.task;
  const style = {
    height: "20px",
    width: "20px",
    fontSize: "10px",
    padding: "0"
  };
  const finish = new Date(finishDate).toLocaleString();

  if (active) {
    return (
      <div className="tasks">
        <div className="task">
          <strong style={important ? { color: "#e31b6d" } : null}>
            {text}
          </strong>
          <br />
        </div>
        <div className="due-date-task">
          do <span>{date} </span>
          <button onClick={() => props.change(id)}>Zostało zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <strong>{text}</strong> - zrobić do <span>{date} </span> <br />
          <span>
            {" "}
            -potwierdzenie wykoniania {finish}{" "}
            <button onClick={() => props.delete(id)} style={style}>
              X
            </button>
          </span>
        </p>
      </div>
    );
  }
};

export default Task;
