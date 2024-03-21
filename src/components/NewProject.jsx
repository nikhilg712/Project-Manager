import React from "react";

const NewProject = () => {
  return (
    <div className=" w-2/3">
      <img className="w-20" src="src\assets\no-projects.png" alt="" />
      <h2 className="text-3xl my-7 font-bold text-amber-950">
        No Project Selected
      </h2>
      <p className=" text-amber-900 ">
        Select a project to get started with a new one.
      </p>
      <button className="text-yellow-200 text-center rounded-xl mt-7 bg-yellow-900  h-10 w-44  hover:bg-yellow-950 hover:text-yellow-100">
        Create New Project
      </button>
      <div className="w-2/3">
        <div className="flex gap-7 ml-72">
        <button className=" text-black text-lg h-10 w-16">Cancel</button>
        <button className=" text-white text-lg h-10 w-16 bg-black">Save</button>
        </div>
        
        <div>
        <label className="uppercase font-medium">Title</label>
        <input className="block h-10 w-4/5 bg-orange-200 bg-opacity-40 border-blue-200 border-b-2" type="text" />
      </div>
      <div>
        <label className="uppercase font-medium">Description</label>
        {/* <input className="block h-20 w-4/5 bg-orange-200 bg-opacity-40 border-blue-200 border-b-4" type="text" /> */}
        <textarea className="block bg-orange-200 bg-opacity-40 border-blue-200 border-b-4" name="" id="" cols="59" rows="3"></textarea>
      </div>
      <div>
        <label className="uppercase font-medium">Due Date</label>
        <input className="block w-4/5 bg-orange-200 bg-opacity-40 border-blue-200 border-b-2" type="date" />
      </div>
      </div>
      
    </div>
  );
};

export default NewProject;
