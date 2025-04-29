import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: index * 0.1 
      } 
    }
  }

  return (
    <motion.div 
      variants={cardVariants}
      className="project-card card group"
    >
      <div className="relative overflow-hidden h-52">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-3">
            <a 
              href={project.demoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-primary-800 hover:text-accent-500 transition-colors duration-200"
              aria-label={`View Live Demo: ${project.title}`}
            >
              <FiExternalLink size={18} />
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full text-primary-800 hover:text-accent-500 transition-colors duration-200"
              aria-label={`View Code on GitHub: ${project.title}`}
            >
              <FiGithub size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-primary-800 dark:text-white">{project.title}</h3>
          <span className="px-2 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-600 text-primary-600 dark:text-primary-100 rounded-full">
            {project.category === 'web' ? 'Web App' : 
             project.category === 'mobile' ? 'Mobile App' : 'UI Design'}
          </span>
        </div>
        <p className="text-primary-600 dark:text-primary-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className="px-2 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-700 text-primary-600 dark:text-primary-300 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard