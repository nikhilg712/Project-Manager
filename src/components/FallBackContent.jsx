import React from "react";
import Input from "./Input";
const FallBackContent = ({onClickAdd}) => {

  return (
    <div className="flex flex-col items-center mt-11 sw-2/3 pl-64">
      <img className="w-20" src="src\assets\no-projects.png" alt="" />
      <h2 className="text-3xl my-7 font-bold text-amber-950">
        No Project Selected
      </h2>
      <p className=" text-amber-900 ">
        Select a project to get started with a new one.
      </p>
      <button onClick={onClickAdd} className="text-yellow-200 text-center rounded-2xl mt-7 bg-yellow-900  h-10 w-44  hover:bg-yellow-950 hover:text-yellow-100">
        Create New Project
      </button>    
    </div>
  );
};

export default FallBackContent;
