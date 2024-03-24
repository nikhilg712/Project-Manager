import React from "react";
import Input from "./Input";
import { useRef } from "react";

const NewProject = ({ onCancel, onSave }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const projectTitle = title.current.value;
    const projectDescription = description.current.value;
    const projectDueDate = dueDate.current.value;

    onSave({
      title: projectTitle,
      description: projectDescription,
      dueDate: projectDueDate,
    });
  }

  return (
    <div className="mt-4 w-[40rem]">
      <div className="flex flex-row-reverse gap-5 ml-72">
        <button
          onClick={handleSave}
          className="rounded-xl text-white text-lg h-10 w-16 bg-black"
        >
          Save
        </button>
        <button className=" text-black text-lg h-10 w-16" onClick={onCancel}>
          Cancel
        </button>
      </div>
      <Input ref={title} label={"Title"} type={"text"}></Input>
      <Input ref={description} label={"description"} istextArea={true}></Input>
      <Input ref={dueDate} label={"due date"} type={"date"}></Input>
    </div>
  );
};

export default NewProject;
