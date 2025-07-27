import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'
import ContactCard from './ContactCard'
import { data } from '../data'
const Contact = () => {
  const handleLinkClick=(url)=>{
    window.location.href=url
  }
  return (
    <div className='mt-5 mx-5'>
      <h1 className='font-bold text-lg sm:text-xl md:text-2xl'>
        Contact<hr className='mt-2 border-dashed' />

      </h1>
      <div className="flex-col">
        <div className="flex items-center justify-center gap-3 md:gap-4 pt-6 pb-2 mx-3">
          <Github className='size-8 sm:size-9 md:size-10 cursor-pointer dark:text-gray-300 transition-transform duration-300 ease-in-out hover:scale-108 border-1 hover:bg-gray-900 hover:text-gray-50 dark:border-gray-300 p-1 rounded-lg text-green-950 dark:hover:bg-gray-100 dark:hover:text-gray-800' onClick={()=>handleLinkClick(data.social.github)}/>
          <Twitter className='size-8 sm:size-9 md:size-10 cursor-pointer dark:text-gray-300 transition-transform duration-300 ease-in-out hover:scale-108 border-1 hover:bg-gray-900 hover:text-gray-50 dark:border-gray-300 p-1 rounded-lg text-green-950 dark:hover:bg-gray-100 dark:hover:text-gray-800' onClick={()=>handleLinkClick(data.social.X)} />
          <a href="mailto:himanshu.tech37@gmail.com"><Mail className='size-8 sm:size-9 md:size-10 cursor-pointer dark:text-gray-300 transition-transform duration-300 ease-in-out hover:scale-108 border-1 hover:bg-gray-900 hover:text-gray-50 dark:border-gray-300 p-1 rounded-lg text-green-950 dark:hover:bg-gray-100 dark:hover:text-gray-800' /></a>
          <Linkedin className='size-8 sm:size-9 md:size-10 cursor-pointer dark:text-gray-300 transition-transform duration-300 ease-in-out hover:scale-108 border-1 hover:bg-gray-900 hover:text-gray-50 dark:border-gray-300 p-1 rounded-lg text-green-950 dark:hover:bg-gray-100 dark:hover:text-gray-800' onClick={()=>handleLinkClick(data.social.linkedin)} />
        </div>
       <a href='/resume.pdf'><p className='text-center font-bold hover:underline cursor-pointer mb-3 hover:scale-105 '>Download Resume</p></a> 
        <div className='flex items-center justify-center'>
         <ContactCard/>
        </div>
        
          
        
      </div>
    </div>
  )
}

export default Contact