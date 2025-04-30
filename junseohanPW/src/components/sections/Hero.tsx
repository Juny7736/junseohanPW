import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useState, useEffect } from "react";
import { Tilt } from "react-tilt";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const sentences = [
    "Hi, My name is Junseo Han",
    "Frontend Developer",
    "Full-Stack Developer",
    "Software Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % sentences.length;
      const fullText = sentences[current];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, sentences]);

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#FF6B6B",
      },
      links: {
        enable: true,
        color: "#FF6B6B",
        opacity: 0.2,
      },
      move: {
        enable: true,
        speed: 1,
      },
      size: {
        value: 2,
      },
      opacity: {
        value: 0.4,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <Particles
        className="absolute inset-0 -z-10"
        init={particlesInit}
        options={particlesConfig as any}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium"
            >
              WELCOME TO MY PORTFOLIO WEBSITE!
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-text text-transparent"
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg md:text-xl text-primary-600 dark:text-primary-300 mb-8 max-w-lg"
            >
              I engineer fast, accessible, visually compelling, and responsive
              digital solutions with a focus on performance and user experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="btn-primary bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="btn-outline border-primary-500 hover:border-accent-500 hover:text-accent-500 transform hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative order-first lg:order-last"
          >
            <Tilt options={{ max: 25, scale: 1.05 }}>
              <div className="relative w-full h-80 md:h-96 lg:h-[30rem] rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-400/30 to-accent-400/30 backdrop-blur-sm"
                  animate={{
                    background: [
                      "linear-gradient(to bottom right, rgba(59, 77, 113, 0.3), rgba(255, 107, 107, 0.3))",
                      "linear-gradient(to bottom right, rgba(255, 107, 107, 0.3), rgba(59, 77, 113, 0.3))",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <img
                  src="junseohanPW/images/linkedinpic.jpg"
                  alt="Junseo Han - Profile Picture"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1.5,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary-500 dark:text-primary-300"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <FiArrowDown className="animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
