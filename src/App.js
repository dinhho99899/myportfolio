import logo from './logo.svg';
import './index.css';
import Navbar from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import React, { useState } from 'react';
import Hero from './components/Hero';
import { useGlobalContext } from './context';
import About from './components/About';
import Skills from "./components/Skills"
import Projects from './components/Projects';
import Footer from './components/Footer'
import Contact from './components/Contact';
import { skillsIcons } from './components/icons'
function App() {
const {isSidebarOpen} = useGlobalContext()
  return (
    <main>
      <Navbar />
      {isSidebarOpen && <Sidebar />}
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
