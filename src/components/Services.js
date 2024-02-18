import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS CSS
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
    <section id="services" class="services">
    <div class="center-text" data-aos="fade-down">
        <h2>My <span>Services</span></h2>
    </div>
    <div class="services-content" data-aos="zoom-in-up">
        <div class="services-content">
            <div class="box">
                
                <h3>Web Development</h3>
                <p>We design, build, and optimize websites tailored to your business needs. Drive online success with our expertise</p>
                
            </div>
        </div>
        <div class="services-content">
            <div class="box">
                
                <h3>Java Programer</h3>
                <p>Learning Java And Improving Coding Skills to dive deeper in World Of Software Development</p>
                
            </div>
        </div>
        
            <div class="services-content">
                <div class="box">
                   
                    <h3>Digital Marketting</h3>
                    <p>Working as a Digital Marketting team member at Sanjivani Alumni Relations Cell</p>
                    
                </div>
            </div>
    </div>

</section>
  );
}

export default Hero;
