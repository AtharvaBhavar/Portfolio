// Header.js
import React, { useState, useEffect } from 'react';
import '../styles.css'; 

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <a href="" className="logo">Atharva Bhavar  <span>Portfolio</span></a>
      <div id="menu-icon" className={isMenuOpen ? 'bx bx-x' : 'bx'} onClick={toggleMenu}></div>
      <ul className={isMenuOpen ? 'navlist active' : 'navlist'}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="top-btn">
          <a href="#contact" className="h-btn">Contact me</a>
      </div>
      
    </header>
  );
}

export default Header;
