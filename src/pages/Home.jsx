
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { useThemeStore } from "../store/useThemeStore"

const Home = () => {
     const {darkMode} = useThemeStore();
  return (
    
    <div className="flex flex-col dark:text-gray-300 w-full sm:w-2xl md:w-2xl sm:px-4 min-h-screen  dark:bg-gradient-to-br dark:from-[#0d1117] dark:via-[#18191a] dark:to-[#2c212d]  bg-gradient-to-br  border border-solid shadow-[10px_10px_7px_#070613] dark:shadow-[8px_10px_3px_#555555] rounded bg-white sm:mb-1 md:mb-2 dark:border-zinc-500" >
        <Navbar/>
        <Hero />
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home