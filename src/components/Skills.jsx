import React from 'react'
import {data} from '../data.js'

const Skills = () => {
  return (
    <div className=' ml-10 mt-5 mr-10'>
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>
        Skills<hr className='mt-2 border-dashed'/>
        
      </h1>
      <div className='flex flex-row items-center flex-wrap ml-1 sm:ml-2 md:ml-3 gap-1 mt-2'>
        {data.skills.map((sk)=>(<div className='text-xs sm:text-sm p-1 border border-gray-50 bg-gray-800 text-white dark:border-gray-700 dark:bg-gray-50 dark:text-black rounded '>{sk}</div>))}
      </div>

    </div>
  )
}

export default Skills