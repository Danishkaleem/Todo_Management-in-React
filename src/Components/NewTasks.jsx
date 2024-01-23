import React, { useState } from 'react'

function NewTasks({newTask}) {
    const [tasks,setTasks]=useState('')
    const handleTask=(e)=>{
        let value=e.target.value
setTasks(value)
    }

    function handleClick(){
        if(tasks.trim()===''){
            return
        }
        newTask(tasks)

        setTasks('');
        
    }
  return (
    <>
    <div className='flex items-center gap-4'></div>
    <input 
    onChange={(e)=>handleTask(e)} value={tasks} type="text"  className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
    <button onClick={handleClick} className='text-stone-700 hover:text-stone-950 border-2 ml-1 bg-stone-400 rounded-3xl p-1'>Add task</button>
    
    </>
  )
}

export default NewTasks