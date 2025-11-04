import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-800 text-white scroll-smooth">
      <Navbar />
      {/* <main className="pt-24"> */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      {/* </main> */}
      <Footer />
    </div>
  )
}