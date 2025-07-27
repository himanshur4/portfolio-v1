import React, { useState } from 'react'
import { data } from "../data.js"
import { ArrowUpRightFromSquareIcon, Github, Video } from 'lucide-react'
const Projects = () => {
  const [showAllProj, setShowAllProj] = useState(false);
  const proj = showAllProj ? data.projects.slice() : data.projects.slice(0, 3)
  const handleLinkClick = (url) => {
    window.location.href = url;
  }
  return (
    <div className=' ml-10 mt-5 mr-10'>
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>
        Projects<hr className='mt-2 border-dashed' />
      </h1>
      <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2 p-1 mt-2">
        {
          proj.map((proj) => (<div className='flex-col bg-gray-100  dark:bg-slate-950 dark:text-white rounded-lg border-1 border-gray-500 dark:border-gray-700 p-1 cursor-pointer hover:transform-3d mt-2 sm:mt-2 md:mt-3 transition-transform duration-300 ease-in-out hover:scale-101 ' key={proj.id} onClick={() => handleLinkClick(proj.liveLink)}>
            <div className="flex justify-between border-b-1 border-dotted dark:border-b-gray-500">
              <h1 className='text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r dark:from-[#A1C2D4] dark:via-[#BAC8A3] dark:to-[#F1F2B5]  from-[#081c58] via-[#4B545E] to-[#09313f]' >
                {proj.title}
              </h1>
              <div className='flex gap-2 mt-1 sm:mt-0'>
                <Video className='size-4 sm:size-5  cursor-pointer text-gray-800  dark:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-108' onClick={(e) => {
                  e.stopPropagation();
                  handleLinkClick(proj.videoPreview)
                }} />
                <Github className='size-4 sm:size-5 cursor-pointer text-gray-800 dark:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-108' onClick={(e) => {
                  e.stopPropagation();
                  handleLinkClick(proj.sourceCode)
                }} />
                <ArrowUpRightFromSquareIcon className='size-4 sm:size-5 cursor-pointer text-gray-800 dark:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-108' onClick={(e) => { e.stopPropagation(); handleLinkClick(proj.liveLink) }} />
              </div>
            </div>
            <p className='text-xs sm:text-sm tracking-tight my-2 dark:text-amber-50'>
              {proj.description}
            </p>
            <div className='flex gap-1 flex-wrap'>
              <span className='hidden md:inline bg-clip-text text-transparent bg-gradient-to-r dark:from-[#A1C2D4] dark:via-[#BAC8A3] dark:to-[#F1F2B5] from-[#360959] via-[#040b2b] to-[#052148] tracking-tighter'>Tech Stack:</span>
              {proj.techStack.map(ts => (<div className='text-xs italic border-1 border-gray-300 dark:border-gray-800 dark:text-gray-400 px-1 rounded mb-0 mt-0 '>
                {ts}
              </div>))}
            </div>
          </div>
          ))
        }
        <div className='flex justify-center items-center'>
          <button className='text-xs sm:text-sm text-gray-800 dark:text-gray-200 hover:underline mt-2 cursor-pointer border-1 border-gray-800 dark:border-gray-700 p-1 rounded-lg w-fit px-4' onClick={() => setShowAllProj((prev) => !prev)}>
            {!showAllProj ? "Show more projects" : "Hide all projects"}
          </button>
        </div>
      </div>

    </div>
  )
}

export default Projects