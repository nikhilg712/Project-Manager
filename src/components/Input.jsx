import React from "react";

const Input = ({ label, type, istextArea, ...props }) => {
  return (
    <div className="mt-5">
      <label className="uppercase font-medium">{label}</label>
      {istextArea ? <textarea className="block w-full bg-orange-200 bg-opacity-40 focus:outline-none focus:border-blue-300 focus:border-b-4" cols="59" rows="3"></textarea> : <input className="block h-12 w-full bg-orange-200 bg-opacity-40 focus:outline-none focus:border-blue-300 focus:border-b-4" type={type}></input>}
    </div>
  );
};

export default Input;
