import React from 'react'
import {NavLink } from "react-router-dom"
import Styles from "./Navbar.module.css"
const baseStyle = {
    color: "black",
    textDecoration: "none"
  };
  const activeStyle = {
    color: "red",
    textDecoration: "none"
  };

const Navbar = () => {
  return (
    <div className={Styles.nav}>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/">
          <div >
            Home
          </div>
          </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/skills">
          <div>My Skills</div>
          </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/projects"><div>My Projects</div></NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/contacts"><div>Contact Me</div></NavLink>
    </div>
  )
}

export default Navbar