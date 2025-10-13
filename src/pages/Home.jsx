
import Contact from "../components/Contact"
import Experience from "../components/Experience"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import { useThemeStore } from "../store/useThemeStore"

const Home = () => {
     const {darkMode} = useThemeStore();
  return (
    
    <div className="flex flex-col dark:text-gray-300 w-full sm:w-2xl md:w-2xl sm:px-4 min-h-screen dark:bg-gradient-to-br dark:from-[#0a0d12] dark:via-[#161618] dark:to-[#1f1528]  border border-solid shadow-[5px_5px_5px_#070613] dark:shadow-[5px_5px_3px_#555555] rounded bg-white sm:mb-1 bg-gradient-to-br from-[#ffffff] via-[#f5f5f7] to-[#e8eaed] md:mb-2 dark:border-zinc-500" >
        <Navbar/>
        <Hero />
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home