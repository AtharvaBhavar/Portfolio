// Contact.js

import React, { useEffect } from 'react';
import '../styles.css';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function for animations
      once: false // Whether animation should only happen once
      // You can add more configuration options as needed
    });
  }, []);
  return (
    <section className="contact" id="contact">
      <div className="center-text" data-aos="fade-down">
          <h2>Contact <span>Me</span></h2>
      </div>
      <div className="contact-form" data-aos="zoom-in">
          <form action="">
              <input type="text" placeholder="Your name" required />
              <input type="email" placeholder="Email Address..." required />
              <textarea name="" id="" cols="30" rows="10" placeholder="Write Message Here" required></textarea>
              <input type="submit" name="" value="Send Message" className="send-btn" />
          </form>
      </div>
    </section>
  );
}

export default Contact;
