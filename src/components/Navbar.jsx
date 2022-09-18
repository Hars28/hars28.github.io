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
          <h1 >
            Home
          </h1>
          </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/skills">
          <h1>Skills</h1>
          </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/projects"><h1>Projects</h1></NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)} to="/contacts"><h1>Contact</h1></NavLink>
    </div>
  )
}

export default Navbar