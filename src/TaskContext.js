import React, { createContext, useContext, useEffect, useReducer } from "react";

const TaskContext = createContext();

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";
const REORDER_TASKS = "REORDER_TASKS";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case REORDER_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    dispatch({ type: REORDER_TASKS, payload: storedTasks });
  }, []); // Run only once on component mount

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]); // Update local storage whenever tasks change

  const addTask = (newTask) => {
    dispatch({ type: ADD_TASK, payload: newTask });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: DELETE_TASK, payload: taskId });
  };

  const toggleTask = (taskId) => {
    dispatch({ type: TOGGLE_TASK, payload: taskId });
  };

  const reorderTasks = (tasks) => {
    dispatch({ type: REORDER_TASKS, payload: tasks });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        deleteTask,
        toggleTask,
        reorderTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }
  return context;
};
