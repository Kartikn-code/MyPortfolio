import React from 'react'
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className='projects container text-center lg-6 md-6 sm-12'>
        <h1 className='text-center'>My Projects</h1>
        <header>
            <nav className='projcards container w-100 h-100vh' style={{gap:"20px"}}>
                <ul className="proj"style={{display:"flex",marginRight:"20px"}}>
                    <a href='https://buymeorg.netlify.app/' target='blank' style={{textDecoration:"none",width:"100%"}}>
                    <div className='proj1' data-aos="flip-left" style={{marginright:"20px",margintop:"20px"}}>
                       <div className="projtitle" style={{backgroundColor:"#807ecf",justifyContent:"center",alignItems:"center",top:"0",left:"0",borderRadius:" 0px 0px 20px 20px",height:"60px",width:"max-content",position:"relative",padding:"20px"}}>
                       <h4> BuyME</h4>
                       </div>
                       <p>
                      BuyMe is a user-friendly E-Commerce website built with WordPress and WooCommerce, offering a seamless shopping experience. 
                       Designed for efficiency and ease, it includes advanced search functionality.
                       </p>
                    <div>
                    <a href='https://github.com/Kartikn-code/E-commerce-Wordpress' target='blank'>
                    <FaGithub color='black' size={35}/>
                    </a>
                    </div>
                    </div>

                    </a>
                    <a href='https://gearupp.netlify.app/' target='blank' style={{textDecoration:"none",width:"100%"}}>
                    <div className='proj1 proj' data-aos="flip-left">
                    <div className="projtitle" style={{backgroundColor:"#807ecf",justifyContent:"center",alignItems:"center",top:"0",left:"0",borderRadius:" 0px 0px 20px 20px",height:"60px",width:"max-content",position:"relative",padding:"20px"}}>
                       <h4>Gear-up</h4>
                    </div>
                        <p>Gear-up is a static website created using HTML, CSS, and JavaScript for heavy machinery manufacturers and enthusiasts. 
                        It features strong equipment and a simple design, easy navigation and interactive features. 
                        </p>
                       <div>
                       <a href='https://github.com/Kartikn-code/Gear-up'><FaGithub color='black' size={35}/></a>
                       </div>
                      
                 
                    </div>
                    </a>

                  
                  
                  

                </ul>
                <ul className='flex flex-row flex-wrap justify-content-center lg-6 md-6 sm-12'>
                <div class="card">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                            <div class="card__content">
                                <p class="card__title">MuscleNation</p>
                                    <p class="card__description">MuscleNation: A powerful gym website created with a combination of HTML, CSS, JavaScript, SQL, and Django. 
                                        It provides the best experience for fitness lovers with workout plans, login-logout and signin deatils and their log,membership management and class bookings. 
                                        MuscleNation is a sophisticated, powerful backend all disguised as a sleek interface.</p>
                           </div>
                </div>
                <div class="card">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                            <div class="card__content">
                                <p class="card__title">Gear-up</p>
                                    <p class="card__description">MuscleNation: A powerful gym website created with a combination of HTML, CSS, JavaScript, SQL, and Django. 
                                        It provides the best experience for fitness lovers with workout plans, login-logout and signin deatils and their log,membership management and class bookings. 
                                        MuscleNation is a sophisticated, powerful backend all disguised as a sleek interface.
                                    </p>
                                    <div>
                                        <a href='https://github.com/Kartikn-code/Muscle-nation' target='blank'><FaGithub color='black' size={65}/></a>
                                    </div>
                            </div>
                </div>
                <div class="card">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path></svg>
                            <div class="card__content">
                                <p class="card__title">BuyME</p>
                                    <p class="card__description">MuscleNation: A powerful gym website created with a combination of HTML, CSS, JavaScript, SQL, and Django. 
                                        It provides the best experience for fitness lovers with workout plans, login-logout and signin deatils and their log,membership management and class bookings. 
                                        MuscleNation is a sophisticated, powerful backend all disguised as a sleek interface.</p>
                            </div>
                </div>
                </ul>
                
                
                     
                      
            </nav>

        </header>

    </section>
  )
}

export default Projects


