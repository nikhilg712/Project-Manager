import React from "react";
import { useState, useRef } from "react";

const NewTask = ({onAdd}) => {
  const [tasks, setTasks] = useState('');



  function handleChange(event){
    setTasks(event.target.value);
  }

  function handleAddTask() {
    onAdd(tasks)
    setTasks("");
  }

  function handleDeleteTask(taskId) {
    
  }
  return (
    <div>
      <div className="mt-5 flex gap-3">
        <input
          onChange={handleChange}
          value={tasks}
          type="text"
          className="w-60 border-2 border-slate-200  bg-slate-200 focus:border-gray-700 focus:outline-none pl-1 h-9"
        />
        <button
          className="bg-black w-20 text-white rounded-md"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
