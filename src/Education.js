import React, { useState } from "react";

const UndergraduateDetails = () => {
  const [activeTab, setActiveTab] = useState("journey");

  const tabs = [
    { id: "journey", label: "My Journey" },
    { id: "mechanical", label: "Mechanical Engineering" },
    { id: "development", label: "Web Development" },
    { id: "projects", label: "Key Projects" },
  ];

  return (
    <section className="Education" style={styles.section}>
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
            {tabs.map((tab) => (
              <button
                key={tab.id}
                style={
                  activeTab === tab.id
                    ? { ...styles.tabButton, ...styles.activeTab }
                    : styles.tabButton
                }
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div style={styles.tabContent}>
            {activeTab === "journey" && (
              <div>
                <h4 style={styles.contentTitle}>
                  From Mechanical to Digital: My Journey
                </h4>
                <p style={styles.paragraph}>
                  I began my undergraduate studies with a focus on mechanical
                  engineering, drawn to the combination of physics, mathematics,
                  and design. During my second year, I discovered web
                  development through a university hackathon where I
                  collaborated with computer science students. This experience
                  ignited my passion for coding and digital creation.
                </p>
                <p style={styles.paragraph}>
                  While continuing to excel in my mechanical engineering
                  coursework, I devoted my free time to learning programming
                  languages and web technologies. I started with HTML, CSS, and
                  JavaScript, gradually advancing to frontend frameworks and
                  backend technologies. The problem-solving skills I developed
                  through engineering proved invaluable in my programming
                  journey.
                </p>
                <p style={styles.paragraph}>
                  By my final year, I was pursuing both disciplines in parallel
                  – completing my mechanical engineering degree while working on
                  web development projects. This unique combination has given me
                  a distinctive perspective that blends physical systems
                  understanding with digital implementation.
                </p>
              </div>
            )}

            {activeTab === "mechanical" && (
              <div>
                <h4 style={styles.contentTitle}>
                  Mechanical Engineering Foundation
                </h4>
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
                    <li>
                      Designed and built a small-scale Springless suspension
                      system for automation
                    </li>
                    <li>
                      Led a team in the university's engineering design
                      competition
                    </li>
                    <li>
                      Completed a research project on Investigation of
                      Mechanical Properties of Curaua Fibers which are
                      Sustainable Alternative to Wood & PVC{" "}
                    </li>
                    <li>
                      Designed and Fabricated the best Model during my second
                      Year which grabbed the college Attention{" "}
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "development" && (
              <div>
                <h4 style={styles.contentTitle}>
                  Full Stack Development Skills
                </h4>
                <div style={styles.skillsContainer}>
                  <div style={styles.skillCategory}>
                    <h5 style={styles.skillTitle}>Frontend</h5>
                    <div style={styles.skillGrid}>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>HTML5/CSS3</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "95%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>JavaScript</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "90%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>React.js</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "85%" }}
                          ></div>
                        </div>
                      </div>

                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Bootstrap</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "80%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>TailwindCSS</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "60%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Django Framework</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "70%" }}
                          ></div>
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
                          <div
                            style={{ ...styles.progressFill, width: "50%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Java</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "65%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Python</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>MongoDB</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "60%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>SQL</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "65%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>RESTful APIs</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "85%" }}
                          ></div>
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
                          <div
                            style={{ ...styles.progressFill, width: "85%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Responsive Design</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "90%" }}
                          ></div>
                        </div>
                      </div>

                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Tableau</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "70%" }}
                          ></div>
                        </div>
                      </div>
                      <div style={styles.skillItem}>
                        <span style={styles.skillName}>Vs-Code</span>
                        <div style={styles.progressBar}>
                          <div
                            style={{ ...styles.progressFill, width: "95%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div>
                <h4 style={styles.contentTitle}>Key Projects</h4>

                <div style={styles.project}>
                  <div style={styles.projectHeader}>
                    <h5 style={styles.projectTitle}>
                      Springless Suspension System
                    </h5>
                    <div style={styles.projectTags}>
                      <span style={styles.tag}>Arduino</span>
                      <span style={styles.tag}>Python</span>
                      <span style={styles.tag}>Design Of Macine Elements</span>
                      <span style={styles.tag}>IoT</span>
                    </div>
                  </div>
                  <p style={styles.projectDesc}>
                    Designed a springless suspension system for automated
                    vehicles using Arduino microcontrollers and Python scripts.
                    Utilized IoT technology to monitor vehicle performance and
                    optimize ride quality.
                  </p>
                </div>

                <div style={styles.project}>
                  <div style={styles.projectHeader}>
                    <h5 style={styles.projectTitle}>BuyME</h5>
                    <div style={styles.projectTags}>
                      <span style={styles.tag}>JavaScript</span>
                      <span style={styles.tag}>Wordpress</span>
                      <span style={styles.tag}>SQL</span>
                      <span style={styles.tag}>HTML/CSS</span>
                    </div>
                  </div>
                  <p style={styles.projectDesc}>
                    BuyMe is a user-friendly E-Commerce website built with
                    WordPress and WooCommerce, offering a seamless shopping
                    experience. Designed for efficiency and ease, it includes
                    advanced search functionality.
                  </p>
                </div>

                <div style={styles.project}>
                  <div style={styles.projectHeader}>
                    <h5 style={styles.projectTitle}>
                      Mechanical and Environmental Performance of Curaua Fiber
                      Composites
                    </h5>
                    <div style={styles.projectTags}>
                      <span style={styles.tag}>Strength Of Materials</span>
                      <span style={styles.tag}>Design of Machine Elements</span>
                    </div>
                  </div>
                  <p style={styles.projectDesc}>
                    Exploring the mechanical strength and eco-friendly potential
                    of Curaua fiber composites, this study highlights their
                    sustainability and superior performance as a robust
                    alternative to wood and PVC.
                  </p>
                </div>

                <div style={styles.project}>
                  <div style={styles.projectHeader}>
                    <h5 style={styles.projectTitle}>
                      Personal Portfolio Website
                    </h5>
                    <div style={styles.projectTags}>
                      <span style={styles.tag}>HTML/CSS</span>
                      <span style={styles.tag}>JavaScript</span>
                      <span style={styles.tag}>React JS</span>
                      <span style={styles.tag}>Tailwind CSS</span>
                    </div>
                  </div>
                  <p style={styles.projectDesc}>
                    Built a progressive web app featuring calculators for common
                    mechanical engineering equations. The app works offline and
                    includes interactive visualizations of concepts like stress
                    analysis, fluid dynamics, and thermodynamic cycles.
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
    minHeight: "100vh",
    width: "100%",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
    fontFamily: "Arial, sans-serif",
    height: "max-content",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    color: "#004b89",
    marginBottom: "30px",
  },
  overview: {
    background:
      "linear-gradient(45deg,rgb(235, 114, 14),rgba(21, 21, 21, 0.69))",
    borderRadius: "10px",
    padding: "30px",
    color: "white",
    marginBottom: "30px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  subheading: {
    fontSize: "1.8rem",
    marginBottom: "10px",
    fontWeight: "bold",
  },
  institution: {
    fontSize: "1.3rem",
    marginBottom: "5px",
  },
  duration: {
    fontSize: "1.1rem",
    marginBottom: "5px",
    opacity: "0.9",
  },
  gpa: {
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  tabContainer: {
    backgroundColor: "white",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  tabs: {
    display: "flex",
    borderBottom: "1px solid rgb(0, 0, 0)1",
  },
  tabButton: {
    padding: "15px",
    flex: "1",
    border: "none",
    background: "none",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    color: "#111",
    outline: "none",
  },
  activeTab: {
    color: "#f17f05 ",
    borderBottom: "3px solid #f17f05 ",
    backgroundColor: "#eceae8 ",
    fontsize: "30px",
  },
  tabContent: {
    padding: "30px",
  },
  contentTitle: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#111",
    borderBottom: "2px solid rgb(238, 104, 8)",
    paddingBottom: "10px",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "15px",
    color: "#444",
  },
  twoColumn: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    marginBottom: "20px",
  },
  listTitle: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#2c3e50",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.6",
  },
  achievements: {
    marginTop: "20px",
  },
  skillsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  skillCategory: {
    marginBottom: "20px",
  },
  skillTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#2c3e50",
    borderLeft: "4px solid #f17f05 ",
    paddingLeft: "10px",
  },
  skillGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
  },
  skillItem: {
    marginBottom: "10px",
  },
  skillName: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
  progressBar: {
    height: "8px",
    width: "100%",
    backgroundColor: "#e1e1e1",
    borderRadius: "4px",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#f17f05 ",
    borderRadius: "4px",
  },
  project: {
    marginBottom: "25px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "5px",
    borderLeft: "4px solid rgb(239, 135, 15)",
  },
  projectHeader: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  projectTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "0",
    color: "#2c3e50",
  },
  projectTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "5px",
    marginTop: "10px",
  },
  tag: {
    padding: "3px 8px",
    backgroundColor: "#f17f05 ",
    color: "white",
    borderRadius: "3px",
    fontSize: "0.8rem",
  },
  projectDesc: {
    margin: "10px 0 0",
    fontSize: "0.95rem",
    lineHeight: "1.6",
    color: "#444",
  },
};

export default UndergraduateDetails;
