import React from 'react'

const Footer = () => {
  return (
    <div className=' mx-5 pt-5 text-center mb-5'>
        <hr className='mt-2 border-dashed' />
      <h1 className='font-semibold text-sm sm:text-md md:text-md pt-4'>
         
        Made with ❤️ by Himanshu
        <br />
      </h1>

        <p className='text-xs  text-gray-800 dark:text-gray-400 mt-1'>© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  )
}

export default Footer