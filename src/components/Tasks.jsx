import React from "react";
import NewTask from "./NewTask";


const Tasks = ({onAdd, onDelete, tasks}) => {
  
  return (
    <div>
      <h1 className="mt-12 font-semibold uppercase text-3xl">Tasks</h1>
      <NewTask onAdd={onAdd}/>
      <ul className="mt-7">
        {tasks.length === 0 ? (
          <p>This project has no tasks assigned yet.</p>
        ) : (
          tasks.map((task) => (
            <div className="flex gap-6">
              <li
                className="h-14 text-xl w-96 mt-3 rounded-md bg-slate-200 text-black"
                key={task.taskId}
              >
                <span className="absolute mt-[12px] ml-3">{task.text}</span>
              </li>
              <button
                onClick={() => onDelete(task.taskId)}
                className="h-11 w-24 mt-5 rounded-md bg-gray-300 text-red-500"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </ul>
    </div>
  );
};

export default Tasks;
