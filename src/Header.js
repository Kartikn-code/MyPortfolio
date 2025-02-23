import React from 'react'
import logo from './images/slovakia.png'
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <section className='header container-fluid w-100 col-lg-6 fs-10 fs-md-5 fs-sm-1 justify-content-center'>
   <img src={logo} alt='logo' width="50px" height="50px"></img>
   
    <ul className='subjects container col-12 fs-10 fs-md-3 fs-sm-1 justify-content-center text-center'>
      
      <Link to="home" smooth={true} duration={10}>Home</Link>
      <Link to="aboutme" smooth={true} duration={10}>About Me</Link>
      <Link to="skills" smooth={true} duration={10}>Skills</Link>
      <Link to="projects" smooth={true} duration={10}>Projects</Link>
      <Link to="contact" smooth={true} duration={10}>Experience</Link>
      <Link to="contact" smooth={true} duration={10}>Contact</Link>
</ul>

  </section>
  )};
   
 
 
   
  
export default Header 

