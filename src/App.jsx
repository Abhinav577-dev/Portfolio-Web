import React from 'react'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

export default function App(){
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <footer className="py-4 text-center text-secondary">
        <small>© {new Date().getFullYear()} Abhinav. Built with React + Vite.</small>
      </footer>
    </>
  )
}
