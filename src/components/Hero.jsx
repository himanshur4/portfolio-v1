
const Hero = () => {
  return (
    <div className='flex flex-col mt-5 mx-4'>
      <div className="flex flex-col items-start md:items-center md:gap-4 md:flex-row gap-2">
        <img src="/pfp13.jpg" className='w-15 sm:w-17 md:w-28 lg:w-30 rounded-full ml-2' alt="profilePic" />
        <div className="flex-col mt-1">
          <h1 className='text-xl tracking-tight font-bold ml-2'>Hii! I am <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#880184] via-[#640761] to-[#41064d] dark:from-[#f46e87] dark:via-[#f17d82] dark:to-[#e53cb2]'>Himanshu.</span></h1>
          <h3 className='text-lg bg-clip-text text-transparent bg-gradient-to-r dark:from-[#A1C2D4] dark:via-[#BAC8A3] dark:to-[#F1F2B5] from-[#081c58] via-[#4B545E] to-[#09313f] ml-2'>A full-stack developer</h3>
          <p className='text-sm tracking-tight sm:text-sm text-gray-900 dark:text-gray-300 mr-3 ml-2'>I transform ideas into real-world applications, from clean and responsive frontends to scalable backends. I enjoy learning new technologies, solving meaningful problems, and continuously improving my skills.</p>
          </div>
      </div>
    </div>
  )
}

export default Hero