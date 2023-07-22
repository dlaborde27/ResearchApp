import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import menu from '../../public/menu-btn.png';
import logo from '../../public/logo2Blanco.png';
import './Navbar.css';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav id='navbar'>
        <div>
        <NavLink to="/">
          <Image
            htmlWidth='45%'
            src={logo}
            alt='Logo LBAA'
          />
        </NavLink>
        <ul id='nav-list' className={isMobileMenuOpen ? 'mobile-menu' : 'nav-list'}>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/" onClick={toggleMobileMenu}>Home</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/people" onClick={toggleMobileMenu}>People</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/publications" onClick={toggleMobileMenu}>Publications</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/research" onClick={toggleMobileMenu}>Research</NavLink></li>
          <li><NavLink className={({ isActive })=> isActive ? "active-link" : "nav-item" } to="/contact">Contact</NavLink></li>
        </ul>
        <img id="menu" src={menu} alt="menu" onClick={toggleMobileMenu} />
        </div>
      </nav>
    </>
  );
}
