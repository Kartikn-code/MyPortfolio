import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css'; // Import your CSS file for styling

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'GAOtek Inc.',
      duration: 'Sept 2024 - Jan 2025',
      description: 'Developed interactive user interfaces with a focus on performance and user experience.',
      image: 'https://gaotek.com/wp-content/uploads/2024/02/GAOTek-Logo-Final20-100x100-1.png', // Replace with your image path
      animations: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
      },
    },
    {
      title: 'React Developer',
      company: 'Creative Agency',
      duration: 'Jan 2020 - May 2021',
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
    <section className=" container experience">
      <h1>Experience</h1>
      <div className="experience-list">
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
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;