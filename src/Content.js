import React from 'react'
import { Link } from 'react-scroll';





const Content = () => {
  return (
    <section className='content container w-100'>
       <h1  className='container-fluid col-* justify-content-center text-center fs-10 fs-sm-1 ' data-aos="zoom-in">Full Stack Developer and a little bit of <span className='content1'>Everything</span></h1>
   
  <div className='container-fluid col-* text-center ms-10-md-0 ms-3'>
    <button className="learn-more">
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
     <Link to="aboutme" smooth={true} duration={10}><span className="button-text ">Learn More</span></Link>
    </button>
  </div>
    </section>
 
  )
}

export default Content

