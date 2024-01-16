import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <>
      <div className="search">
        <label htmlFor="">Task</label>
        <input
          type="text"
          name=""
          className="input-form"
          placeholder="search here..."
        />
      </div>
    </>
  );
};

export default Search;
