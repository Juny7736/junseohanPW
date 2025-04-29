import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FiTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <FiLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FiMail />, href: 'mailto:hello@example.com', label: 'Email' },
  ]

  return (
    <footer className="bg-primary-50 dark:bg-primary-800 py-12 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary-600 dark:text-white">
              John<span className="text-accent-500">Doe</span>
            </a>
            <p className="mt-2 text-primary-500 dark:text-primary-300 max-w-md">
              Passionate frontend developer creating beautiful, functional, and user-centered digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-primary-700 text-primary-500 dark:text-primary-200 hover:text-accent-500 dark:hover:text-accent-500 transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-primary-500 dark:text-primary-400 text-sm">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer