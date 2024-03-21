import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-black w-1/3 py-8 rounded-tr-xl">
        <h1 className="text-white text-center text-3xl font-bold font-sans">YOUR PROJECTS</h1>
        <button className="text-slate-300 text-center rounded-2xl bg-slate-700 ml-32 mt-12 h-10 w-36  hover:bg-slate-800 hover:text-white">
            +Add Project
        </button>
    </div>
  );
};

export default Sidebar;
