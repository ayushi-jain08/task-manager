import React from "react";
import { MdDelete } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { BsClipboard2XFill } from "react-icons/bs";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="task-box-inner">
      <div>
        <h3>{task.name}</h3>
        <p>{task.dateAdded}</p>
      </div>
      <div className="group-btn">
        {task.completed ? (
          <button onClick={onToggle}>
            <FaClipboardCheck className="check-icon" />
          </button>
        ) : (
          <button onClick={onToggle}>
            <BsClipboard2XFill className="cross-icon" />
          </button>
        )}
        <button onClick={onDelete}>
          <MdDelete className="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Task;
