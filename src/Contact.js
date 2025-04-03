import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (  
  <section id="contact" className="contact">
    <div className="container">
        <div className="section-title">
            <h1>Get In Touch</h1>
            <p>Let's discuss how I can help optimize your Needs</p>
        </div>
        <div className="contact-content">
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Your email"/>
                    </div>
                    <div className="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Subject"/>
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Your message"></textarea>
                    </div>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <div className="contact-method">
                    <div className="contact-icon">📧</div>
                    <a href="mailto:ping2karti@gmail.com" target='blank'><p>ping2karti@gmail.com</p></a>
                </div>
                <div className="contact-method">
                    <div className="contact-icon">📱</div>
                    <p>(044 4690 3057)</p>
                </div>
                <div className="contact-method">
                    <div className="contact-icon">🏢</div>
                    <p>Plot No 44, Balaji Avenue 1st Street,
                        <p>Iyyapanthangal,Chennai-600056</p>
                        </p>
                </div>
                <div className="contact-method">
                    <div className="contact-icon">⏰</div>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                </div>
                <div className="social-bar">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon github" />
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon linkedin" />
      </a>
      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="icon twitter" />
      </a>
      <a href="mailto:your.email@example.com">
        <FaEnvelope className="icon email" />
      </a>
    </div>
    
            </div>
        </div>
    </div>
    







  





</section>)

    }

export default Contact


