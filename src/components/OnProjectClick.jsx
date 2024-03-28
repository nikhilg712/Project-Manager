import Tasks from "./Tasks";
import React from "react";


const OnProjectClick = ({ tasks, project, onAddTask, onDelete }) => {
  return (
    <div className="ml-12">
      <h1 className="text-3xl font-bold font-serif">{project.title}</h1>
      <h1 className="mt-2 text-gray-600">{project.dueDate}</h1>
      <p className="mt-7 w-[40rem] text-base">{project.description}</p>
      <Tasks tasks={tasks} onDelete={onDelete} selectedProject={project} onAdd={onAddTask} />
    </div>
  );
};

export default OnProjectClick;
