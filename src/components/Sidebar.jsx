import React from "react";

const Sidebar = ({ onClickAdd, projects, projectClick, projectAdded }) => {
  return (
    <div className="bg-black w-1/4 h-[100%]  rounded-tr-xl">
      <button
        onClick={onClickAdd}
        className="text-slate-300 text-center  rounded-2xl bg-slate-700  mt-8 ml-20 h-10 w-36  hover:bg-slate-800 hover:text-white"
      >
        +Add Project
      </button>
      <h1 className="text-white mt-10 text-center text-3xl font-bold font-sans">
        YOUR PROJECTS
      </h1>

      <ul className="mt-4">
        {projects.length === 0 ? (
          <div className="text-center  text-white">{`No projects added yet :(`}</div>
        ) : (
          projects.map((project) => {

            let classes = "text-gray-200 mt-3 ml-20 bg-gray-500 bg-opacity-50 h-10 w-32 rounded-md hover:bg-gray-500 hover:text-white";
            if(project.id===projectAdded)
            {
              classes+=" border-4 border-white"
            }


            return (
              <li key={project.id}>
                <button
                  onClick={()=>projectClick(project.id)}
                  className={classes}
                >
                  {project.title}
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
