

    import React from 'react'
    import logo from './images/BUYME.png';
    
    const Projects = () => {
      return (
        
  <section className='projects conatiner col-lg-12 col-md-12 col-sm-12 text-center '>
<h1>Projects</h1>
  <div className='proj1'>
          <a href='https://buymeorg.netlify.app/' target='blank' onClick={buyme()}>
           <img src={logo} width="200px" height="200px" alt="logo" id="buyme"></img>
           </a>
  </div>
         

  </section>      )
    }
    
    export default Projects

    function buyme(){
      const image=document.getElementById('buyme').addEventListener('click',()=>{
        image.style.transform="20px";
      })
    }
         
    
    
    
    
   
