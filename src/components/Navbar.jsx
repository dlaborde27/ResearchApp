import './Navbar.css';
import { NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <nav id='navbar'>
        <ul id='nav-list'>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/people">People</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/publications">Publications</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/research">Research</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/teaching">Teaching</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/openpositions">Open Positions</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </>
  )
}
