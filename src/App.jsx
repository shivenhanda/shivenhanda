import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <>
    <Navbar/>
    <Main/>
    <About/>
    <Projects/>
    </>
  )
}

export default App