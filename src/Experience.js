import React from 'react';
import { motion } from 'framer-motion';

import './Experience.css'; // Import your CSS file for styling
import { MdWork } from "react-icons/md";
const Experience = () => {
  const experiences = [
    {
      title: 'WEB DEVELOPER INTERN',
      company: 'GAOtek Inc.',
      duration: 'Sept 2024 - Jan 2025',
      description: 'I developed a working e-commerce Web Site called "BuyMe" using WordPress and WooCommerce. This project provided an online shopping experience, with the availability of many products through easy to navigate, responsive design. it even supports ajax search functions !.',
      image: 'https://gaotek.com/wp-content/uploads/2024/02/GAOTek-Logo-Final20-100x100-1.png', // Replace with your image path
      Technologies: "WordPress  WooCommerce  HTML CSS  JavaScript  PHP  MySQL  REST API  Git",
      animations: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      },
    },
    {
      title: 'WEB DEVELOPER INTERN',
      company: 'Prodigy Infotech Pvt Ltd',
      duration: 'Sept 2024 - Oct 2024',
      description: 'Implemented dynamic animations and transitions to enhance user engagement using React and CSS animations.',
      image: 'https://media.licdn.com/dms/image/v2/D4D0BAQEMRfX2ouW2lw/company-logo_200_200/company-logo_200_200/0/1727855093948/prodigy_infotech_logo?e=2147483647&v=beta&t=yKzoYTxZSd47gGP9jF__ycnWkrjvAV6XJgAPU3vi2io', // Replace with your image path
      animations: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 20 },
      },
    },
 
  ];



  return (
    <section className=" container experience lg-12 md-12 sm-12 ">
      <h1>Experience</h1>
      <div className="experience-list" data-aos="fade-up">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={exp.animations.initial}
            animate={exp.animations.animate}
            exit={exp.animations.exit}
            transition={{ duration: 0.5 }}
            className="experience-item"
          >
            <img src={exp.image} alt={`${exp.title} at ${exp.company}`} className="experience-image" />
            <div className="experience-content" data-aos="fade-in">
              <div className='title' data-aos="zoom-out">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <span className='duration'><h6>({exp.duration})</h6></span>
                </div>
                
              
              <h6>{exp.Technologies}</h6>
              <p>{exp.description}</p>
              <div className='work-btn'>
               
                 <button onClick={() => window.open('https://buymeorg.netlify.app/', '_blank')} style={{float:'right'}}><MdWork color='#004b89'size={40} /> </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;