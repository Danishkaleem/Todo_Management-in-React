import React, { forwardRef } from "react";

const classes =
  "w-full p-1 border-b-2 border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 ";

function Input({ isTextArea, label, ...props }, ref) {
  return (
    <p className="flex flex-col gap-1 my-4 ">
      <label
        className="text-sm font-bold uppercase text-stone-500 "
        htmlFor={label}
      >
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
}

export default forwardRef(Input);
