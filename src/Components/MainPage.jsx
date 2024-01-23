import Input from "./Input";
import React, { useRef } from "react";
import Model from "./Model";

function MainPage({ onAdd,onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog=useRef()

  const HandleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;

    //validation ..
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate === ""
    ){

      dialog.current.open()
return;
    }

      onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDate,
      });
  };

  return (
    <>
    <Model ref={dialog } buttonCaption="Okay">
      <h2 className='text-xl font-bold text-stone-700 mt-4 my-4'>Invalid input</h2>
    <p className='text-stone-600 mb-4 '>Oops... look like you forget to enter a value</p>
    <p className='text-stone-600 mb-4 '>Please make sure you provided a valid value for every input field </p>
    </Model>
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button 
          onClick={onCancel}className="text-stone-800 hover:text-stone-950 ">
            cancel
          </button>
        </li>
        <li>
          <button
            onClick={HandleSave}
            className="px-6 py-2 rounded-md  bg-stone-800 text-stone-50 hover:bg-stone-950  "
            >
            save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" label={"title"} ref={title} />
        <Input type="text" label={"Description"} ref={description} isTextArea />
        <Input type="date" label={"Due Date"} ref={dueDate} />
      </div>
    </div>
            </>
  );
}

export default MainPage;
