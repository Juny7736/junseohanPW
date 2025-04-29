import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" ref={sectionRef} className="py-24">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={variants} className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Junseo Han - About me"
                className="w-full h-full object-cover"
              />

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-accent-500 -translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary-500 translate-x-2 translate-y-2" />
            </div>
          </motion.div>

          <div>
            <motion.div variants={variants} className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium text-accent-500 bg-accent-50 dark:bg-accent-900/20 rounded-full mb-4">
                About Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 dark:text-white mb-4">
                Your future favorite Software Developer — just one hire away.
              </h2>
              <div className="w-20 h-1 bg-accent-500" />
            </motion.div>

            <motion.p variants={variants} className="mb-4 text-lg">
              Hello, I'm Junseo — a dedicated software developer from Toronto
              with over years of experience building robust, high-performance
              software solutions.
            </motion.p>

            <motion.p variants={variants} className="mb-6">
              I specialize in creating fast, accessible, and responsive digital
              products, including websites, web applications, and software
              platforms. My focus is on writing clean, maintainable code and
              applying modern design principles to deliver exceptional user
              experiences.
            </motion.p>

            <motion.p variants={variants} className="mb-8">
              When I'm not coding, you'll find me playing soccer, hitting the
              gym, jamming on my bass, or hanging out with friends. I believe
              these activities help fuel my creativity, teamwork, and
              problem-solving skills.
            </motion.p>

            <motion.div variants={variants} className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-3">
                  Education
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-accent-500 mr-2" />
                    <span>
                      Computer Programming & Analysis, Seneca Polytechnic
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-accent-500 mr-2" />
                    <span>Criminology, York University</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary-800 dark:text-white mb-3">
                  Experience
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-accent-500 mr-2" />
                    <span>Full-Stack Developer, Civiconnect.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-accent-500 mr-2" />
                    <span>Frontend Developer, DrawDream.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 mt-2 rounded-full bg-accent-500 mr-2" />
                    <span>Software Developer, Quotograph.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
