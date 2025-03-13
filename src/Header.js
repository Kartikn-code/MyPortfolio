import React from 'react'
import { Link } from 'react-scroll';



const Header = () => {
  return (
    <section className='header container-fluid w-100 col-lg-6 fs-10 fs-md-5 fs-sm-1 justify-content-center'>
      <div>
        <img src="   https://cdn-icons-png.flaticon.com/512/16316/16316121.png " width="70px" height="70px" alt="" title="" class="img-small"></img>   
      </div>
    <ul className='subjects container col-12 fs-10 fs-md-3 fs-sm-1 justify-content-center text-center'>
      
      <Link to="home" smooth={true} duration={10}>Home</Link>
      <Link to="aboutme" smooth={true} duration={10}>About Me</Link>
      <Link to="skills" smooth={true} duration={10}>Skills</Link>
      <Link to="projects" smooth={true} duration={10}>Projects</Link>
      <Link to="experience" smooth={true} duration={10}>Experience</Link>
      <Link to="achievements" smooth={true} duration={10}>Acheivements</Link>
      <Link to="contact" smooth={true} duration={10}>Contact</Link>
    
</ul>





  </section>
  
  )};
   
 
 
   
  
export default Header
