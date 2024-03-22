import React, { forwardRef } from "react";
import { ForwardedRef } from "react";

const Input = forwardRef(({ label, type, istextArea, ...props }, ref) => {
  return (
    <div className="mt-5">
      <label className="uppercase font-medium">{label}</label>
      {istextArea ? (
        <textarea
          ref={ref}
          className="block w-full bg-orange-200 bg-opacity-40 focus:outline-none focus:border-blue-300 focus:border-b-4"
          cols="59"
          rows="3"
        ></textarea>
      ) : (
        <input
          ref={ref}
          className="block h-12 w-full bg-orange-200 bg-opacity-40 focus:outline-none focus:border-blue-300 focus:border-b-4"
          type={type}
        ></input>
      )}
    </div>
  );
});

export default Input;
