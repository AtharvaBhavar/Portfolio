import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import '../styles.css'; // Adjusted import path
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are importing the correct CSS file
import port1Image from './port-1.jpg';
import port2Image from './port-2.jpg';
import port3Image from './port-3.jpg';
import port4Image from './port-4.jpg';
import port5Image from './port-5.jpg';
import port6Image from './port-6.jpg';
import AOS from 'aos'; // Import AOS library

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: false // Allow animations to occur on every scroll
      // You can add more configuration options as needed
    });
  }, []);
  return (
    <section className="portfolio" id="portfolio">
      <div className="center-text" data-aos="fade-down">
        <h2>My <span>Portfolio</span></h2>
      </div>
      <div className="Portfolio-content" data-aos="zoom-in-up">
        <div className="row">
        <img src={port1Image} alt="Project 1" />
          <div className="main-row">
            <div className="row-text">
              <h5>Flappy Bird Game</h5>
            </div>
            <div className="row-icon">
            <a href="https://github.com/AtharvaBhavar/FlappyBird"><i className="fab fa-github"></i></a>

            </div>
            </div>
          <h4>Project 1</h4>
        </div>

        <div className="row">
        <img src={port2Image} alt="Project 1" />
          <div className="main-row">
            <div className="row-text">
              <h5>Calculator</h5>
            </div>
            <div className="row-icon">
            <a href="https://github.com/AtharvaBhavar/Codsoft/tree/main/codsoft/Calculator"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <h4>Project 2</h4>
        </div>
        <div className="row">
        <img src={port3Image} alt="Project 1" />
          <div className="main-row">
            <div className="row-text">
              <h5>Library Management System</h5>
            </div>
            <div className="row-icon">
            <a href="https://github.com/AtharvaBhavar"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <h4>Project 3</h4>
        </div>
        <div className="row">
        <img src={port4Image} alt="Project 1" />
          <div className="main-row">
            <div className="row-text">
              <h5>Website Design</h5>
            </div>
            <div className="row-icon">
            <a href="https://github.com/AtharvaBhavar"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <h4>Project 4</h4>
        </div>
        <div className="row">
        <img src={port5Image} alt="Project 1" />
          <div className="main-row">
            <div className="row-text">
              <h5>Website Design</h5>
            </div>
            <div className="row-icon">
            <a href="https://github.com/AtharvaBhavar"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <h4>Project 5</h4>
        </div>
        <div className="row">
        <img src={port6Image} alt="Project 1" />
          <div className="main-row">
            <div className="row-text">
              <h5>Website Design</h5>
            </div>
            <div className="row-icon">
            <a href="https://github.com/AtharvaBhavar"><i className="fab fa-github"></i></a>
            </div>
          </div>
          <h4>Project 6</h4>
        </div>
        
        
      </div>
    </section>
  );
}

export default Portfolio;
