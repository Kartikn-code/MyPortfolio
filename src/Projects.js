
// import React, { useState } from 'react';
    //import logo from './images/BUYME.png';
//     import logo1 from './images/muscle nation.jpg'

  
//     const Projects = () => {
// //       
// //        

 
//   const [showDetails, setShowDetails] = useState(false); // State to control visibility

//   const handleLoginClick = () => {
//     setShowDetails(true); // Show login details on button click
//   };
//    const cancelclick =()=>{
//     setShowDetails(false);
//    }
        
      
    
//       return (
       
//   <section className='projects container col-lg-12 col-md-12 col-sm-12 text-center h-100lvh h-screen' data-aos="zoom-in">
// <h1>Projects</h1>
//   <div className='proj1 container col-lg-12 col-md-12 col-sm-12' data-aos="zoom-in" >
//         <div>
//           <a href='https://buymeorg.netlify.app/' target='blank'>
         
//            <img src={logo} width="100px" height="100px" alt="logo" id="buyme" data-aos="flip-right" ></img>
//            </a>
          
      
        
//            <div className='d-f flex-direction-column text-center container'>
//            <button onClick={handleLoginClick}>View More</button>
//            </div>
//            </div>
          
// {showDetails && (
//     <div className='buyme container w-100% align-items-left'>
//           <span className="cancel">
//                 <img src="https://cdn-icons-png.flaticon.com/128/9199/9199686.png" onClick={cancelclick} loading="lazy" alt="Close " title="Close " width="50px" height="50"></img>
//           </span>
//           <div style={{lineHeight:'2.5rem'}}>
//           🛍️ BuyMe – Your Go-To E-Commerce Platform

//         Built with WordPress & WooCommerce

//           BuyMe is a user-friendly e-commerce platform designed to make online shopping simple and enjoyable. Built with WordPress and WooCommerce, it offers smooth navigation, secure payments, and real-time order tracking—all optimized for mobile and desktop.
// </div>
//   <div className="para">
//     <div>
//   <h4>✨ Key Features:</h4>
//   <ul>
//       <li>🛒 Effortless shopping with smart search & filters  </li>
//       <li>💳 Secure WooCommerce checkout </li>
//       <li>📱 Fully responsive design</li>
//     </ul>
//     </div>

// <div style={{color:'red'}}>
// <h4>🛠️ Skills Utilized:</h4>
//  <ul>
//     <li>WordPress Development</li>
//     <li>WooCommerce Customization</li>
//     <li>UI/UX Design</li>
//     <li>SEO Optimization</li>
//   </ul>
 
// </div>



//     </div>
//     <a href="https://buymeorg.netlify.app/" target='blank'>
// <button>View Site</button>
// </a>

 


//   </div> )}
 
//     </div>
//     <div className='proj2'>
//     <img src={logo1} width="50px" height="50px" alt="mn"></img>

//   </div>
//     </section> )};  
    

  

// export default Projects
         





              


   
    
   
    


import React, { useState } from 'react';
import { SiWoocommerce } from "react-icons/si";
import { FaGithub,FaDatabase, FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs,FaWordpress, FaBootstrap, } from 'react-icons/fa';
import { SiTailwindcss,SiDjango, SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si';

const ProjectCards = () => {
  // Project data
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A fully responsive e-commerce admin dashboard with real-time analytics, inventory management, and order tracking functionality.",
      image: "./images/BUYME.png", // Replace with your actual project image
      demoLink: "https://buymeorg.netlify.app/",
      githubLink: "https://github.com/Kartikn-code/E-commerce-Wordpress",
      technologies: [
        { name: "wordpress", icon: <FaWordpress />, color: "#0f4bea" },
        { name: "woo-commerce", icon: <SiWoocommerce />, color: "#339933" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#df2830" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#28a7df" }
      ],
      featured: true
    },
    // {
    //   id: 2,
    //   title: "Weather App",
    //   description: "A sleek weather application that provides real-time weather data, forecasts, and location-based services using a third-party API.",
    //   image: "/api/placeholder/600/350", // Replace with your actual project image
    //   demoLink: "https://weather-app.example.com",
    //   githubLink: "https://github.com/yourusername/weather-app",
    //   technologies: [
    //     { name: "JavaScript", icon: <FaJs />, color: "#111" },
    //     { name: "HTML5", icon: <FaHtml5 />, color: "#E44D26" },
    //     { name: "CSS3", icon: <FaCss3Alt />, color: "#264DE4" }
    //   ],
    //   featured: false
    // },
    // {
    //   id: 3,
    //   title: "Task Management System",
    //   description: "A comprehensive task management application with features like task creation, assignment, priority levels, and deadline tracking.",
    //   image: "/api/placeholder/600/350", // Replace with your actual project image
    //   demoLink: "https://task-manager.example.com",
    //   githubLink: "https://github.com/yourusername/task-manager",
    //   technologies: [
    //     { name: "React", icon: <FaReact />, color: "#61DAFB" },
    //     { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    //     { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    //   ],
    //   featured: true
    // },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built from scratch using React and fundamental web technologies to showcase my skills, projects, and professional journey to potential employers and clients..",
      image: "/api/placeholder/600/350", // Replace with your actual project image
      demoLink: "https://karti-knportfolio.netlify.app/",
      githubLink: "https://github.com/Kartikn-code/myportfolio",
      technologies: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        {name:"Java-Script",icon:<FaJs/> },
        {name:"Bootstarp",icon:<FaBootstrap/>,color:"#4700ba" },

      ],
      featured: false
    },
    {
      id: 3,
      title: "Musclenation",
      description: "A full-stack blog platform with user authentication, client management with SQl and responsive design for all devices.",
      image: "/api/placeholder/600/350", // Replace with your actual project image
      demoLink: "https://blog-platform.example.com",
      githubLink: "https://github.com/Kartikn-code/Musclenation",
      technologies: [
        {name: "Django",icon:<SiDjango/>, color:"#014e26"},
        {name:"HTML",icon:<FaHtml5/> },
        {name:"CSS",icon:<FaCss3Alt/> },
        {name:"Java-Script",icon:<FaJs/> },        
        {name:"SQL",icon:<FaDatabase/>},
      ],
      featured: false
    }
  ];

  // State for filter
  const [filter, setFilter] = useState('all');

  // Filtered projects based on current filter
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : filter === 'featured' 
      ? projectsData.filter(project => project.featured) 
      : projectsData;

  return (
    <div className="projects min-vh-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-20 py-16" data-aos="fade-in">
      <div className="max-w-6xl mx-auto" data-aos="zoom-in">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            My Projects
          </h1>
          <p className="text-black-300 max-w-2xl mx-auto text-secondary text-dark">
            Explore my latest projects showcasing my technical skills and creative problem-solving abilities.
          </p>
        </header>

        <div className="flex justify-center mb-10">
          <button
            className={`px-12 py-2 mx-2 rounded-full transition-all duration-300 ${
              filter === 'all' ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'bg-gray-700 hover:bg-black-200'
            }`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`featured px-12 py-2 mx-2 rounded-full transition-all duration-300 ${
              filter === 'featured' ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setFilter('featured')}
          >
            Featured
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-500 group border border-gray-700 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10"
             data-aos="fade-right">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-1 text-sm bg-gray-700/70 px-3 py-1 rounded-full"
                    >
                      <span style={{ color: tech.color, margin:"20px" }}>
                        {tech.icon}
                      </span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 float-right">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-4 py-2 rounded-full transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                   
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-black bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-colors duration-300"
                  >
                    <FaGithub />
                   
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;

         
    
    
    
    
   
