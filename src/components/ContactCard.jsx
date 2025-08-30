import React, { useState } from 'react'

const ContactCard = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({name: "",
        email: "",
        message: ""})

    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData,[name]:value})
    }
    return (
        <div className='flex-col justify-center items-start w-full sm:w-3/4 bg-gray-50 dark:bg-zinc-950 border border-solid dark:border-zinc-500 p-2 shadow-[3px_4px_7px_#777777] dark:shadow-[3px_4px_3px_#555555] mt-2 mb-4 sm:px-3 md:px-4 lg:px-6 rounded'>
            <h1 className='text-lg lg:text-xl text-left  mt-2 bg-clip-text text-transparent bg-gradient-to-r dark:from-[#A1C2D4] dark:via-[#BAC8A3] dark:to-[#F1F2B5]  from-[#081c58] via-[#4B545E] to-[#09313f] tracking-tight'>Have a message?</h1>
            <form onSubmit={handleSubmit} className='space-y-2 mt-2'>
                <div>
                    <label htmlFor='name' className='block font-medium text-base text-gray-800 dark:text-gray-400 '>
                        Name:
                    </label>
                    <input type='text' name='name' id='name' required value={formData.name} onChange={handleChange} className="mt-1 block h-8 text-sm w-full  border-gray-500 px-3 outline-none focus:border-2 border border-solid dark:border-stone-500 shadow-[1px_1px_3px_#777777] dark:shadow-[1px_1px_3px_#555555] rounded" placeholder='Enter Your Full Name' />
                </div>
                <div>
                    <label htmlFor='email' className='block font-medium text-base text-gray-800 dark:text-gray-400 '>
                        Email:
                    </label>
                    <input type='text' name='email' id='email' required value={formData.email} onChange={handleChange} className="mt-1 block h-8 text-sm w-full  px-3 border-gray-500 outline-none focus:border-2 border rounded border-solid dark:border-stone-500 shadow-[1px_1px_3px_#777777] dark:shadow-[1px_1px_3px_#555555]" placeholder='Enter Your Email' />
                </div>
                <div>
                    <label htmlFor='message' className='block font-medium text-base text-gray-800 dark:text-gray-400 '>
                        Message:
                    </label>
                    <textarea rows={3} type='textarea' name='message' id='message' required value={formData.message} onChange={handleChange} className="mt-1 block text-sm w-full border-gray-500 px-3 rounded outline-none focus:border-2 min-h-20 pt-1 border border-solid dark:border-stone-500 shadow-[1px_1px_3px_#777777] dark:shadow-[1px_1px_3px_#555555]" placeholder='Send Message...'></textarea>
                </div>
                <div className='flex items-center justify-center'>
                <button type='submit' className=' px-9 py-1 mt-4 mb-2 cursor-pointer border border-solid dark:border-stone-500 shadow-[3px_3px_2px_#999999] dark:shadow-[2px_2px_0px_#555555] hover-underline rounded'>
                   Submit
                </button>
                </div>
            </form>
        </div>
    )
}

export default ContactCard