
const Hero = () => {
  return (
    <div className='flex flex-col mt-5 ml-10'>
      <div className="flex flex-col items-start md:items-center md:gap-4 md:flex-row gap-2">
        <img src="/pfp13.jpg" className='w-15 sm:w-17 md:w-28 lg:w-30 rounded-full' alt="profilePic" />
        <div className="flex-col">
          <h1 className='text-xl tracking-tight font-semibold'>Hii👋 I am <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#FF512F] via-[#FF6F5E] to-[#DD2476]'>Himanshu.</span></h1>
          <h3 className='text-lg bg-clip-text text-transparent bg-gradient-to-r dark:from-[#A1C2D4] dark:via-[#BAC8A3] dark:to-[#F1F2B5] from-[#081c58] via-[#4B545E] to-[#09313f]'>A full-stack developer</h3>
          <p className='text-xs tracking-tighter sm:text-sm text-gray-900 dark:text-gray-300 mr-5'>I transform ideas into real-world applications, from clean and responsive frontends to scalable backends. I enjoy learning new technologies, solving meaningful problems, and continuously improving my skills.</p>
          </div>
      </div>
    </div>
  )
}

export default Hero