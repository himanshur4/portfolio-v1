import React from 'react'

const Footer = () => {
  return (
    <div className=' ml-10 pt-5 mr-10 text-center mb-5'>
        <hr className='mt-2 border-dashed' />
      <h1 className='font-semibold text-sm sm:text-md md:text-md pt-4'>
         
        Made with ❤️ by Himanshu
        <br />
      </h1>

        <p className='text-xs  text-gray-500 dark:text-gray-400 mt-1'>© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  )
}

export default Footer