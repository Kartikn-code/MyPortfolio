// import React,{useState} from 'react'


// const Skills = () => {

//   return (
//    <section className='skills container text-center align-items-center'>
//     <h1 data-aos="fade-in">Skills</h1>
// <header className='skills1 container d-f'>
//     {/* <div className="container col-lg-6 col-md-6 col-sm-6 text-center" data-aos="flip-left"> */}
//         <div className="skill-box" data-aos="fade-in">
//             <span className="title fs-1 fs-md-2 fs-md-3"> 
//                 <img src="   https://cdn-icons-png.flaticon.com/512/174/174854.png " width="70px" height="70px" alt="" title="" class="img-small"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" loading="lazy" alt="Css 3 " title="Css 3 " width="70px" height="70px"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/16550/16550682.png" loading="lazy" alt="Database " title="Database " width="70px" height="70px"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png " width="50px" height="50px" alt="" title="" class="img-small"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/919/919825.png" loading="lazy" alt="Nodejs " title="Nodejs " width="70px" height="70px"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" loading="lazy" alt="Library " title="Library " width="70px" height="70px"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" loading="lazy" alt="Python " title="Python " width="70px" height="70px"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/226/226777.png" loading="lazy" alt="Java " title="Java " width="70px" height="70px"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" loading="lazy" alt="Bootstrap " title="Bootstrap " width="70px" height="70px"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" loading="lazy" alt="Github " title="Github " width="70px" height="70px"></img>
//                 <img src="https://automationpanda.com/wp-content/uploads/2017/09/django-logo-negative.png" width={30} height={60} alt='django'></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/15474/15474209.png" loading="lazy" alt="Database " title="Database " width="70px" height="70px"></img>
//                 <img src="https://cdn-icons-png.flaticon.com/128/13731/13731251.png" loading="lazy" alt="Effective communication " title="Effective communication " width="70px" height="70px"></img>
//                 <img itemprop="contentUrl" src="https://www.svgrepo.com/show/452129/vs-code.svg" alt="Vs Code SVG File" title="Vs Code SVG File" width="70px" height="70px"></img>
//             </span>


//         </div>


        
       
    
        
    

//     </header>
    

       
    
   
// </section>
//   )
// }
// const tooltip=({
//     imageUrl="https://cdn-icons-png.flaticon.com/512/174/174854.png",
// imageAlt = "Image", 
// tooltipText="This is a helpful tooltip!", 
// width = "full", 
// height = "auto" 
// })=>{
//     return (

//     )
// }







import React, { useState } from 'react';

const SkillLogos = () => {
  // Sample skills data - replace with your actual skills
  const skills = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 70 },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 65 },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percentage: 50 },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percentage: 97 },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percentage: 88 },
     {name:"Java",logo:"https://cdn-icons-png.flaticon.com/128/226/226777.png",percentage:60},
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", percentage: 70 },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", percentage: 88 },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", percentage: 75 },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", percentage: 55 },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", percentage: 78 },
    {name:"Vscode",logo:"https://www.svgrepo.com/show/452129/vs-code.svg",percentage:98},
    {name:"Django",logo:"https://automationpanda.com/wp-content/uploads/2017/09/django-logo-negative.png",percentage:80},
    {name:"github",logo:"https://cdn-icons-png.flaticon.com/128/2111/2111432.png",percentage:90}
];

  const SkillLogo = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    const containerStyle = {
      position: 'relative',
      width: '150px',
      height: 'max-xontent',
      margin: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '20px',
      backgroundColor: 'transparent',
      boxShadow: isHovered ? '0 10px 20px rgba(126, 124, 124, 0.1)' : '0 2px 4px rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease'
    };
    
    const imageStyle = {
      width: '120px',
      height: '120px',
     padding:"10px",
     objectFit: 'contain',
     
    };
    
    const overlayStyle = {
      position: 'absolute',
      inset: '0',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#6ae8b6 ',
      color: 'black',
      borderRadius: '20px',
      transition:"all + '0.3s ease'"
    };
    
    const percentageStyle = {
      fontSize: '20px',
      fontFamily:'MOntserrat',
      fontWeight:"600"
    };
    
    const nameStyle = {
      fontSize: '20px',
      marginTop: '2px'
    };
    
    return (
      <div 
        style={containerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered ? (
          <img 
            src={skill.logo} 
            alt={`${skill.name} logo`} 
            style={imageStyle}
          />
        ) : (
          <div style={overlayStyle} >
            <span style={percentageStyle}>{skill.percentage}%</span>
            <span style={nameStyle}>{skill.name}</span>
          </div>
        )}
      </div>
    );
  };

  const containerStyle = {
    padding: '16px',
    maxWidth: '93%',
    margintop:"20px",
    backgroundColor:"#c5d5ce ",
    opacity:"1"
  };
  
  const headingStyle = {
    fontSize: '80px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textAlign: 'center'
  };
  
  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  };

  return (
    <div style={containerStyle} className='skills container' >
      <h1 style={headingStyle}> Skills</h1>
      <div style={gridStyle} data-aos="zoom-in">
        {skills.map((skill, index) => (
          <SkillLogo key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillLogos;