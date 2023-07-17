import menu from "../../public/menu-btn.png"
import logo from "../../public/logo2Blanco.png"
import './Navbar.css';
import { NavLink } from "react-router-dom"
import { Image } from '@chakra-ui/react'

export function Navbar() {
  return (
    <>
      <nav id='navbar'>
        <NavLink to="/">
          <Image
          htmlWidth='45%'
            src={logo}
            alt='Logo LBAA'
          />
        </NavLink>
        <ul id='nav-list'>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/people">People</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/publications">Publications</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/research">Research</NavLink></li>
          {/* <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/contact">Contact</NavLink></li> */}
        </ul>
        <img id="menu" src={menu} alt="menu" />
      </nav>
    </>
  )
}
