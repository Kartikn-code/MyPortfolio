import React, { useState } from 'react';
import './Experience.css'; // Import your CSS file for styling

// Import necessary icon
import { X, Briefcase, Calendar, Code, Building } from 'lucide-react';

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  
  // Sample experience data - replace with your actual work experience
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      duration: "Jan 2022 - Present",
      description: "Led development of multiple web applications focusing on performance optimization and user experience.",
      techStack: ["React", "TypeScript", "Redux", "GraphQL", "Tailwind CSS"],
      companyLogo: "/api/placeholder/80/80",
      accomplishments: [
        {
          title: "E-commerce Platform Redesign",
          description: "Redesigned the company's flagship e-commerce platform resulting in 40% increase in conversions and 25% decrease in bounce rate.",
          images: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
        },
        {
          title: "Performance Optimization",
          description: "Improved application load time by 60% through code splitting, lazy loading, and optimized rendering strategies.",
          images: ["/api/placeholder/800/500"]
        },
        {
          title: "Component Library",
          description: "Developed a reusable component library that reduced development time for new features by 35%.",
          images: ["/api/placeholder/800/500"]
        }
      ]
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Innovate Digital",
      duration: "Mar 2020 - Dec 2021",
      description: "Developed responsive web applications and collaborated with design team to implement UI/UX improvements.",
      techStack: ["React", "JavaScript", "SCSS", "REST API", "Jest"],
      companyLogo: "/api/placeholder/80/80",
      accomplishments: [
        {
          title: "Admin Dashboard",
          description: "Built a comprehensive admin dashboard for client management system used by over 500 companies.",
          images: ["/api/placeholder/800/500", "/api/placeholder/800/500"]
        },
        {
          title: "Mobile Responsiveness",
          description: "Implemented responsive design principles across all company products, increasing mobile user engagement by 45%.",
          images: ["/api/placeholder/800/500"]
        }
      ]
    },
    {
      id: 3,
      role: "Web Developer Intern",
      company: "StartUp Labs",
      duration: "Jun 2019 - Feb 2020",
      description: "Assisted in developing web applications and learned modern development practices in an agile environment.",
      techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
      companyLogo: "/api/placeholder/80/80",
      accomplishments: [
        {
          title: "Company Website",
          description: "Contributed to the development of the company's main marketing website, implementing responsive layouts and animations.",
          images: ["/api/placeholder/800/500"]
        },
        {
          title: "Newsletter System",
          description: "Built an email newsletter subscription and management system integrated with the company CRM.",
          images: ["/api/placeholder/800/500"]
        }
      ]
    }
  ];
  
  // Open popup with selected experience details
  const openPopup = (experience) => {
    setSelectedExperience(experience);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  // Close popup
  const closePopup = () => {
    setSelectedExperience(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };
  
  return (
    <section className=" expereince container m-20 py-20 bg-transparent-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2">Professional Experience</h1>
        <h4 className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          My journey through various roles and projects
        </h4>
        
        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                {/* Company logo */}
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                    <img 
                      src={exp.companyLogo} 
                      alt={`${exp.company} logo`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Experience details */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-black-600 mb-4">
                    <div className="flex items-center">
                      <Building size={18} className="mr-1" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={18} className="mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <p className="mb-4">{exp.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code size={18} />
                      <span className="font-medium">Tech Stack:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* View Details button */}
                <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4">
                  <button
                    onClick={() => openPopup(exp)}
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center transition-colors"
                  >
                    <Briefcase size={18} className="mr-2" />
                    View Work
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Popup modal for detailed view */}
        {selectedExperience && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Popup header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h3 className="text-2xl font-bold">{selectedExperience.role}</h3>
                  <p className="text-black-600">{selectedExperience.company}</p>
                </div>
                <button 
                  onClick={closePopup}
                  className="p-2 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Popup content */}
              <div className="p-6">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4">Key Accomplishments</h4>
                  <div className="space-y-8">
                    {selectedExperience.accomplishments.map((item, index) => (
                      <div key={index} className="border-b pb-6 last:border-b-0">
                        <h5 className="text-lg font-medium mb-3">{item.title}</h5>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        
                        {/* Project images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {item.images.map((img, imgIndex) => (
                            <div key={imgIndex} className="rounded-lg overflow-hidden border">
                              <img 
                                src={img} 
                                alt={`${item.title} screenshot ${imgIndex + 1}`}
                                className="w-full h-auto"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tech stack section */}
                <div>
                  <h4 className="text-xl font-semibold mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Popup footer */}
              <div className="bg-gray-50 p-6 flex justify-end">
                <button
                  onClick={closePopup}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;

