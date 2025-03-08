import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Web Developer",
    company: "GAO tek.Inc.",
    duration: "Sept 2024 - Jan 2025",
    description: "Developing and maintaining user-friendly web applications using React and Tailwind CSS. Collaborating with designers and backend developers to enhance user experience."
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Creative Web Studio",
    duration: "Jun 2021 - Dec 2021",
    description: "Built responsive websites, optimized performance, and gained experience in modern JavaScript frameworks."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12 bg-lineargradient-to-r from-blue via-purple to-pink text-white px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id} 
              className="p-6 bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">{exp.role} - {exp.company}</h3>
              <p className="text-sm text-gray-400">{exp.duration}</p>
              <p className="mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
