import './index.css'
import Navbar from './components/Navbar'
import { Sidebar } from './components/Sidebar'
import Hero from './components/Hero'
import { useGlobalContext } from './context'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const { isSidebarOpen } = useGlobalContext()
  return (
    <main>
      <ToastContainer />
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
