import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Topbar from './components/Topbar'
import Workingprocess from './components/Workingprocess'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full scroll-smooth'>
    <div className='w-full h-[60px]'>
       <Topbar/>
    </div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Portfolio/>
    <Workingprocess/>
    <Testimonials/>
    <Blog/>
    <Footer/>
    </div>
    
  )
}

export default App
