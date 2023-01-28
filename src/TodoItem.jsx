import React, { Component } from "react";
// import { FiCheckSquare } from "react-icons/fi";
import { RxCheck, RxCross1 } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";

export default function TodoItem({ todo, handleDone, handleDelete }) {
  return (
    <div className={`taskContainer ${todo.done ? "taskComplete" : undefined}`}>
      <div className="leftSide">
        <p className={todo.done ? "done" : "incomplete"}>
          <span className="taskText">Task:</span> {todo.title}{" "}
        </p>
      </div>

      <div className="rightSide">
        <button
          className={todo.done ? "undoDoneBtn" : "notDoneBtn"}
          onClick={() => handleDone(todo.id, todo.done)}
        >
          {todo.done ? (
            <span>
              <span className="undoSpan">Undo</span>
              <RxCross1 fontSize={"1.3rem"} className="cross" />
            </span>
          ) : (
            <span>
              <span className="markAsComplete"> Mark as complete</span>
              <RxCheck fontSize={"1.5rem"} className="checkMark" />
            </span>
          )}
        </button>
        <button className="deleteBtn" onClick={() => handleDelete(todo.id)}>
          <FaRegTrashAlt fontSize={"1.5rem"} className="trash" />
          <span className="deleteBtnSpan">Delete Task</span>
        </button>
      </div>
    </div>
  );
}
