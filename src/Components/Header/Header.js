import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>Task manager</h1>
        <button className="add-btn">
          <Link to={"/add"}>
            <IoMdAdd />
            Add Task
          </Link>
        </button>
      </div>
    </>
  );
};

export default Header;
