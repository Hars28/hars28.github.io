import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from '../components/Navbar'
import Contacts from './Contacts'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'

const Allroutes = () => {
  return (
    <>
        <Navbar/>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
    </Routes>
    
    </>
  )
}

export default Allroutes