import React from 'react'
import logo from './images/K.png'

const Header = () => {
  return (
    <section className='header'>
   <img src={logo} alt='logo' width="150px" height="150px"></img>
    <ul className='subjects'>
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