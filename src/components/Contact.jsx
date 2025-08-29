import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
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
          <Github className='rounded size-8 sm:size-9 md:size-10 p-1  cursor-pointer dark:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-108 hover:bg-gray-900 hover:text-gray-50
          border border-solid dark:border-zinc-500 shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#999]  text-gray-950 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:bg-zinc-950' onClick={()=>handleLinkClick(data.social.github)}/>
          <Twitter className='rounded size-8 sm:size-9 md:size-10 p-1  cursor-pointer dark:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-108 hover:bg-gray-900 hover:text-gray-50
          border border-solid dark:border-zinc-500 shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#999]  text-gray-950 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:bg-zinc-950' onClick={()=>handleLinkClick(data.social.X)} />
          <a href="mailto:himanshu.tech37@gmail.com"><Mail className='rounded size-8 sm:size-9 md:size-10 p-1  cursor-pointer dark:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-108 hover:bg-gray-900 hover:text-gray-50
          border border-solid dark:border-zinc-500 shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#999]  text-gray-950 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:bg-zinc-950' /></a>
          <Linkedin className='rounded size-8 sm:size-9 md:size-10 p-1  cursor-pointer dark:text-gray-400 transition-transform duration-300 ease-in-out hover:scale-108 hover:bg-gray-900 hover:text-gray-50
          border border-solid dark:border-zinc-500 shadow-[2px_2px_0px_#000000] dark:shadow-[2px_2px_0px_#999]  text-gray-950 dark:hover:bg-gray-100 dark:hover:text-gray-800 dark:bg-zinc-950' onClick={()=>handleLinkClick(data.social.linkedin)} />
        </div>
       <a href='/resume.pdf'><p className='text-center font-bold hover:underline cursor-pointer mb-3 hover:scale-105 '>View Resume</p></a> 
        <div className='flex items-center justify-center'>
         <ContactCard/>
        </div>
        
          
        
      </div>
    </div>
  )
}

export default Contact