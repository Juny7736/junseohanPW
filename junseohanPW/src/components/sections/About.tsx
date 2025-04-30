import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./images/mesopretty.jpg",
    "./images/soccer2.jpg",
    "./images/soccer3.jpg",
    "./images/thebass.jpg",
    "./images/bass2.png",
    "./images/thegoonies.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
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
          <motion.div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={currentImageIndex}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.4 },
                  }}
                  className="absolute inset-0"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-accent-400/30 backdrop-blur-sm z-10 
                    transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                  <img
                    src={images[currentImageIndex]}
                    alt={`About me - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-accent-500 -translate-x-2 -translate-y-2" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary-500 translate-x-2 translate-y-2" />
            </div>
          </motion.div>

          {/* Rest of your component remains unchanged */}
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
              with years of experience building robust, high-performance
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
