import { MoonIcon, SunIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import { useThemeStore } from '../store/useThemeStore';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className='flex items-center justify-end p-4'>
        <button onClick={toggleDarkMode} className="focus:outline-none mr-4">
        {darkMode ? (
          <SunIcon  className="size-7 sm:size-8 text-gray-800 dark:text-yellow-400 cursor-pointer border-1 p-1 rounded-lg" aria-label="Toggle Light Mode" />
        ) : (
          <MoonIcon className="size-7 sm:size-8 text-gray-800 dark:text-gray-400 cursor-pointer border-1 p-1 rounded-lg" aria-label="Toggle Dark Mode" />
        )}
      </button>
    </div>
  )
}

export default Navbar