import React from 'react';
import { FaGithub,  } from 'react-icons/fa';   

const projects = [
    { id: 1, title: 'BuyME', description: "  BuyMe is a user-friendly E-Commerce website built with WordPress and WooCommerce, offering a seamless shopping experience. Designed for efficiency and ease, it includes advanced search functionality." ,link:'https://buymeorg.netlify.app/',gitlink:'https://github.com/Kartikn-code/E-commerce-Wordpress'},
    { id: 2, title: 'Gear-up', description: 'Gear-up is a static website created using HTML, CSS, and JavaScript for heavy machinery manufacturers and enthusiasts. It features strong equipment and a simple design, easy navigation and interactive features.',link:"https://gearupp.netlify.app/",gitlink:"https://github.com/Kartikn-code/Gear-up"},
    { id: 3, title: 'Musclenation', description: 'MuscleNation: A powerful gym website created with a combination of HTML, CSS, JavaScript, SQL, and Django. It provides the best experience for fitness lovers with workout plans, login-logout and signin deatils and their log.',link:"https://karti-knportfolio.netlify.app/",gitlink:"https://github.com/Kartikn-code/Musclenation" },
    { id: 4, title: 'Personal Portfolio', description: ' My Personal Portfolio Website is a modern, responsive React app showcasing myself and my skills, projects, and experience. There are also some smooth animations, and a contact form Using React,React-icons and Framer Motion, deployed on Netlify.',link:"https://karti-knportfolio.netlify.app/",gitlink:"https://github.com/Kartikn-code/myportfolio" },
];

const ProjectSection = () => {
    return (
        <section className="projects" >
            <h1 style={{color:"#111",fontSize:"5rem"}}>Projects</h1>        
            <div className="project-section" data-aos="zoom-in">
            {projects.map(project => (
                <a href={project.link} target='blank' style={{textDecoration:"none"}}> 
                <div className="project-card" key={project.id} data-aos="fade-down">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <a href={project.gitlink} target='blank'><FaGithub color='black' size={30} /></a>
                </div>
                </a>
            ))}
        </div>
        </section>

    );
};

export default ProjectSection;