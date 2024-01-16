import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import { useTaskContext } from "../../TaskContext";
import "./TaskList.css";
import StrictModeDroppable from "../StrictModeDroppable";

const TaskList = () => {
  const { tasks, deleteTask, toggleTask, reorderTasks } = useTaskContext();

  const handleDragEnd = (result) => {
    console.log("cddd", result);
    if (!result.destination) return; // Dropped outside the list

    const reorderedTasks = Array.from(tasks);
    const [movedTask] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, movedTask);

    reorderTasks(reorderedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StrictModeDroppable droppableId="taskList">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {tasks.length > 0 ? (
              tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="task-table"
                      data-react-beautiful-dnd-drag-handle
                    >
                      <Task
                        task={task}
                        onDelete={() => deleteTask(task.id)}
                        onToggle={() => toggleTask(task.id)}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            ) : (
              <p className="empty-task">No task created !!..</p>
            )}
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default TaskList;
