import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import { projects, Category } from "../../data/projects";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all"
  );

  const categories: { value: Category | "all"; label: string }[] = [
    { value: "all", label: "All Projects" },
    // { value: "web", label: "Web Development" },
    { value: "software development", label: "Software Development" },
    { value: "full stack development", label: "Full Stack Development" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-accent-500 bg-accent-50 dark:bg-accent-900/20 rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p>
            I am still learning backend as I am a student so it is all work in
            progress!
          </p>
          <div className="w-20 h-1 bg-accent-500 mx-auto mb-8" />

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === category.value
                    ? "bg-primary-500 text-white"
                    : "bg-primary-100 dark:bg-primary-800 text-primary-600 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-700"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
