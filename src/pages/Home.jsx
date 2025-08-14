
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
    <div className="flex flex-col dark:text-gray-300 w-full sm:w-2xl md:w-3xl sm:px-4 min-h-screen  dark:bg-gradient-to-br dark:from-[#0d1117] dark:via-[#18191a] dark:to-[#21262d]  bg-gradient-to-br  border border-solid shadow-[8px_8px_5px_#000000] dark:shadow-[5px_5px_6px_#bbb] rounded bg-white sm:mb-1 md:mb-2 dark:border-zinc-500" >
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