import React from "react";

const Sidebar = ({ onClickAdd, projects }) => {
  if (!projects) {
    return <div className="text-white">No projects available</div>;
  }
  return (
    <div className="bg-black w-1/4  rounded-tr-xl">
      <h1 className="text-white mt-10 text-center text-3xl font-bold font-sans">
        YOUR PROJECTS
      </h1>
      <button
        onClick={onClickAdd}
        className="text-slate-300 text-center  rounded-2xl bg-slate-700  mt-8 ml-20 h-10 w-36  hover:bg-slate-800 hover:text-white"
      >
        +Add Project
      </button>
      <ul className="mt-10">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="text-gray-200 mt-2 ml-20 bg-gray-500 bg-opacity-50 h-10 w-32 rounded-md hover:bg-gray-500 hover:text-white">{project.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
