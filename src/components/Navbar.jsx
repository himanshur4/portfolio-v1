import { MoonIcon, SunIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useThemeStore } from '../store/useThemeStore';

const Navbar = () => {
   const { darkMode, toggleDarkMode, initializeTheme } = useThemeStore();

  useEffect(() => {
    initializeTheme(); 
  }, []);

  return (
    <div className='flex items-center justify-end p-4 my-1'>
        <button onClick={toggleDarkMode} className="focus:outline-none mr-4 dark:bg-zinc-950 border border-solid dark:border-zinc-500 shadow-[2px_3px_0px_#000000] dark:shadow-[2px_3px_0px_#999] bg-gray-100 rounded">
        {darkMode ? (
          <SunIcon  className="size-7 sm:size-8 text-gray-800 dark:text-gray-300 cursor-pointer p-1 " aria-label="Toggle Light Mode" />
        ) : (
          <MoonIcon className="size-7 sm:size-8 text-gray-800 dark:text-gray-400 cursor-pointer  p-1" aria-label="Toggle Dark Mode" />
        )}
      </button>
    </div>
  )
}

export default Navbar