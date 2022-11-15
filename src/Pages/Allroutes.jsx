import React from 'react'
import {Routes,Route} from "react-router-dom"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Contacts from './Contacts'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'

const Allroutes = () => {
  return (
    <>
  

    <Routes>
        <Route path="/" element={<Home/>}/>
       
    </Routes>
    
    </>
  )
}

export default Allroutes