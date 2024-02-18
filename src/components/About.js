import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS library
import '../styles.css'; // Adjusted import path
import img2 from './img2.jpeg';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: false // Whether animation should only happen once
      // You can add more configuration options as needed
    });
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-img" data-aos="zoom-in-down">
        <img src={img2} alt="myImage" />
      </div>
      <div className="about-text" data-aos="zoom-in-up">
        <h2>I am Product <span>Designer</span><br /> & Web Developer</h2>
        <div className="exp-area">
          <p className="exp-area">
            Experience
            <span>Fresher</span>
          </p>
          <p className="exp-area">
            Speciality:
            <span>Web Development, Java, C, Python Graphic, Dessigning</span>
          </p>
          <p className="exp-area">
            Address:
            <span>Ahmednagar, Maharashtra</span>
          </p>
          <p className="exp-area">
            Email:
            <span>bhavaratharva24@gmail.com</span>
          </p>
          <p className="exp-area">
            Phone:
            <span>+91 8237749865</span>
          </p>
        </div>
        <a href="#portfolio" className="btn">View All projects</a>
      </div>
    </section>
  );
}

export default About;
