import React from 'react'

import noProjectImage from "../assets/no-projects.png"
import Botton from './Botton'
function FallbackContent({onStartAddProject}) {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={noProjectImage} alt="an empty taxk list " className='w-16 h-16 object-contain mx-auto ' />
        <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'> No project Selected</h2>
        <p className='text-stone-400 mb-4 '>Select a project or get a new one </p>
        <p className='mt-8 '>
           <Botton onClick={onStartAddProject}>Create new Project</Botton>
        </p>
    </div>
  )
}

export default FallbackContent