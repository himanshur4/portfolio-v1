import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'
const Contact = () => {
  return (
    <div className=' ml-10 mt-5 mr-10'>
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>
        Contact<hr className='mt-2 border-dashed' />

      </h1>
      <div className="flex-col">
        <div className="flex items-center justify-center gap-3 md:gap-4 pt-6 pb-2 mx-3">
          <Github className='size-8 sm:size-9 md:size-10 cursor-pointer dark:text-gray-300 transition-transform duration-300 ease-in-out hover:scale-108 border-1 hover:bg-gray-900 hover:text-gray-50 dark:border-gray-300 p-1 rounded-lg text-green-950 dark:hover:bg-gray-100 dark:hover:text-gray-800'/>
          <Twitter className='size-8 sm:size-9 md:size-10 cursor-pointer dark:text-gray-300 transition-transform duration-300 ease-in-out hover:scale-108 border-1 hover:bg-gray-900 hover:text-gray-50 dark:border-gray-300 p-1 rounded-lg text-green-950 dark:hover:bg-gray-100 dark:hover:text-gray-800' />
          <Mail className='size-8 sm:size-9 md:size-10 cursor-pointer dark:text-gray-300 transition-transform duration-300 ease-in-out hover:scale-108 border-1 hover:bg-gray-900 hover:text-gray-50 dark:border-gray-300 p-1 rounded-lg text-green-950 dark:hover:bg-gray-100 dark:hover:text-gray-800' />
          <Linkedin className='size-8 sm:size-9 md:size-10 cursor-pointer dark:text-gray-300 transition-transform duration-300 ease-in-out hover:scale-108 border-1 hover:bg-gray-900 hover:text-gray-50 dark:border-gray-300 p-1 rounded-lg text-green-950 dark:hover:bg-gray-100 dark:hover:text-gray-800' />
        </div>
        <p className='text-center font-bold hover:underline cursor-pointer mb-3 hover:scale-105 '>Download Resume</p>
        <div>
          <p className='text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center'>Feel free to reach out to me via email at <a href="mailto:himanshu@example.com" className='underline'>hraj808404@gmail.com</a></p>
        </div>
        
          
        
      </div>
    </div>
  )
}

export default Contact