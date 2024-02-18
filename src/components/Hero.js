import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import '../styles.css'; // Adjusted import path
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are importing the correct CSS file
import resume from './Resume.pdf';
import AOS from 'aos'; // Import AOS library

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: false // Allow animations to occur on every scroll
      // You can add more configuration options as needed
    });
  }, []);

  return (
    <section className="hero" id="home">
      <div className="main-content" data-aos="fade-in">
        <h4>Hi, There</h4>
        <h1>I'm <span>Atharva Bhavar</span></h1>
        <p>Currently studying in Second Year Information Technology, Sanjivani College of Engineering, Kopargaon.</p>
        <div className="social">
          
          <a href=""><i className="fab fa-facebook"></i></a>
          <a href=""><i className="fab fa-instagram"></i></a>
          <a href="https://twitter.com/AtharvaBhavar"><i className="fab fa-twitter"></i></a>
          <a href="https://www.linkedin.com/in/atharva-bhavar/"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="main-btn">
          <a href="#contact" className="btn">Hire me</a>
          <span className="button-space"></span>
          <a href={resume} download="Atharva_Bhavar_Resume.pdf" className="btn btn-2">Download CV</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
