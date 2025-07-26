
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
    <div className="flex flex-col dark:text-gray-300 w-full sm:w-2xl md:w-3xl min-h-screen " >
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