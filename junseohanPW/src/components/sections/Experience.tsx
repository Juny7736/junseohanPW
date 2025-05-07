import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "Civiconnect",
    period: "September 2023 - December 2023",
    description: [
      "Redesigned 3 client websites with a 5-member team, improving load speed by 25% and reducing bounce rates by 15%",
      "Integrated third-party APIs with Postman testing; used Git for version control, cutting deployment issues by 20%",
      "Rebuilt front-end with React and TypeScript using responsive, reusable components; boosted mobile usability by 30%",
      "Used Tailwind CSS to create a modern UI, increasing user engagement and time-on-page by 20%",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Figma",
      "Tailwind CSS",
      "JavaScript",
      "Postman",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "DrawDream",
    period: "February 2025 - April 2025",
    description: [
      "Developed an AI-powered interview practice tool using TypeScript, React, and CSS to simulate real-time behavioral interviews for interviewers",
      "Integrated browser tab audio capture to transcribe instructor questions into text, allowing interviewers to respond verbally without needing direct access to the app.",
      "Sent interviewers answers to an AI model that generated personalized feedback and recommendations based on content and communication style.",
      "Enabled instructors to receive and deliver AI-generated feedback as their own, enhancing coaching realism and interviewers engagement",
    ],
    technologies: ["TypeScript", "React", "CSS", "Supabase", "Figma"],
  },
  {
    title: "Database Developer",
    company: "Kosta Toronto HQ",
    period: "April 2025 - Present",
    description: [
      "Manage and optimize event databases using Microsoft 365 apps, supporting 500+ volunteers and students annually through improved data organization and access.",
      "Design and develop custom apps and software solutions to streamline event operations, enhancing volunteer and student engagement",
      "TBD",
    ],
    technologies: ["TBD"],
  },
  {
    title: "Software Developer",
    company: "Quotograph.io",
    period: "February 2025 - May 2025",
    description: [
      "Built a project measurement tool using JavaScript, React, and SCSS, helping companies improve project estimation accuracy by 30% and reduce planning time by 20%.",
      "Developed 15+ responsive, scalable UI components with React and SCSS to streamline estimation workflows, increasing user task efficiency by 25%",
      "Collaborated with the development team to design and launch a measurement tool that improved project cost forecasting accuracy by 35%, enhancing decision-making speed by 20%",
    ],
    technologies: ["JavaScript", "React", "SCSS", "Python"],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 bg-primary-50 dark:bg-primary-800/30"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent-500 bg-accent-50 dark:bg-accent-900/20 rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-700" />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-accent-500 rounded-full border-4 border-white dark:border-primary-900" />

              <div
                className={`flex-1 ${index % 2 === 0 ? "md:text-left" : ""}`}
              >
                <div className="card p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <FiBriefcase className="text-accent-500" size={20} />
                    <h3 className="text-xl font-bold text-primary-800 dark:text-white">
                      {experience.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-primary-600 dark:text-primary-300 mb-4">
                    <FiCalendar size={16} />
                    <span>{experience.period}</span>
                  </div>

                  <p className="text-lg font-medium text-primary-700 dark:text-primary-200 mb-3">
                    {experience.company}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 mt-2 rounded-full bg-accent-500 mr-2" />
                        <span className="text-primary-600 dark:text-primary-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-700 text-primary-600 dark:text-primary-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
