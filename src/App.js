
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Tech from './Components/Tech'
import Project from './Components/Project'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Workshop from './Components/Workshop'
function App() {
  return (
    <div basename='myself' className="overflow-x-hidden text-stone-300 antialiased">
      <div className="relative inset-0 z-10">
        <div className="relative h-full w-full bg-black">
          {/* Radial Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(at_right_bottom,_rgb(55,65,81),_rgb(17,24,39),_rgb(0,0,0))]">
          </div>

          <div className="container mx-auto px-8 relative">
            <Navbar />
            <Hero />
            <Tech />
            <Project />
            <Experience />
            <Workshop />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
