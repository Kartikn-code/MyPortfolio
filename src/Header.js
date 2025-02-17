import React from 'react'
import logo from './images/slovakia.png'

const Header = () => {
  return (
    <section className='header container-fluid w-100 col-lg-6 fs-10 fs-md-5 fs-sm-1 justify-content-center'>
   <img src={logo} alt='logo' width="50px" height="50px"></img>
    <ul className='subjects container col-12 fs-10 fs-md-3 fs-sm-1 justify-content-center text-center'>
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Experience</li>
        <li>Contact Me</li>

    </ul>
 
    </section>
  )
}

export default Header