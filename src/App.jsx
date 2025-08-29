import AppBackground from './components/AppBG'
import Home from './pages/Home'

const App = () => {
  return (
    <div className='flex justify-center min-h-screen 
 font-mono font-medium  dark:bg-gradient-to-br dark:from-[#000000] dark:via-[#000000] dark:to-[#000000] bg-gray-100 dark:bg-zinc-950'>
      <Home/>
    </div>
  )
}

export default App