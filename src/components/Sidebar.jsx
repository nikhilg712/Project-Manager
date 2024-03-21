import React from "react";

const Sidebar = ({onClickAdd}) => {
  return (
    <div className="bg-black w-1/4  rounded-tr-xl">
        <h1 className="text-white mt-10 text-center text-3xl font-bold font-sans">YOUR PROJECTS</h1>
        <button onClick={onClickAdd} className="text-slate-300 text-center  rounded-2xl bg-slate-700  mt-8 ml-20 h-10 w-36  hover:bg-slate-800 hover:text-white">
            +Add Project
        </button>
    </div>
  );
};

export default Sidebar;
