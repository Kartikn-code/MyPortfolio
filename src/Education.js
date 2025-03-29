// import React, { useState, useEffect } from 'react';

// const EducationSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
  
//   const educationData = [
//     {
//       level: "10th Grade",
//       institution: "Thiruthangal Nadar Vidhyalaya",
//       year: "2018-2019",
//       grade: "89.5%",
//       achievements: [
//         "School Joint topper in Mathematics ",
//         "Active member of the Science Club",
//         "Participated in district-level Science Olympiad",
//         "Received A Best Student Entry for PCRA National Level Quiz Competition "
//       ]
//     },
//     {
//       level: "12th Grade",
//       institution: "Thiruthangal Nadar Vidhyalaya",
//       year: "2020-2021",
//       grade: "85.4%",
//       achievements: [
//         "House Captain of the School Team and led to Victory ",
//         "Involved In Volunteering Activities",
       
//       ]
//     },
//     {
//       level: "Undergraduate",
//       institution: "St.Joseph's College Of Engineering",
//       year: "2021-2025",
//       grade: "8.2 CGPA",
//       achievements: [
//         "Bachelor of Engineering In Mechanical Engineering",
//         "Specialized in Web Development and Database Management Systems",
//         "Completed 2 industry internships",
//         "Developed an e-commerce platform as capstone project",
//         "Published research paper on Curaua Fibres Which is benn a alternative for Wood and PVC "
//       ]
//     }
//   ];

//   // Auto cycle through education items
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % educationData.length);
//     }, 5000); // Change every 5 seconds
    
//     return () => clearInterval(interval);
//   }, [educationData.length]);

//   // Handle manual navigation
//   const handleClick = (index) => {
//     setActiveIndex(index);
//   };

//   // CSS styles as a JavaScript object
//   const styles = {
//     container: {
//       width: '100%',
//       maxWidth: '1200px',
//       height:'80lvh',
//       margin: '0 auto',
//       padding: '24px',
//       backgroundColor: '#f9f9f9',
//       borderRadius: '8px',
//       boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//       fontFamily: 'Arial, sans-serif'
//     },
//     heading: {
//       fontSize: '28px',
//       fontWeight: 'bold',
//       textAlign: 'center',
//       marginBottom: '32px',
//       color: '#4338ca'
//     },
//     timelineDots: {
//       display: 'flex',
//       justifyContent: 'center',
//       marginBottom: '24px'
//     },
//     dot: {
//       width: '16px',
//       height: '16px',
//       margin: '0 8px',
//       borderRadius: '50%',
//       backgroundColor: '#d1d5db',
//       cursor: 'pointer',
//       border: 'none',
//       transition: 'all 0.3s ease'
//     },
//     activeDot: {
//       backgroundColor: '#4338ca',
//       transform: 'scale(1.25)'
//     },
//     card: {
//       backgroundColor: 'white',
//       padding: '24px',
//       borderRadius: '8px',
//       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
//       transition: 'all 0.5s ease',
//       transform: 'scale(1)',
//       position: 'relative',
//       height:"50lvh"
//     },
//     cardHover: {
//       transform: 'scale(1.05)'
//     },
//     cardHeader: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: '16px'
//     },
//     levelTitle: {
//       fontSize: '24px',
//       fontWeight: 'bold',
//       color: '#4338ca',
//       margin: 0
//     },
//     year: {
//       color: '#4b5563',
//       fontWeight: '500',
//       fontSize: '16px'
//     },
//     institution: {
//       fontSize: '20px',
//       fontWeight: '600',
//       marginBottom: '8px',
//       color: '#111827'
//     },
//     grade: {
//       color: '#4b5563',
//       marginBottom: '16px',
//       fontSize: '16px'
//     },
//     achievementsTitle: {
//       fontSize: '18px',
//       fontWeight: '600',
//       marginBottom: '8px',
//       color: '#4338ca'
//     },
//     achievementsList: {
//       listStyleType: 'none',
//       padding: 0,
//       margin: 0
//     },
//     achievementItem: {
//       display: 'flex',
//       alignItems: 'flex-start',
//       marginBottom: '8px'
//     },
//     bullet: {
//       color: '#4338ca',
//       marginRight: '8px',
//       fontSize: '16px'
//     },
//     navigation: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       marginTop: '24px'
//     },
//     navButton: {
//       padding: '8px 16px',
//       backgroundColor: '#4338ca',
//       color: 'white',
//       border: 'none',
//       borderRadius: '20px',
//       cursor: 'pointer',
//       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//       transition: 'background-color 0.3s ease',
//       fontWeight: '500'
//     },
//     navButtonHover: {
//       backgroundColor: '#3730a3'
//     },
  
//   };

//   // State for hover effects
//   const [cardHover, setCardHover] = useState(false);
//   const [prevButtonHover, setPrevButtonHover] = useState(false);
//   const [nextButtonHover, setNextButtonHover] = useState(false);

//   return (
//     <div className="Education"style={styles.container}>
//       <h2 style={styles.heading}>Education</h2>
      
//       {/* Timeline dots */}
//       <div style={styles.timelineDots}>
//         {educationData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(index)}
//             style={{
//               ...styles.dot,
//               ...(index === activeIndex ? styles.activeDot : {})
//             }}
//             aria-label={`View ${educationData[index].level} education details`}
//           />
//         ))}
//       </div>
      
//       {/* Education Card */}
//       <div 
//         style={{
//           ...styles.card,
//           ...(cardHover ? styles.cardHover : {})
//         }}
//         onMouseEnter={() => setCardHover(true)}
//         onMouseLeave={() => setCardHover(false)}
//       >
//         <div style={styles.cardHeader}>
//           <h3 style={styles.levelTitle}>{educationData[activeIndex].level}</h3>
//           <span style={styles.year}>{educationData[activeIndex].year}</span>
//         </div>
        
//         <h4 style={styles.institution}>{educationData[activeIndex].institution}</h4>
//         <p style={styles.grade}>Grade: {educationData[activeIndex].grade}</p>
        
//         <h5 style={styles.achievementsTitle}>Key Achievements:</h5>
//         <ul style={styles.achievementsList}>
//           {educationData[activeIndex].achievements.map((achievement, i) => (
//             <li key={i} style={styles.achievementItem}>
//               <span style={styles.bullet}>•</span>
//               <span>{achievement}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Navigation arrows */}
//       <div style={styles.navigation}>
//         <button 
//           onClick={() => handleClick((activeIndex - 1 + educationData.length) % educationData.length)}
//           style={{
//             ...styles.navButton,
//             ...(prevButtonHover ? styles.navButtonHover : {})
//           }}
//           onMouseEnter={() => setPrevButtonHover(true)}
//           onMouseLeave={() => setPrevButtonHover(false)}
//           aria-label="Previous education"
//         >
//           ← Prev
//         </button>
//         <button 
//           onClick={() => handleClick((activeIndex + 1) % educationData.length)}
//           style={{
//             ...styles.navButton,
//             ...(nextButtonHover ? styles.navButtonHover : {})
//           }}
//           onMouseEnter={() => setNextButtonHover(true)}
//           onMouseLeave={() => setNextButtonHover(false)}
//           aria-label="Next education"
//         >
//           Next →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EducationSection;




// import React, { useState } from 'react';

// const EducationSection = () => {
//   const [expandedItem, setExpandedItem] = useState(null);

//   const educationData = [
//     {
//       id: 'undergrad',
//       title: 'Undergraduate Degree',
//       institution: "St.Joseph's college of Engineering",
//       duration: '2021 - 2025',
//       major: 'Mechanical Engineering',
//       details: `During my undergraduate studies, I focused on developing a strong foundation in 
//       software engineering principles, algorithms, and data structures. I maintained a GPA of 3.8/4.0 
//       throughout my program, consistently earning a place on the Dean's List for academic excellence.

//       Key Achievements:
//       • Completed a capstone project creating a web application for student resource management
//       • Participated in three hackathons, winning first place in the university's annual code competition
//       • Served as a teaching assistant for introductory programming courses
//       • Completed specialized coursework in artificial intelligence, web development, and database systems
      
//       Notable Courses:
//       Advanced Algorithms, Computer Networks, Software Engineering, Database Systems, 
//       Web Development, Mobile App Development, Artificial Intelligence, Machine Learning`
//     },
//     {
//       id: 'hsc',
//       title: 'Higher Secondary Certificate (HSC)',
//       institution: 'Your College Name',
//       duration: '2018 - 2020',
//       major: 'Science',
//       details: `I completed my Higher Secondary Certificate with a focus on science subjects, 
//       achieving a score of 92%. This period was crucial in developing my analytical thinking and 
//       problem-solving abilities.

//       Key Achievements:
//       • Ranked among the top 5% of students in my district
//       • Received recognition for excellence in Physics and Mathematics
//       • Participated in the National Science Olympiad, advancing to the regional finals
//       • Led the school's programming club, organizing workshops for junior students
      
//       Notable Subjects:
//       Physics, Chemistry, Mathematics, Computer Science, English, Physical Education`
//     },
//     {
//       id: 'ssc',
//       title: 'Secondary School Certificate (SSC)',
//       institution: 'Your School Name',
//       duration: '2016 - 2018',
//       major: 'General',
//       details: `My Secondary School Certificate education laid the groundwork for my academic journey,
//       where I scored 90% overall. This period sparked my interest in technology and programming.

//       Key Achievements:
//       • Class representative for two consecutive years
//       • Winner of inter-school mathematics competition
//       • Active participant in school's science fair with a project on renewable energy
//       • Received perfect scores in Mathematics and Computer Science examinations
      
//       Notable Subjects:
//       Mathematics, Science, English, Social Studies, Computer Applications, Physical Education`
//     }
//   ];

//   const toggleExpand = (id) => {
//     setExpandedItem(expandedItem === id ? null : id);
//   };

//   return (
//     <section className='Education' style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Education</h2>
//         <div style={styles.timeline}>
//           {educationData.map(item => (
//             <div key={item.id} style={styles.timelineItem}>
//               <div 
//                 style={styles.card} 
//                 onClick={() => toggleExpand(item.id)}
//                 className={expandedItem === item.id ? 'expanded' : ''}
//               >
//                 <div style={styles.cardHeader}>
//                   <h3 style={styles.cardTitle}>{item.title}</h3>
//                   <p style={styles.institution}>{item.institution}</p>
//                   <p style={styles.duration}>{item.duration}</p>
//                   <p style={styles.major}><strong>Major:</strong> {item.major}</p>
//                   <div style={expandedItem === item.id ? styles.expandButton : {...styles.expandButton, ...styles.collapsed}}>
//                     {expandedItem === item.id ? '−' : '+'}
//                   </div>
//                 </div>
//                 {expandedItem === item.id && (
//                   <div style={styles.cardDetails}>
//                     <p style={styles.detailsText}>{item.details}</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Pure CSS styles instead of Tailwind
// const styles = {
//   section: {
//     height: 'max-content  ',
//     width: '100%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     backgroundColor: '#f8f9fa',
//     fontFamily: 'Arial, sans-serif',
//     overflow: 'auto'
//   },
//   container: {
//     width: '100%',
//     maxWidth: '1000px',
//     margin: '0 auto'
//   },
//   heading: {
//     fontSize: '2.5rem',
//     marginBottom: '2rem',
//     textAlign: 'center',
//     color: '#333',
//     position: 'relative',
//     paddingBottom: '10px'
//   },
//   timeline: {
//     position: 'relative',
//     maxWidth: '1200px',
//     margin: '0 auto'
//   },
//   timelineItem: {
//     padding: '10px 40px',
//     position: 'relative',
//     backgroundColor: 'inherit',
//     width: '100%',
//     marginBottom: '30px'
//   },
//   card: {
//     position: 'relative',
//     backgroundColor: 'white',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease'
//   },
//   cardHeader: {
//     position: 'relative',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '5px'
//   },
//   cardTitle: {
//     fontSize: '1.4rem',
//     margin: '0 0 5px 0',
//     color: '#2c3e50'
//   },
//   institution: {
//     fontSize: '1.1rem',
//     margin: '0 0 5px 0',
//     color: '#3498db',
//     fontWeight: 'bold'
//   },
//   duration: {
//     fontSize: '0.9rem',
//     color: '#7f8c8d',
//     margin: '0 0 5px 0'
//   },
//   major: {
//     fontSize: '1rem',
//     margin: '0',
//     color: '#2c3e50'
//   },
//   expandButton: {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//     backgroundColor: '#3498db',
//     color: 'white',
//     width: '25px',
//     height: '25px',
//     borderRadius: '50%',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     cursor: 'pointer',
//     fontSize: '18px',
//     transition: 'all 0.3s ease'
//   },
//   collapsed: {
//     transform: 'rotate(0deg)'
//   },
//   cardDetails: {
//     marginTop: '15px',
//     padding: '10px 0',
//     borderTop: '1px solid #eee'
//   },
//   detailsText: {
//     whiteSpace: 'pre-line',
//     lineHeight: '1.6',
//     color: '#555'
//   }
// };

// export default EducationSection;




import React, { useState } from 'react';

const UndergraduateDetails = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = [
    { id: 'journey', label: 'My Journey' },
    { id: 'mechanical', label: 'Mechanical Engineering' },
    { id: 'development', label: 'Web Development' },
    { id: 'projects', label: 'Key Projects' }
  ];

  return (
    <section className='Education' style={styles.section}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Undergraduate Experience</h1>
        
        <div style={styles.overview}>
          <h3 style={styles.subheading}>BE in Mechanical Engineering</h3>
          <p style={styles.institution}>St.Joseph's College Of Engineering</p>
          <p style={styles.duration}>2021 - 2025</p>
          <p style={styles.gpa}>CGPA: 8.2/10.0</p>
        </div>

        <div style={styles.tabContainer}>
          <div style={styles.tabs}>
            {tabs.map(tab => (
              <button 
                key={tab.id}
                style={activeTab === tab.id ? {...styles.tabButton, ...styles.activeTab} : styles.tabButton}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={styles.tabContent}>
            {activeTab === 'journey' && (
              <div>
                <h4 style={styles.contentTitle}>From Mechanical to Digital: My Journey</h4>
                <p style={styles.paragraph}>
                  I began my undergraduate studies with a focus on mechanical engineering, drawn to the combination of physics, mathematics, and design. During my second year, I discovered web development through a university hackathon where I collaborated with computer science students. This experience ignited my passion for coding and digital creation.
                </p>
                <p style={styles.paragraph}>
                  While continuing to excel in my mechanical engineering coursework, I devoted my free time to learning programming languages and web technologies. I started with HTML, CSS, and JavaScript, gradually advancing to frontend frameworks and backend technologies. The problem-solving skills I developed through engineering proved invaluable in my programming journey.
                </p>
                <p style={styles.paragraph}>
                  By my final year, I was pursuing both disciplines in parallel – completing my mechanical engineering degree while working on web development projects. This unique combination has given me a distinctive perspective that blends physical systems understanding with digital implementation.
                </p>
              </div>
            )}

            {activeTab === 'mechanical' && (
              <div>
                <h4 style={styles.contentTitle}>Mechanical Engineering Foundation</h4>
                <div style={styles.twoColumn}>
                  <div>
                    <h5 style={styles.listTitle}>Core Coursework:</h5>
                    <ul style={styles.list}>
                      <li>Thermodynamics & Heat Transfer</li>
                      <li>Fluid Mechanics</li>
                      <li>Mechanical Design</li>
                      <li>Materials Science</li>
                      <li>Engineering Mathematics</li>
                      <li>CAD/CAM Applications</li>
                      <li>Manufacturing Processes</li>
                      <li>Control Systems</li>
                    </ul>
                  </div>
                  <div>
                    <h5 style={styles.listTitle}>Laboratory Experience:</h5>
                    <ul style={styles.list}>
                      <li>Materials Testing Lab</li>
                      <li>Fluid Mechanics Lab</li>
                      <li>Heat Transfer Lab</li>
                      <li>Manufacturing Workshop</li>
                      <li>Mechanical Measurements Lab</li>
                      <li>Dynamics & Vibrations Lab</li>
                      <li>Thermodynamics Lab</li>
                      <li>Mechatronics Lab</li>
                    </ul>
                  </div>
                </div>
                <div style={styles.achievements}>
                  <h5 style={styles.listTitle}>Key Achievements:</h5>
                  <ul style={styles.list}>
                    <li>Designed and built a small-scale Springless suspension system for automation</li>
                    <li>Led a team in the university's engineering design competition</li>
                    <li>Completed a research project on Investigation of Mechanical Properties of Curaua Fibers which are Sustainable Alternative to Wood & PVC </li>
                    <li>Placed 2nd in the departmental CAD design challenge</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'development' && (
              <div>
                <h4 style={styles.contentTitle}>Full Stack Development Skills</h4>
                <div style={styles.skillsContainer}>
                  <div style={styles.skillCategory}>
                    <h5 style={styles.skillTitle}>Frontend</h5>
                    <div style={styles.skillGrid}>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>HTML5/CSS3</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '95%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>JavaScript</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '90%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>React.js</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '85%'}}></div>
                        </div>
                      </div>
                    
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Bootstrap</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '80%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>TailwindCSS</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '60%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Django Framework</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '70%'}}></div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div style={styles.skillCategory}>
                    <h5 style={styles.skillTitle}>Backend</h5>
                    <div style={styles.skillGrid}>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Node.js</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '50%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Java</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '65%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Python</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '70%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>MongoDB</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '60%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>SQL</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '65%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>RESTful APIs</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={styles.skillCategory}>
                    <h5 style={styles.skillTitle}>Tools & Other</h5>
                    <div style={styles.skillGrid}>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Git/GitHub</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '85%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Responsive Design</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '90%'}}></div>
                        </div>
                      </div>
                      
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Tableau</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '70%'}}></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Vs-Code</span>
                        <div style={styles.progressBar}>
                          <div style={{...styles.progressFill, width: '95%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h4 style={styles.contentTitle}>Key Projects</h4>
                
                <div style={styles.project}>
                  <div style={styles.projectHeader}>
                    <h5 style={styles.projectTitle}>Engineering Equipment Monitoring Dashboard</h5>
                    <div style={styles.projectTags}>
                      <span style={styles.tag}>React</span>
                      <span style={styles.tag}>Node.js</span>
                      <span style={styles.tag}>MongoDB</span>
                      <span style={styles.tag}>IoT</span>
                    </div>
                  </div>
                  <p style={styles.projectDesc}>
                    Developed a web-based dashboard that monitors and visualizes real-time data from mechanical engineering laboratory equipment. This project bridged my mechanical engineering knowledge with web development skills, creating an intuitive interface for students and professors to monitor equipment status and experimental data.
                  </p>
                </div>

                <div style={styles.project}>
                  <div style={styles.projectHeader}>
                    <h5 style={styles.projectTitle}>CAD Model Sharing Platform</h5>
                    <div style={styles.projectTags}>
                      <span style={styles.tag}>JavaScript</span>
                      <span style={styles.tag}>Express</span>
                      <span style={styles.tag}>SQL</span>
                      <span style={styles.tag}>Three.js</span>
                    </div>
                  </div>
                  <p style={styles.projectDesc}>
                    Created a web platform for mechanical engineering students to share and collaborate on CAD models. Implemented 3D model viewing capabilities using Three.js and built a rating and feedback system to foster improvement and collaboration among peers.
                  </p>
                </div>

                <div style={styles.project}>
                  <div style={styles.projectHeader}>
                    <h5 style={styles.projectTitle}>Smart Manufacturing Process Simulator</h5>
                    <div style={styles.projectTags}>
                      <span style={styles.tag}>React</span>
                      <span style={styles.tag}>Redux</span>
                      <span style={styles.tag}>Canvas API</span>
                      <span style={styles.tag}>Node.js</span>
                    </div>
                  </div>
                  <p style={styles.projectDesc}>
                    Designed an interactive web application that simulates various manufacturing processes, allowing users to adjust parameters and visualize outcomes. This educational tool combines mechanical engineering principles with modern web technologies to create an engaging learning experience.
                  </p>
                </div>

                <div style={styles.project}>
                  <div style={styles.projectHeader}>
                    <h5 style={styles.projectTitle}>Engineering Calculators Suite</h5>
                    <div style={styles.projectTags}>
                      <span style={styles.tag}>HTML/CSS</span>
                      <span style={styles.tag}>JavaScript</span>
                      <span style={styles.tag}>PWA</span>
                    </div>
                  </div>
                  <p style={styles.projectDesc}>
                    Built a progressive web app featuring calculators for common mechanical engineering equations. The app works offline and includes interactive visualizations of concepts like stress analysis, fluid dynamics, and thermodynamic cycles.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Pure CSS styles
const styles = {
  section: {
    minHeight: '100vh',
    width: '100%',
    padding: '40px 20px',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Arial, sans-serif',
    height:'max-content'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  heading: {
   
    textAlign: 'center',
    color:'#004b89',
    marginBottom: '30px'
  },
  overview: {
    background: 'linear-gradient(45deg,rgb(235, 114, 14),rgba(21, 21, 21, 0.69))',
    borderRadius: '10px',
    padding: '30px',
    color: 'white',
    marginBottom: '30px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  subheading: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    fontWeight: 'bold'
  },
  institution: {
    fontSize: '1.3rem',
    marginBottom: '5px'
  },
  duration: {
    fontSize: '1.1rem',
    marginBottom: '5px',
    opacity: '0.9'
  },
  gpa: {
    fontSize: '1.1rem',
    fontWeight: 'bold'
  },
  tabContainer: {
    backgroundColor: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
  },
  tabs: {
    display: 'flex',
    borderBottom: '1px solid rgb(0, 0, 0)1'
  },
  tabButton: {
    padding: '15px',
    flex: '1',
    border: 'none',
    background: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: 'bold',
    color: '#111',
    outline: 'none'
  },
  activeTab: {
    color: '#f17f05 ',
    borderBottom: '3px solid #f17f05 ',
    backgroundColor: '#eceae8 ',
    fontsize:"30px"
  },
  tabContent: {
    padding: '30px'
  },
  contentTitle: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    color: '#111',
    borderBottom: '2px solid rgb(238, 104, 8)',
    paddingBottom: '10px'
  },
  paragraph: {
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
    color: '#444'
  },
  twoColumn: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    marginBottom: '20px'
  },
  listTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2c3e50'
  },
  list: {
    paddingLeft: '20px',
    lineHeight: '1.6'
  },
  achievements: {
    marginTop: '20px'
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  skillCategory: {
    marginBottom: '20px'
  },
  skillTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#2c3e50',
    borderLeft: '4px solid #f17f05 ',
    paddingLeft: '10px'
  },
  skillGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '15px'
  },
  skillItem: {
    marginBottom: '10px'
  },
  skillName: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  },
  progressBar: {
    height: '8px',
    width: '100%',
    backgroundColor: '#e1e1e1',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#f17f05 ',
    borderRadius: '4px'
  },
  project: {
    marginBottom: '25px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px',
    borderLeft: '4px solid rgb(239, 135, 15)'
  },
  projectHeader: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  },
  projectTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#2c3e50'
  },
  projectTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
    marginTop: '10px'
  },
  tag: {
    padding: '3px 8px',
    backgroundColor: '#f17f05 ',
    color: 'white',
    borderRadius: '3px',
    fontSize: '0.8rem'
  },
  projectDesc: {
    margin: '10px 0 0',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    color: '#444'
  }
};

export default UndergraduateDetails;