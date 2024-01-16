import { Route, Routes } from "react-router-dom";
import "./App.css";
import TaskPage from "./Components/TaskPage/TaskPage";
import AddTask from "./Components/AddTask/AddTask";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <>
      <TaskProvider>
        <Routes>
          <Route path="/" element={<TaskPage />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </TaskProvider>
    </>
  );
}

export default App;
