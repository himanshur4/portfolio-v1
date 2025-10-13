import React, { useState } from 'react'
import { ArrowUpRightFromSquareIcon, Github, Video } from 'lucide-react'
import { data } from '../data.js'
const Experience = () => {
  const handleLinkClick = (url) => {
    window.location.href = url;
  }
  const companies = data.experience;
  return (
    <div className='mt-5 mx-5'>
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>
        Experience
        <hr className='mt-2 border-dashed' />
      </h1>
      <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2 p-1 mt-2">
        {
          companies.map((c) => (<div className='flex-col bg-gray-50 dark:bg-zinc-950 border border-solid dark:border-zinc-500 shadow-[3px_4px_4px_#777777] dark:shadow-[3px_4px_3px_#555555] p-1 cursor-pointer hover:transform-3d mt-2 sm:mt-2 md:mt-3 transition-transform duration-300 ease-in-out hover:shadow-[3px_4px_0px_#000000] hover:dark:shadow-[3px_4px_0px_#aaaaaa] rounded' key={c.id}>
            <div className="flex justify-between border-b-1 border-dotted dark:border-b-gray-500">
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <h1 className='text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r dark:from-[#A1C2D4] dark:via-[#BAC8A3] dark:to-[#F1F2B5]  from-[#081c58] via-[#4B545E] to-[#09313f]'>
                    {c.company}
                  </h1>
                  <img src={c.companyLogo} className='w-5 sm:w-6 ml-2  dark:border-0' alt="company logo" />
                </div>
                
                  <span className='text-sm sm:text-md tracking-tight dark:text-gray-300 font-normal italic'>
                    {c.role}
                  </span>
                
              </div>
              <div className='flex flex-col'>
              <span className='text-xs sm:text-sm tracking-tight dark:text-gray-300'>
                ({c.joining}-{c.end})
                
              </span>
                <span className='text-sm sm:text-md tracking-tight dark:text-gray-300 font-normal italic text-right'>
                    {c.locationType}
                </span>
              </div>
            </div>
            <ul className='list-disc list-inside mt-2 space-y-1 text-xs sm:text-sm tracking-tight dark:text-gray-300'>
              {c.description.split('\n').map((point, index) => (
                <li key={index}>
                  {point.replace('•', '').trim()}
                </li>
              ))}
            </ul>
            


          </div>
          ))
        }

      </div>

    </div>
  )
}

export default Experience;