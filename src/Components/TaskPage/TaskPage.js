import React from "react";
import Header from "../Header/Header";
import "./TaskPage.css";
import TaskList from "../TaskList/TaskList";

const TaskPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="task-container">
        <h2>Your task</h2>
        <TaskList />
      </div>
    </div>
  );
};

export default TaskPage;
