
import React, { useState } from 'react';
    import logo from './images/BUYME.png';
    import logo1 from './images/muscle nation.jpg'

  
    const Projects = () => {
//       
//        

 
  const [showDetails, setShowDetails] = useState(false); // State to control visibility

  const handleLoginClick = () => {
    setShowDetails(true); // Show login details on button click
  };
   const cancelclick =()=>{
    setShowDetails(false);
   }
        
      
    
      return (
       
  <section className='projects container col-lg-12 col-md-12 col-sm-12 text-center h-100lvh h-screen' data-aos="zoom-in">
<h1>Projects</h1>
  <div className='proj1 container col-lg-12 col-md-12 col-sm-12' data-aos="zoom-in" >
        <div>
          <a href='https://buymeorg.netlify.app/' target='blank'>
         
           <img src={logo} width="100px" height="100px" alt="logo" id="buyme" data-aos="flip-right" ></img>
           </a>
          
      
        
           <div className='d-f flex-direction-column text-center container'>
           <button onClick={handleLoginClick}>View More</button>
           </div>
           </div>
          
{showDetails && (
    <div className='buyme container w-100% align-items-left'>
          <span className="cancel">
                <img src="https://cdn-icons-png.flaticon.com/128/9199/9199686.png" onClick={cancelclick} loading="lazy" alt="Close " title="Close " width="50px" height="50"></img>
          </span>
          <div style={{lineHeight:'2.5rem'}}>
          🛍️ BuyMe – Your Go-To E-Commerce Platform

        Built with WordPress & WooCommerce

          BuyMe is a user-friendly e-commerce platform designed to make online shopping simple and enjoyable. Built with WordPress and WooCommerce, it offers smooth navigation, secure payments, and real-time order tracking—all optimized for mobile and desktop.
</div>
  <div className="para">
    <div>
  <h4>✨ Key Features:</h4>
  <ul>
      <li>🛒 Effortless shopping with smart search & filters  </li>
      <li>💳 Secure WooCommerce checkout </li>
      <li>📱 Fully responsive design</li>
    </ul>
    </div>

<div style={{color:'red'}}>
<h4>🛠️ Skills Utilized:</h4>
 <ul>
    <li>WordPress Development</li>
    <li>WooCommerce Customization</li>
    <li>UI/UX Design</li>
    <li>SEO Optimization</li>
  </ul>
 
</div>



    </div>
    <a href="https://buymeorg.netlify.app/" target='blank'>
<button>View Site</button>
</a>

 


  </div> )}
 
    </div>
    <div className='proj2'>
    <img src={logo1} width="50px" height="50px" alt="mn"></img>

  </div>
    </section> )};  
    

  

export default Projects
         





              


   
    
   
    



         
    
    
    
    
   
