import React from 'react'
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className='projects container text-center lg-6 md-6 sm-12 w-100 h-100vh'>
        <h1 className='text-center'>My Projects</h1>
        <header>
        <nav className='projcards container w-100' style={{gap:"20px"}}>
            <ul className="proj"style={{display:"flex",marginRight:"20px"}}>
                <a href='https://buymeorg.netlify.app/' target="blank" style={{textDecoration:"none",width:"100%"}}>
                    <div className='proj1' data-aos="flip-left" style={{marginright:"20px",margintop:"20px"}}>
                       <div className="projtitle" style={{backgroundColor:"#807ecf",justifyContent:"center",alignItems:"center",top:"0",left:"0",borderRadius:" 0px 0px 20px 20px",height:"60px",width:"max-content",position:"relative",padding:"20px"}}>
                       <h4> BuyME</h4>
                       </div>
                       <p>
                      BuyMe is a user-friendly E-Commerce website built with WordPress and WooCommerce, offering a seamless shopping experience. 
                       Designed for efficiency and ease, it includes advanced search functionality.
                       </p>
                        <div>
                        <a href='https://github.com/Kartikn-code/E-commerce-Wordpress' target="blank">
                    <FaGithub color='black' size={35}/>
                        </a>
                        </div>
                    </div>

                </a>
                    <a href='https://gearupp.netlify.app/' target="blank" style={{textDecoration:"none",width:"100%"}}>
                    <div className='proj1 proj' data-aos="flip-left" style={{position:"relative"}}>
                    <div className="projtitle" style={{backgroundColor:"#807ecf",justifyContent:"center",alignItems:"center",top:"0",left:"0",borderRadius:" 0px 0px 20px 20px",height:"60px",width:"max-content",position:"relative",padding:"20px"}}>
                       <h4>Gear-up</h4>
                    </div>
                        <p>Gear-up is a static website created using HTML, CSS, and JavaScript for heavy machinery manufacturers and enthusiasts. 
                        It features strong equipment and a simple design, easy navigation and interactive features. 
                        </p>
                       <div>
                       <a href='https://github.com/Kartikn-code/Gear-up' target="blank"><FaGithub color='black' size={35}/></a>
                       </div>
                      
                 
                    </div>
                    </a>

                  
                  
                  

                </ul>

                <ul className="proj"style={{display:"flex",marginRight:"20px"}}>
                    <a href='https://buymeorg.netlify.app/' target="blank" style={{textDecoration:"none",width:"100%"}}>
                    <div className='proj1' data-aos="flip-left" style={{marginright:"20px",margintop:"20px"}}>
                       <div className="projtitle" style={{backgroundColor:"#807ecf",justifyContent:"center",alignItems:"center",top:"0",left:"0",borderRadius:" 0px 0px 20px 20px",height:"60px",width:"max-content",position:"relative",padding:"20px"}}>
                       <h4> Musclenation</h4>
                       </div>
                       <p>
                       MuscleNation: A powerful gym website created with a combination of HTML, CSS, JavaScript, SQL, and Django. It provides the best experience for fitness lovers with workout plans, login-logout and signin deatils and their log.
                       </p>
                    <div>
                    <a href='https://github.com/Kartikn-code/Musclenation' target="blank">
                    <FaGithub color='black' size={35}/>
                    </a>
                    </div>
                    </div>

                    </a>
                    <a href="https://karti-knportfolio.netlify.app/" target="blank" style={{textDecoration:"none",width:"100%"}}>
                    <div className='proj1 proj' data-aos="flip-left">
                    <div className="projtitle" style={{backgroundColor:"#807ecf",justifyContent:"center",alignItems:"center",top:"0",left:"0",borderRadius:" 0px 0px 20px 20px",height:"60px",width:"max-content",position:"relative",padding:"20px"}}>
                       <h4>Personal Portfolio</h4>
                    </div>
                        <p>
                        My Personal Portfolio Website is a modern, responsive React app showcasing myself and my skills, projects, and experience. There are also some smooth animations, and a contact form Using React,React-icons and Framer Motion, deployed on Netlify. More features coming soon!
                        </p>
                       <div>
                       <a href='https://github.com/Kartikn-code/myportfolio' target="blank"><FaGithub color='black' size={35}/></a>
                       </div>
                      
                 
                    </div>
                    </a>

                  
                  
                  

                </ul>
                
                
                
                     
                      
            </nav>

        </header>

    </section>
  )
}

export default Projects


