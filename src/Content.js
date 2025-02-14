import React from 'react'
import profile from './images/1000079546.jpg'
import resume from './images/KARTHIKEYAN S-resume (2).pdf'
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>


const Content = () => {
  return (
    
    <section className='content' data-aos="fade-down">
        <div>
        <h1 data-aos="fade-down">Hello this is Karthikeyan S</h1>
            <div  data-aos="fade-up"className='intro'>
        <p>Hi, I’m Karthikeyan S, a <span className='role'>Full Stack Developer </span>who loves building user-friendly web applications. I’m passionate about creating impactful digital experiences with clean, efficient code.</p>
        <div className='resumebtn'>
            <a href={resume} download>Get My resume</a>
        </div>
            </div>  
            </div>
             <div className='profile' data-aos="fade-up">
        <img src={profile} alt='profile' width="330px" height="330px" data-aos="zoom-out"></img>
            </div>
       
       
 

    </section>
  )
}

export default Content