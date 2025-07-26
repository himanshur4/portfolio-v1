import React from 'react'
import {data} from "../data.js" 
import { ArrowUpRightFromSquareIcon, Github, Video } from 'lucide-react'
const Projects = () => {
  return (
    <div className=' ml-10 mt-5 mr-10'>
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>
        Projects<hr className='mt-2' />
      </h1>
      <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2 p-1 mt-2">
        {
          data.projects.map((proj)=>(<div className='flex-col bg-gray-50  dark:bg-slate-950 dark:text-white rounded-lg border-1 border-gray-300 dark:border-gray-700 p-1 cursor-pointer hover:transform-3d'>
            <div className="flex justify-between border-b-1 border-dotted dark:border-b-gray-500">
              <h1 className='text-xl font-semibold'>
                {proj.title}
              </h1>
              <div className='flex gap-2 mt-1 sm:mt-0'>
                <Video className='size-4 sm:size-5  cursor-pointer text-gray-800  dark:text-gray-600'/>
                <Github className='size-4 sm:size-5 cursor-pointer text-gray-800 dark:text-gray-600'/>
                <ArrowUpRightFromSquareIcon className='size-4 sm:size-5 cursor-pointer text-gray-800 dark:text-gray-600'/>
              </div>
            </div>
            <p className='text-sm tracking-tight'>
              {proj.description}
            </p>
            <div className='flex gap-1 flex-wrap'>
              <span className='hidden md:inline'>Tech Stack:</span>
              {proj.techStack.map(ts=>(<div className='text-xs italic border-1 border-gray-200 dark:border-gray-800 px-1 rounded mb-0 mt-0 '>
                  {ts}
              </div>))}
              </div>
            </div>
          ))
        }
        <div className='flex justify-center items-center'>
        <button className='text-xs sm:text-sm text-gray-800 dark:text-gray-200 hover:underline mt-2 cursor-pointer border-1 border-gray-300 dark:border-gray-700 p-1 rounded-lg w-fit px-4'> 
          Show more projects
          
        </button>
        </div>
      </div>

    </div>
  )
}

export default Projects