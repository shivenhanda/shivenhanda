import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/skills'

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    </>
  )
}

export default App