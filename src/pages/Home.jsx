import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

const Home = () => {
     
  return (
    <div className="flex flex-col bg-white dark:bg-black dark:text-gray-50 w-full sm:w-2xl overflow-auto min-h-screen rounded-xl shadow-xl shadow-l-fuchsia-950 dark:shadow-white">
        <Navbar/>
        <Hero />
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home