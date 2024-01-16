import React, { useState } from "react";
import { useTaskContext } from "../../TaskContext";
import "./AddTask.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { addTask } = useTaskContext();
  const [taskName, setTaskName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() === "") {
      toast.warning("please fill the task name");

      return;
    }

    const newTask = {
      id: new Date().getTime(),
      name: taskName,
      dateAdded: new Date().toLocaleString(),
      completed: false,
    };

    addTask(newTask);
    setTaskName("");
    toast.success("Task added successfully");
    navigate("/");
  };

  return (
    <div className="add-task-form">
      <div>
        <h2>Create Task</h2>

        <form onSubmit={handleSubmit} className="form-control">
          <label htmlFor="">Task Name</label>
          <input
            type="text"
            placeholder="Add Task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button type="submit" className="add-task-create-btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
