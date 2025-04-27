import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "HTML", Skills: 100 },
  { name: "CSS", Skills: 90 },
  { name: "JavaScript", Skills: 60 },
  { name: "React", Skills: 50 },
  { name: "SQl", Skills: 70 },
  { name: "VS-code", Skills: 100 },
  { name: "django", Skills: 70 },
  { name: "Git-Hub", Skills: 90 },
];

export default function StyledChart() {
  return (
    <div
      data-aos="flip-up"
      className="graphccontainer-fluid fs-lg-1 fs-md-2 fs-sm-3 col-lg-12 col-md-12 col-sm-12 text-center justify-content-center "
      style={{ width: "60%", margin: "20px auto" }}
    >
      {" "}
      {/* Controls overall width */}
      <div></div>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="tranparent" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#111" />
          <YAxis stroke="#111" />
          <Tooltip />
          <Legend />
          <Line
            type="monotype"
            dataKey="Skills"
            stroke="#9125d8"
            strokeWidth={6}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// import React from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Tooltip } from 'react-tooltip';
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

// const skills = [
//   { name: 'HTML', percentage: 90, icon: <FaHtml5 color="#E34F26" /> },
//   { name: 'CSS', percentage: 85, icon: <FaCss3Alt color="#1572B6" /> },
//   { name: 'JavaScript', percentage: 80, icon: <FaJs color="#F7DF1E" /> },
//   { name: 'React', percentage: 75, icon: <FaReact color="#61DAFB" /> },
//   { name: 'Node.js', percentage: 70, icon: <FaNodeJs color="#339933" /> },
//   { name: 'SQL', percentage: 65, icon: <FaDatabase color="#003B57" /> }
// ];

// const SkillCard = ({ skill }) => (
//   <div className="flex flex-col items-center m-2" data-tooltip-id={skill.name}>
//     <div className="w-24 h-24">
//       <CircularProgressbar
//         value={skill.percentage}
//         text={''}
//         styles={buildStyles({
//           pathColor: '#4ADE80',
//           trailColor: '#D1D5DB',
//           strokeLinecap: 'round'
//         })}
//       />
//     </div>
//     <div className="mt-2 flex items-center space-x-1">
//       {skill.icon}
//       <span className="text-sm font-medium">{skill.name}</span>
//     </div>
//     <Tooltip id={skill.name} content={`${skill.percentage}%`} />
//   </div>
// );

// const SkillsDashboard = () => {
//   return (
//     <div className="p-6 bg-gray-50 rounded-2xl shadow-lg">
//       <h2 className="text-2xl font-bold text-center mb-4">My Skills</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
//         {skills.map((skill) => (
//           <SkillCard key={skill.name} skill={skill} />
//         ))}
//       </div>

//       <div className="mt-8">
//         <h3 className="text-xl font-semibold">Experience</h3>
//         <p className="text-gray-600">Fresher with hands-on projects and internships.</p>
//         <ul className="list-disc ml-5">
//           <li>Web Development Intern - XYZ Company</li>
//           <li>Frontend Intern - ABC Solutions</li>
//         </ul>

//         <h3 className="text-xl font-semibold mt-4">Certifications</h3>
//         <ul className="list-disc ml-5">
//           <li>React JS Certification - Udemy</li>
//           <li>Full Stack Development - Coursera</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SkillsDashboard;

// import React, { useState } from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Tooltip } from 'react-tooltip';
// import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
// import { SiTailwindcss, SiTypescript } from 'react-icons/si';

// const SkillsDashboard = () => {
//   // Skills data with name, percentage, color and icon
//   const skillsData = [
//     { name: 'HTML5', percentage: 90, color: '#E44D26', icon: <FaHtml5 /> },
//     { name: 'CSS3', percentage: 85, color: '#264DE4', icon: <FaCss3Alt /> },
//     { name: 'JavaScript', percentage: 80, color: '#F7DF1E', icon: <FaJs /> },
//     { name: 'React', percentage: 78, color: '#61DAFB', icon: <FaReact /> },
//     { name: 'Node.js', percentage: 70, color: '#339933', icon: <FaNodeJs /> },
//     { name: 'TypeScript', percentage: 65, color: '#3178C6', icon: <SiTypescript /> },
//     { name: 'Tailwind CSS', percentage: 85, color: '#38B2AC', icon: <SiTailwindcss /> },
//     { name: 'MongoDB', percentage: 72, color: '#47A248', icon: <FaDatabase /> },
//     { name: 'Git', percentage: 75, color: '#F05032', icon: <FaGitAlt /> },
//   ];

//   // Experience data
//   const experienceData = [
//     {
//       title: 'Frontend Development Intern',
//       company: 'TechSolutions Inc.',
//       period: 'Jun 2024 - Aug 2024',
//       description: 'Contributed to the development of responsive web applications using React.js. Implemented new features and fixed bugs in the codebase. Collaborated with senior developers to improve UI/UX.',
//     },
//     {
//       title: 'Web Development Intern',
//       company: 'InnovateTech',
//       period: 'Jan 2024 - Mar 2024',
//       description: 'Designed and developed static websites using HTML, CSS, and JavaScript. Assisted in the implementation of responsive design principles. Participated in code reviews and team meetings.',
//     },
//   ];

//   // Certifications data
//   const certificationsData = [
//     {
//       title: 'React.js Certification',
//       issuer: 'Meta',
//       date: 'Sep 2024',
//       credential: 'CERT-12345',
//     },
//     {
//       title: 'JavaScript Algorithms and Data Structures',
//       issuer: 'freeCodeCamp',
//       date: 'Jul 2024',
//       credential: 'CERT-67890',
//     },
//     {
//       title: 'Responsive Web Design',
//       issuer: 'freeCodeCamp',
//       date: 'May 2024',
//       credential: 'CERT-24680',
//     },
//   ];

//   // State for active section
//   const [activeSection, setActiveSection] = useState('skills');

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
//       <div className="max-w-6xl mx-auto">
//         <header className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
//             My Professional Skills
//           </h1>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             A passionate developer with expertise in modern web technologies. Eager to contribute innovative solutions to challenging projects.
//           </p>
//         </header>

//         <nav className="flex justify-center mb-10">
//           <button
//             className={`px-6 py-2 mx-2 rounded-full transition-all duration-300 ${
//               activeSection === 'skills' ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'bg-gray-700 hover:bg-gray-600'
//             }`}
//             onClick={() => setActiveSection('skills')}
//           >
//             Skills
//           </button>
//           <button
//             className={`px-6 py-2 mx-2 rounded-full transition-all duration-300 ${
//               activeSection === 'experience' ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'bg-gray-700 hover:bg-gray-600'
//             }`}
//             onClick={() => setActiveSection('experience')}
//           >
//             Experience
//           </button>
//           <button
//             className={`px-6 py-2 mx-2 rounded-full transition-all duration-300 ${
//               activeSection === 'certifications' ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'bg-gray-700 hover:bg-gray-600'
//             }`}
//             onClick={() => setActiveSection('certifications')}
//           >
//             Certifications
//           </button>
//         </nav>

//         <div
//           className={`transition-opacity duration-500 ${
//             activeSection === 'skills' ? 'opacity-100' : 'opacity-0 hidden'
//           }`}
//         >
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {skillsData.map((skill, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10"
//                 data-tooltip-id={`skill-tooltip-${index}`}
//                 data-tooltip-content={`${skill.percentage}% Proficiency`}
//               >
//                 <div className="w-24 h-24 mb-4">
//                   <CircularProgressbar
//                     value={skill.percentage}
//                     text={`${skill.percentage}%`}
//                     styles={buildStyles({
//                       textSize: '1.5rem',
//                       pathColor: skill.color,
//                       textColor: 'white',
//                       trailColor: '#2D3748',
//                     })}
//                   />
//                 </div>
//                 <div className="text-5xl mb-3" style={{ color: skill.color }}>
//                   {skill.icon}
//                 </div>
//                 <h3 className="text-xl font-bold">{skill.name}</h3>
//                 <Tooltip id={`skill-tooltip-${index}`} />
//               </div>
//             ))}
//           </div>
//         </div>

//         <div
//           className={`transition-opacity duration-500 ${
//             activeSection === 'experience' ? 'opacity-100' : 'opacity-0 hidden'
//           }`}
//         >
//           <div className="space-y-8">
//             {experienceData.map((exp, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:translate-x-2 transition-all duration-300 border border-gray-700 hover:border-blue-500/50 shadow-lg hover:shadow-blue-500/10"
//               >
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
//                   <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
//                   <span className="text-gray-400">{exp.period}</span>
//                 </div>
//                 <h4 className="text-lg font-semibold text-purple-300 mb-2">{exp.company}</h4>
//                 <p className="text-gray-300">{exp.description}</p>
//               </div>
//             ))}
//             <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
//               <h3 className="text-xl font-bold text-center mb-4">Looking for New Opportunities</h3>
//               <p className="text-center text-gray-300">
//                 As a fresh graduate, I'm excited to bring my skills, enthusiasm, and innovative thinking to a dynamic team.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div
//           className={`transition-opacity duration-500 ${
//             activeSection === 'certifications' ? 'opacity-100' : 'opacity-0 hidden'
//           }`}
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {certificationsData.map((cert, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 hover:transform hover:rotate-1 transition-all duration-300 border border-gray-700 hover:border-purple-500/50 shadow-lg hover:shadow-purple-500/10"
//               >
//                 <div className="flex justify-between items-start">
//                   <h3 className="text-xl font-bold text-purple-400">{cert.title}</h3>
//                   <span className="text-sm bg-blue-900/50 px-3 py-1 rounded-full">{cert.date}</span>
//                 </div>
//                 <h4 className="text-lg text-blue-300 mt-2 mb-4">Issued by: {cert.issuer}</h4>
//                 <div className="flex items-center">
//                   <span className="text-xs uppercase tracking-wider text-gray-400 mr-2">Credential ID:</span>
//                   <span className="text-gray-300">{cert.credential}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillsDashboard;
