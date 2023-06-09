import menu from "../../public/menu-btn.png"
import './Navbar.css';
import { NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <nav id='navbar'>
        <NavLink id="logo" to="/">LBA<sup>2</sup></NavLink>
        <ul id='nav-list'>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/people">People</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/publications">Publications</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/research">Research</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/contact">Contact</NavLink></li>
        </ul>
        <img id="menu" src={menu} alt="menu" />
      </nav>
    </>
  )
}
