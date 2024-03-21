import React from "react";
import Input from "./Input";

const NewProject = ({onCancel}) => {
  return (
    <div className="mt-4 w-[40rem]">
      <div className="flex flex-row-reverse gap-5 ml-72">
        <button className="rounded-xl text-white text-lg h-10 w-16 bg-black">Save</button>
        <button className=" text-black text-lg h-10 w-16" onClick={onCancel}>Cancel</button>
      </div>
      <Input label={"Title"} type={"text"}></Input>
      <Input label={"description"} istextArea={true}></Input>
      <Input label={"due date"} type={"date"}></Input>
    </div>
  );
};

export default NewProject;
