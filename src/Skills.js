import React from 'react'


const Skills = () => {
  return (
   <section className='skills container text-center align-items-center'>
    <h1 data-aos="fade-in">Skills</h1>
<header className='skills1 container d-f'>
    {/* <div className="container col-lg-6 col-md-6 col-sm-6 text-center" data-aos="flip-left"> */}
        <div className="skill-box" data-aos="fade-in">
            <span className="title fs-1 fs-md-2 fs-md-3"> 
                <img src="   https://cdn-icons-png.flaticon.com/512/174/174854.png " width="50px" height="50px" alt="" title="" class="img-small"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" loading="lazy" alt="Css 3 " title="Css 3 " width="50px" height="50px"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/16550/16550682.png" loading="lazy" alt="Database " title="Database " width="64" height="64"></img>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png " width="50px" height="50px" alt="" title="" class="img-small"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/919/919825.png" loading="lazy" alt="Nodejs " title="Nodejs " width="50px" height="50px"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/10832/10832132.png" loading="lazy" alt="Library " title="Library " width="50px" height="50px"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" loading="lazy" alt="Python " title="Python " width="50px" height="50px"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/226/226777.png" loading="lazy" alt="Java " title="Java " width="50px" height="50px"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" loading="lazy" alt="Bootstrap " title="Bootstrap " width="50px" height="50px"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" loading="lazy" alt="Github " title="Github " width="50px" height="50px"></img>
                <img src="https://automationpanda.com/wp-content/uploads/2017/09/django-logo-negative.png" width={20} height={50} alt='django'></img>
                <img src="https://cdn-icons-png.flaticon.com/128/15474/15474209.png" loading="lazy" alt="Database " title="Database " width="50px" height="50px"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/13731/13731251.png" loading="lazy" alt="Effective communication " title="Effective communication " width="50px" height="50px"></img>
                <img itemprop="contentUrl" src="https://www.svgrepo.com/show/452129/vs-code.svg" alt="Vs Code SVG File" title="Vs Code SVG File" width="50px" height="50px"></img>
            </span>


        </div>

        <div className='skillcontent' style={{display:"none"}}>
            these are some of the skills i have and i am also a optimistic person 
        </div>
       

        
       
    
        
    

    </header>
    

       
    
   
</section>
  )
}

export default Skills


// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
// import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si';
// import { motion } from 'framer-motion';

// const skills = [
//   { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
//   { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
//   { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
//   { name: 'React', icon: <FaReact className="text-blue-400" /> },
//   { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
//   { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
//   { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
//   { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-300" /> },
//   { name: 'Database', icon: <FaDatabase className="text-purple-500" /> },
// ];

// export default function Skills() {
//   return (
//     <div className="relative text-black w-20 py-20">
//       <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
//       <div className="flex flex-wrap justify-center gap-30 w-100">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="inline-block p-4 rounded-lg shadow-lg backdrop-blur-md hover:scale-110 transition-transform duration-300"
//             initial={{ y: -10 }}
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
//           >
//             <div className="text-5xl flex justify-center">{skill.icon}</div>
//             <p className="text-center mt-2 text-lg">{skill.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
