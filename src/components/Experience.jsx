import React, { useState } from 'react'
import { data } from "../data.js"
import { ArrowUpRightFromSquareIcon, Github, Video } from 'lucide-react'
const Experience = () => {
  const handleLinkClick = (url) => {
    window.location.href = url;
  }
  return (
    <div className='mt-5 mx-5'>
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>
        Experience<hr className='mt-2 border-dashed' />
      </h1>
      <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2 p-1 mt-2">
        
        
      </div>

    </div>
  )
}

export default Experience;